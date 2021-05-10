import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class WorkOrdersService {
  async find(query = {}) {
    const workOrders = await dbContext.WorkOrders.find(query)
    return workOrders
  }

  async findById(id) {
    const workOrder = await dbContext.WorkOrders.findById(id)
    if (!workOrder) {
      throw new BadRequest('Invalid Id')
    }
    return workOrder
  }

  async create(body) {
    const workOrder = await dbContext.WorkOrders.create(body)
    if (!workOrder) {
      throw new BadRequest('Please provide the proper properties for creation')
    }
    return workOrder
  }
}

export const workOrdersService = new WorkOrdersService()
