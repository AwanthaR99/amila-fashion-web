import { defineField, defineType } from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'wishlist',
      title: 'Wishlist',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }], // link the product
        },
      ],
    }),
  ],
})