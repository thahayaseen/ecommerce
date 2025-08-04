import { Document } from "mongoose";
import { IProduct } from "shared/types/product.interface";

export interface IProductDocumet extends Document, Omit<IProduct, "_id"> {}
