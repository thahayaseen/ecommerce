// src/dtos/product.dto.ts

import { Types } from "mongoose";

// Interfaces (you can import from shared if needed)
export interface IVariantOption {
  quality?: string;
  size?: number;
  color?: string;
  price?: number;
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
  _id: Types.ObjectId;
  title: string;
  description?: IDescription;
  isVariant?: boolean;
  variants?: IVariantOption[];
  price?: IPrice;
  stock?: number;
  medias?: IMedia[];
  createdAt?: Date;
  updatedAt?: Date;
}


