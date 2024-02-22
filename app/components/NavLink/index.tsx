"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export function NavLink ({link}: any) {
    const pathName = usePathname();
    

    return (
<Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
    )
}