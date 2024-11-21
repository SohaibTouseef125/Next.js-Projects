
import {Inter} from "next/font/google"
import Link from "next/link"
const inter = Inter ({
    subsets: ["latin"]
})
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "Apply",
      link: "#",
    },
  ]
  return (
  
    <ul className={`${inter.className} flex items-center justify-end h-[24px]  font-medium text-[20px] space-x-6 m-[66px] ` } >
    {navItems.map((items, i)=>(
      <li key={i}><Link href={items.link}>{items.name}</Link></li>
      ))
      }
   </ul>
  
  )
}

export default Navbar