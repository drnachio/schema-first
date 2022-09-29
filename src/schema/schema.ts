import { Model } from "./model";
import { Table } from "./table";

export type Schema<T extends Model<T>> = {
  [TableName in keyof T['schema']]: Table<T, TableName>;
};