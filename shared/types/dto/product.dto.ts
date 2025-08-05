// src/dtos/product.dto.ts

import { Types } from "mongoose";

export interface IVariantOption {
  quality?: string;
  size?: number;
  color?: string;
  price?: IPrice;
  stock?: number;
}

export interface IMedia {
  type: "image" | "video" | "3d";
  url?: string;
  alt?: string;
}

export interface IPrice {
  original?: number;
  discounted?: number;
  discountPercent?: number;
}

export interface IDescription {
  full?: string;
  short?: string;
}

export interface IProductDTO {
  unique: Types.ObjectId;
  ProductName: string;
  description?: IDescription;
  variants?: IVariantOption[];
  price?: IPrice;
  stock?: number;
  medias?: IMedia[];
  createdAt?: Date;
  updatedAt?: Date;
}
