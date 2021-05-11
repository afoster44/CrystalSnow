import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class WorkOrdersService {
  async createWorkOrder(workOrder) {
    const res = await api.post('api/workorders', workOrder)
    AppState.workOrders += res.data
  }
}

export const workOrdersService = new WorkOrdersService()
