import { Document } from 'mongoose';
import { IOffer } from 'shared/types/offers.interface';
export interface IOfferDocumet extends IOffer,Document{}