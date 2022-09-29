import modelChecker from '../schema/modelChecker';

const model = modelChecker({
  languages: ['es-ES', 'en-US'] as const,
  schema: {
    categoryGroup: {
      translations: {
        'en-US': { singular: 'Category Group', plural: 'Categories Groups' },
        'es-ES': { singular: 'Grupo de Categorías', plural: 'Grupos de Categorías' },
      },
      fields: {
        title: 'string',
        description: 'string',
        parentGroup: 'categoryGroup',
      },
      defaultView: {
        type: 'tabular',
        fields: [
          'title',
          'description',
          'parentGroup.title',
          'parentGroup.parentGroup.description',
        ],
      },
    },
    categories: {
      translations: {
        'en-US': { singular: 'Category', plural: 'Categories' },
        'es-ES': { singular: 'Categoría', plural: 'Categorías' },
      },
      fields: {
        title: 'string',
        description: 'string',
        group: 'categoryGroup',
      },
      defaultView: {
        type: 'tabular',
        fields: ['title', 'description'],
      },
    },
    tasks: {
      translations: {
        'en-US': { singular: 'Task', plural: 'Tasks' },
        'es-ES': { singular: 'Tarea', plural: 'Tareas' },
      },
      fields: {
        name: 'string',
        dueDate: 'date',
        category: 'categories',
      },
      defaultView: {
        type: 'tabular',
        fields: ['name', 'category.title'],
        sort: 'category.group.parentGroup.description desc',
      },
    },
  },
});

export type BaseModel = typeof model;

export default model;
