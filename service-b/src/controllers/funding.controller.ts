import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Funding} from '../models';
import {FundingRepository} from '../repositories';

export class FundingController {
  constructor(
    @repository(FundingRepository)
    public fundingRepository: FundingRepository,
  ) {}

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
    return this.fundingRepository.create(funding);
  }

  @get('/fundings/count', {
    responses: {
      '200': {
        description: 'Funding model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Funding))
    where?: Where<Funding>,
  ): Promise<Count> {
    return this.fundingRepository.count(where);
  }

  @get('/fundings', {
    responses: {
      '200': {
        description: 'Array of Funding model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Funding)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Funding))
    filter?: Filter<Funding>,
  ): Promise<Funding[]> {
    return this.fundingRepository.find(filter);
  }

  @patch('/fundings', {
    responses: {
      '200': {
        description: 'Funding PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funding, {partial: true}),
        },
      },
    })
    funding: Funding,
    @param.query.object('where', getWhereSchemaFor(Funding))
    where?: Where<Funding>,
  ): Promise<Count> {
    return this.fundingRepository.updateAll(funding, where);
  }

  @get('/fundings/{id}', {
    responses: {
      '200': {
        description: 'Funding model instance',
        content: {'application/json': {schema: getModelSchemaRef(Funding)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Funding> {
    return this.fundingRepository.findById(id);
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
    await this.fundingRepository.updateById(id, funding);
  }

  @put('/fundings/{id}', {
    responses: {
      '204': {
        description: 'Funding PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() funding: Funding,
  ): Promise<void> {
    await this.fundingRepository.replaceById(id, funding);
  }

  @del('/fundings/{id}', {
    responses: {
      '204': {
        description: 'Funding DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fundingRepository.deleteById(id);
  }
}
