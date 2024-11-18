'use client'
import Results from '@/components/Results';
import { useSearchParams } from 'next/navigation'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const searchParams= useSearchParams()
const genre = searchParams.get('genre')
export default async function Home() {
 
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
