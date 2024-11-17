import Link from "next/link";
import Menuitems from "./Menuitems";
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
            <Menuitems tittle="home" address='/' Icon={AiFillHome}/>
            <Menuitems tittle="about" address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex items-center gap-4'>
            <DarkMode/>
            <Link href={'/'} className='flex gap-1 items-center'>
                <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
                <span className='text-xl font-semibold hidden sm:inline'>Clone</span>
            </Link>
        </div>
        
    </div>
  )
}
