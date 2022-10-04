import createModel from '../model/model';
import tasks from './tables/tasks';

const baseModel = createModel()
  .addLanguage('es')
  .addLanguage('en')
  .addTable('tasks')
  .addTable('taskCollections');

export type BaseModelDefinition = typeof baseModel;

const dataModel = baseModel.addTableDefinition({ tasks });

export default dataModel;
