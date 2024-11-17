import Image from 'next/image'

export default async function moviePage({params}) {
    const movieId= params.id
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    const movie = await res.json()
  return (
    <div className='w-full'>
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space_x_6">
        <Image
            alt='movie image'
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className='rounded-lg'
            style={{maxWidth: '100%', height:'100%'}}
            >
        </Image>
        <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name || "Title Unavailable"}</h2>
            <p className="text-lg mb-3">{movie.overview || "No overview available."}</p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Date Released:</span>
                {movie.release_date || movie.first_air_date || "Release date not available"}
            </p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Rating:</span>
                {movie.vote_count ? `${movie.vote_average} (${movie.vote_count} votes)` : "No rating available"}
            </p>
        </div>
        </div>

    </div>
  )
}

