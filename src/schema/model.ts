import { Schema } from "./schema";

export type Model<T extends Model<T>> = {
  languages: readonly string[];
  schema: Schema<T>;
};
