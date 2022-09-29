import { Model } from "./model";

type MaxDepthInRelatedField = 5;
type BasicFieldTypes = 'string' | 'date';

export type Fields<T extends Model<T>> = {
  [Key: string]: keyof T['schema'] | BasicFieldTypes;
};

export type FieldsOf<
  T extends Model<T>,
  TableName extends keyof T['schema'],
  Prefix extends string = '',
  Depth extends number = MaxDepthInRelatedField,
  Accumulator extends number[] = [],
> = {
  [FieldName in keyof T['schema'][TableName]['fields']]: T['schema'][TableName]['fields'][FieldName] extends BasicFieldTypes
    ? FieldName extends string
      ? `${Prefix}${FieldName}`
      : never
    : T['schema'][TableName]['fields'][FieldName] extends keyof T['schema']
    ? Accumulator['length'] extends Depth
      ? never
      : FieldsOf<
          T,
          T['schema'][TableName]['fields'][FieldName],
          `${Prefix}${FieldName extends string ? FieldName : ''}.`,
          Depth,
          [...Accumulator, Depth]
        >
    : never;
}[keyof T['schema'][TableName]['fields']];
