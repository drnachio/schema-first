import { FieldsOf } from './fields';
import { Model } from './model';

/**
 * Base view preset for inherence
 */
export interface BaseViewPreset<T extends Model<T>, TableName extends keyof T['schema']> {
  type: string;
  /**
   * Field Names
   */
  fields: FieldsOf<T, TableName>[];
  /**
   * {fieldName} for ascending or -{fieldName} for descending
   */
  sort?: `${FieldsOf<T, TableName>} desc` | `${FieldsOf<T, TableName>} asc`;
}

/**
 * Data grid view preset
 */
export interface TabularView<T extends Model<T>, TableName extends keyof T['schema']>
  extends BaseViewPreset<T, TableName> {
  type: 'tabular';
}

/**
 * Table view preset
 */
export type ViewPreset<T extends Model<T>, TableName extends keyof T['schema']> = TabularView<
  T,
  TableName
>;

export type Views<T extends Model<T>, TableName extends keyof T['schema']> = {
  [Key: string]: ViewPreset<T, TableName>[];
};
