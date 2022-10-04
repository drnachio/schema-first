import { Table } from "./table";

export type Model<Langs extends string, Tables extends string> = {
  lang: Langs,
  table: Tables,
  addLanguage: <Lang extends string>(lang: Lang) => Model<Langs | Lang, Tables>;
  addTable: <Table extends string>(lang: Table) => Model<Langs, Tables | Table>;
  addTableDefinition: { t: Table<Model<Langs, Tables>> };
};

const createModel = (): Model<never, never> => {
  const memo = {
    addLanguage: () => memo,
    addTable: () => memo,
  };
  return memo;
};

export default createModel;
