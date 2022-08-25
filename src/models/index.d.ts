import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PieFillingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PieFillingTagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipesTagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tags {
  readonly id: string;
  readonly name?: string | null;
  readonly PieFilling?: (PieFillingTags | null)[] | null;
  readonly Recipes?: (RecipesTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tags, TagsMetaData>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags, TagsMetaData>) => MutableModel<Tags, TagsMetaData> | void): Tags;
}

export declare class PieFilling {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Recipes?: (Recipes | null)[] | null;
  readonly tags?: (PieFillingTags | null)[] | null;
  readonly image?: string | null;
  readonly longdescription?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PieFilling, PieFillingMetaData>);
  static copyOf(source: PieFilling, mutator: (draft: MutableModel<PieFilling, PieFillingMetaData>) => MutableModel<PieFilling, PieFillingMetaData> | void): PieFilling;
}

export declare class Recipes {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly piefillingID: string;
  readonly tags?: (RecipesTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recipes, RecipesMetaData>);
  static copyOf(source: Recipes, mutator: (draft: MutableModel<Recipes, RecipesMetaData>) => MutableModel<Recipes, RecipesMetaData> | void): Recipes;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class PieFillingTags {
  readonly id: string;
  readonly tags: Tags;
  readonly pieFilling: PieFilling;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PieFillingTags, PieFillingTagsMetaData>);
  static copyOf(source: PieFillingTags, mutator: (draft: MutableModel<PieFillingTags, PieFillingTagsMetaData>) => MutableModel<PieFillingTags, PieFillingTagsMetaData> | void): PieFillingTags;
}

export declare class RecipesTags {
  readonly id: string;
  readonly tags: Tags;
  readonly recipes: Recipes;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RecipesTags, RecipesTagsMetaData>);
  static copyOf(source: RecipesTags, mutator: (draft: MutableModel<RecipesTags, RecipesTagsMetaData>) => MutableModel<RecipesTags, RecipesTagsMetaData> | void): RecipesTags;
}