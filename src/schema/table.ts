import { Fields } from "./fields";
import { Icon } from "./icons";
import { Model } from "./model";
import { Pluralized } from "./pluralized";
import { ViewPreset, Views } from "./views";

export type Table<T extends Model<T>, TableName extends keyof T['schema']> = {
  /**
   * Translation for the collection
   */
  translations: Record<T['languages'][number], Pluralized>;
  /**
   * List of fields of the collection
   */
  fields: Fields<T>;
  defaultView: ViewPreset<T, TableName>;
  views?: Views<T, TableName>;
  icon?: Icon;
  color?: string;
  /**
   * Generates the createdAt, updatedAt, createdBy and updatedBy columns
   * and activates the audit for the collection (history of updates)
   * true by default
   */
  trackChanges?: boolean;
  /**
   * Generates the status field with the state of the record
   * true by default
   */
  softDelete?: boolean;
};
