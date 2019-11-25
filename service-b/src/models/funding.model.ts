import {Entity, model, property} from '@loopback/repository';

@model()
export class Funding extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  companyName?: string;

  @property({
    type: 'string',
  })
  registrationNumber?: string;

  @property({
    type: 'number',
    default: 100,
  })
  amount?: number;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  endDate?: string;


  constructor(data?: Partial<Funding>) {
    super(data);
  }
}

export interface FundingRelations {
  // describe navigational properties here
}

export type FundingWithRelations = Funding & FundingRelations;
