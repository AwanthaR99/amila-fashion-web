import { defineField, defineType } from 'sanity'

export const coupon = defineType({
  name: 'coupon',
  title: 'Coupon',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Coupon Code',
      type: 'string',
      description: 'The code users will enter (e.g., SAVE10)',
      validation: (Rule) => Rule.required().uppercase(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount Percentage (%)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(100),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})