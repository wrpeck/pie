// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, PieFilling, Recipes, Todo, PieFillingTags, RecipesTags } = initSchema(schema);

export {
  Tags,
  PieFilling,
  Recipes,
  Todo,
  PieFillingTags,
  RecipesTags
};