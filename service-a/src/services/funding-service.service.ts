import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestfundingsDataSource} from '../datasources';
import {Funding} from '../models';

export interface FundingService {
  updateFundingById(id: string, funding: Funding): Promise<Funding>;
  createFunding(funding: Funding): Promise<Funding>;
  getFundings(): Promise<Funding[]>;
  getFundingById(id: string): Promise<Funding>;
  deleteFundingById(id: string): Promise<Funding>;
  replaceFundingById(id: string, funding: Partial<Funding>): Promise<Funding>;
}

export class FundingServiceProvider implements Provider<FundingService> {
  constructor(
    @inject('datasources.restfundings')
    protected dataSource: RestfundingsDataSource = new RestfundingsDataSource(),
  ) {}

  value(): Promise<FundingService> {
    return getService(this.dataSource);
  }
}
