import  SearchForm  from "../../components/SearchForm";


export default async function Home({searchParams}:{searchParams:Promise<{query?: string}>}) {
  
  const query = (await searchParams).query;
  return (
    
   <>
    <section className="pink_container">
      <h1 className="heading">Share your recipe<br />and Love here</h1>
      <p className="sub-heading !max-w-3xl">
      Spread love through food, unite hearts, celebrate diversity, support communities, and create a better world one meal at a time
      </p>
      <SearchForm query={query} />
    </section>
   </>
  );
}
