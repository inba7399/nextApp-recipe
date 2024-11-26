import { defineQuery } from "next-sanity";

export const RECIPE_QUERY =
  defineQuery(`*[_type == "recipe"] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
  YoutubeVideo,
}`);