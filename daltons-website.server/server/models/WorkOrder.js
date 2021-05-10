import mongoose from 'mongoose'
const Schema = mongoose.Schema

const WorkOrder = new Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

WorkOrder.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default WorkOrder
