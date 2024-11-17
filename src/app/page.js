"use client";

import React, { Suspense } from "react";
import Results from "../components/Results";
import { useSearchParams } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function HomeComponent() {
  const searchParams = useSearchParams();
  const genre = searchParams?.get("genre") || "fetchTrending";

  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData.results || []);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    fetchData();
  }, [url]);

  if (error) {
    return (
      <h1 className="text-center pt-6">Error fetching data: {error.message}</h1>
    );
  }

  if (!data) {
    return <h1 className="text-center pt-6">Loading...</h1>;
  }

  if (data.length === 0) {
    return <h1 className="text-center pt-6">No results found</h1>;
  }

  return <Results results={data} />;
}

export default function Home() {
  return (
    <Suspense fallback={<h1 className="text-center pt-6">Loading...</h1>}>
      <HomeComponent />
    </Suspense>
  );
}
