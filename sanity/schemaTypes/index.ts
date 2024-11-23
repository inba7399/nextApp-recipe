import { type SchemaTypeDefinition } from "sanity";

import { author } from "@/sanity/schemaTypes/auther";
import { recipe } from "@/sanity/schemaTypes/recipe";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, recipe],
};