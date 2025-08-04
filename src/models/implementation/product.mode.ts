import { model, models, Schema } from "mongoose";
import {
  IMedia,
  
  IVariantOption,
} from "shared/types/index";
import { IProductDocumet } from "../interface/product.document";

const variantSchema = new Schema<IVariantOption>(
  {
    quality: String,
    size: Number,
    color: String,
    price: Number,
    stock: Number,
  },
  { _id: false }
);
const IMediaSchema = new Schema<IMedia>(
  {
    type: {
      type: String,
      enum: ["image", "video", "3d"],
    },
    url: String,
    alt: String,
  },
  { _id: false }
);

const productSchema = new Schema<IProductDocumet>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      full: String,
      short: String,
    },
    isVariant: Boolean,
    variants: [variantSchema],
    price: {
      original: Number,
      discounted: Number,
      discountPercent: Number,
    },
    stock: {
      type: Number,
    },
    medias: [IMediaSchema],
  },
  { timestamps: true }
);
productSchema.pre('save', function (next) {
  if (this.isVariant && (!this.variants || this.variants.length === 0)) {
    return next(new Error("Variants must be provided if isVariant is true"));
  }
  if (!this.isVariant && (!this.price || typeof this.stock !== 'number')) {
    return next(new Error("Price and stock must be provided if isVariant is false"));
  }
  next();
});

export default model("Product", productSchema);
