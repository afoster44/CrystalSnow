import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import WorkOrder from '../models/WorkOrder'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  WorkOrders = mongoose.model('WorkOrder', WorkOrder)
}

export const dbContext = new DbContext()
