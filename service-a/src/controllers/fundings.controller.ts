import {inject} from '@loopback/context';
import {FundingService} from '../services';
import {
  get,
  ResponseObject,
  getModelSchemaRef,
  param,
  del,
  put,
  requestBody,
  post,
  patch,
} from '@loopback/rest';
import {Funding} from '../models';

const GET_FUNDINGS_RESPONSE: ResponseObject = {
  description: 'Fundings Response',
  content: {
    'application/json': {
      schema: getModelSchemaRef(Funding),
    },
  },
};

const GET_FUNDING_BY_ID_RESPONSE: ResponseObject = {
  description: 'Get finding by id Response',
  content: {
    'application/json': {
      schema: getModelSchemaRef(Funding),
    },
  },
};

const DELETE_FUNDING_BY_ID_RESPONSE: ResponseObject = {
  description: 'Delete finding by id Response',
  content: {
    'application/json': {
      schema: getModelSchemaRef(Funding),
    },
  },
};

const REPLACE_FUNDING_BY_ID_RESPONSE: ResponseObject = {
  description: 'Replace finding by id Response',
  content: {
    'application/json': {
      schema: getModelSchemaRef(Funding),
    },
  },
};

export class FundingsController {
  constructor(
    @inject('services.FundingService')
    protected FundingService: FundingService,
  ) {}

  @get('/fundings', {
    responses: {
      '200': GET_FUNDINGS_RESPONSE,
    },
  })
  fundings(): Promise<Funding[]> {
    return this.FundingService.getFundings();
  }

  @get('/fundings/{id}', {
    responses: {
      '200': GET_FUNDING_BY_ID_RESPONSE,
    },
  })
  getFundingById(@param.path.string('id') id: string): Promise<Funding> {
    return this.FundingService.getFundingById(id);
  }

  @del('/fundings/{id}', {
    responses: {
      '204': DELETE_FUNDING_BY_ID_RESPONSE,
    },
  })
  deleteFundingById(@param.path.string('id') id: string): Promise<Funding> {
    return this.FundingService.deleteFundingById(id);
  }

  @put('/fundings/{id}', {
    responses: {
      '200': REPLACE_FUNDING_BY_ID_RESPONSE,
    },
  })
  async replaceFundingById(
    @param.path.string('id') id: string,
    @requestBody() funding: Funding,
  ): Promise<void> {
    await this.FundingService.replaceFundingById(id, funding);
  }

  @post('/fundings', {
    responses: {
      '200': {
        description: 'Funding model instance',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': getModelSchemaRef(Funding, {exclude: ['id']}),
            },
          },
        },
      },
    },
  })
  create(@requestBody() funding: Funding): Promise<Funding> {
    return this.FundingService.createFunding(funding);
  }

  @patch('/fundings/{id}', {
    responses: {
      '204': {
        description: 'Funding PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funding, {partial: true}),
        },
      },
    })
    funding: Funding,
  ): Promise<void> {
    await this.FundingService.updateFundingById(id, funding);
  }
}
