import Navitems from "./Navitems";


export default function Nav() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <Navitems title='Trending' param='fetchTrending'/>
        <Navitems title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}
