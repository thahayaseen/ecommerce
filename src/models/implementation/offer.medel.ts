import { IOfferDocumet } from '../interface/Ioffer.mode';
import { IOffer } from './../../../shared/types/offers.interface';
import { model, Schema, SchemaDefinition, Types } from "mongoose";


const OfferSchmaDef: SchemaDefinition<IOffer    > = {
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["percentage", "fixed"],
  },
  categoryId: { type: Types.ObjectId },
  discountValue: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  productIds: {
    type: Types.ObjectId,
    required: false,
  },
};
const offerSchma = new Schema<IOfferDocumet>(OfferSchmaDef);
export default model<IOfferDocumet>('Offers',offerSchma)