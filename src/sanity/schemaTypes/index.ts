import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import review from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,review],
}
