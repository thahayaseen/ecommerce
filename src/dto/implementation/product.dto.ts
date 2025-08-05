import { Types } from 'mongoose';
import { IProductDTO } from '../../../shared/types/dto/product.dto';
import { IDescription, IMedia, IPrice, IProduct, IVariantOption } from 'shared/types';
// Main DTO Class
export class ProductDTO implements IProductDTO {
  unique: Types.ObjectId;
  ProductName: string;
  description?: IDescription;
  isVariant?: boolean;
  variants?: IVariantOption[];
  price?: IPrice;
  stock?: number;
  medias?: IMedia[];
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data: IProduct) {
    this.unique = data._id;
    this.ProductName = data.title;
    this.description = data.description;
    this.isVariant = data.isVariant;
    this.variants = data.variants;
    this.price = data.price;
    this.stock = data.stock;
    this.medias = data.medias;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }


}