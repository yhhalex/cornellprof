import SearchForm from '@/components/SearchForm'
import ProfessorCard from '@/components/ProfessorCard'

export default async function Home({searchParams } : {
  searchParams: Promis<{query: string}>
}) {

  const query = await (searchParams).query

  const posts = [
    {
    _createdAt: new Date(),
    views: 100,
    author: { _id: 1, name: 'Adrian' },
    _id : 1,
    description: "This is a description",
    image: "https://news.cornell.edu/sites/default/files/styles/full_size/public/2024-11/2024_1163_nh_034.jpg?itok=VLFrZAEz",
    category: "CEE",
    title: "IDS Lab",
    },
  ];

  return (
    <>
    <section className="white_container">
      <h1 className="heading !text-black">
        Your Research
      </h1>
      
      <p className="sub-heading !text-black !max-w-3xl"> 
        Connect With Professors and Research Labs 
      </p>
      
      <SearchForm query={query}/>

    </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Professors"}
        </p>

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: ProfessorCardType, index: number) => (
              <ProfessorCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">
              No results found
            </p>
          )}
          </ul>
        </section>
    </>
  )
}