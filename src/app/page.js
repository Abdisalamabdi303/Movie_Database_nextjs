import Results from "../components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 10000 } });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const results = data.results || [];

    if (results.length === 0) {
      return <h1 className="text-center pt-6">No results found</h1>;
    }

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <h1 className="text-center pt-6">Error fetching data: {error.message}</h1>;
  }
}
