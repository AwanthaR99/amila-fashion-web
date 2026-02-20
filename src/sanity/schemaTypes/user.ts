export const user = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'wishlist',
      title: 'Wishlist',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }], // link the product
        },
      ],
    },
  ],
};
