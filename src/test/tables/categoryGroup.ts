const categoryGroup = {
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
    fields: ['title', 'description', 'parentGroup.title', 'parentGroup.parentGroup.description'],
  },
} as const;

export default categoryGroup;
