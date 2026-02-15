import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { user } from './user'     
import { coupon } from './coupon'


export const schema: { types: SchemaTypeDefinition[] } = {
 
  types: [category, product, user, coupon],
}
