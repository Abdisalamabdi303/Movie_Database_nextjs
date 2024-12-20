import Link from "next/link";

export default function Menuitems({tittle, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className='text-2xl sm:hidden'/>
        <p className="uppercase hidden font-semibold sm:inline text-sm">{tittle}</p>
    </Link>
  )
}
