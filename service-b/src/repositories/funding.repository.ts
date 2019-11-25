import {DefaultCrudRepository} from '@loopback/repository';
import {Funding, FundingRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FundingRepository extends DefaultCrudRepository<
  Funding,
  typeof Funding.prototype.id,
  FundingRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Funding, dataSource);
  }
}
