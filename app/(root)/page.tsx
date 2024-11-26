import RecipeCard, { RecipeCardType } from "@/components/RecipeCardType";
import  SearchForm  from "../../components/SearchForm";
import { RECIPE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({searchParams}:{searchParams:Promise<{query?: string}>}) {
  
  const query = (await searchParams).query;
  const params ={search:query || null}

  const {data:posts} = await sanityFetch({query:RECIPE_QUERY,params})
    
  
  
  return (
    
   <>
    <section className="pink_container">
      <h1 className="heading">Share your recipe<br />and Love here</h1>
      <p className="sub-heading !max-w-3xl">
      Spread love through food, unite hearts, celebrate diversity, support communities, and create a better world one meal at a time
      </p>
      <SearchForm query={query} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Recipes for ${query}`: "All Recipe"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ?(
          posts.map((post:RecipeCardType , index:number)=>(
            <RecipeCard key={post?._id} post={post}/>
          ))
        ):(<p className="no-results">No recipe found</p>)}
      </ul>
    </section>
    <SanityLive/>
   </>
  );
}
