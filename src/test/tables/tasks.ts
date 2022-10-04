import { Table } from '../../model/table';
import type { BaseModelDefinition } from '../model';

const tasks: Table<BaseModelDefinition> = {
  translations: {
    en: { singular: 'Task', plural: 'Tasks' },
    es: { singular: 'Tarea', plural: 'Tareas' },
  },
};

export default tasks;
