import { IProductDocumet } from "@/models/interface/product.document";
import { BaseRepository } from "../basic.repository";
import { Model } from "mongoose";

export class ProductRepository extends BaseRepository<IProductDocumet> {
  constructor(productModel: Model<IProductDocumet>) {
    super(productModel);
  }
}
