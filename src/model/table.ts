import { Icon } from './icons';
import { Model } from './model';
import { Pluralized } from './pluralized';

export type Table<T extends Model<Langs, Tables>, Langs extends string, Tables extends string> = {
  /**
   * Translation for the collection
   */
  translations: Record<Langs, Pluralized>;
  /**
   * List of fields of the collection
   */
  icon?: Icon;
  /**
   * Color of the section in the menú
   */
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
