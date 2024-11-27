import { defineQuery } from "next-sanity";

export const RECIPE_QUERY =
  defineQuery(`*[_type == "recipe" && defined(slug.current) && !defined($search)|| title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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
}`);

export const RECIPE_BY_ID_QUERY =
  defineQuery(`*[_type == "recipe" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, username, image, bio
  }, 
  views,
  description,
  category,
  image,
  pitch,
  YoutubeVideo
}`);

export const RECIPE_VIEWS_QUERY = defineQuery(`
  *[_type == "recipe" && _id == $id][0]{
      _id, views
  }
`);

export const AUTHOR_BY_GOOGLE_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `);