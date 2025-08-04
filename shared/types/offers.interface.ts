import { Types } from 'mongoose';

export interface IOffer {
  name: string;
  type: 'percentage' | 'fixed';
  discountValue: number; 
  productIds?: Types.ObjectId[]; 
  categoryId?: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  isActive?: boolean; 
  createdAt?: Date;
  updatedAt?: Date;
}
