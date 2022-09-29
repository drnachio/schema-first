import { Model } from './model';

const modelChecker = <T extends Model<T>>(model: T): T => model;

export default modelChecker;

