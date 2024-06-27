import Image from 'next/image';
import { Orelega_One } from "next/font/google";
import NavLinks from '@/app/ui/crew/nav-links';

const orelegaOne = Orelega_One({weight: "400", subsets: ["latin"]});

const upperLinks = [
  { 
    name: 'Crew', 
    href: '/crew', 
    activeIcon: '/sidenav/crew-w.png', 
    inactiveIcon: '/sidenav/crew-b.png'
  },
  { 
    name: 'Ocean', 
    href: '/ocean', 
    activeIcon: '/sidenav/ocean-w.png', 
    inactiveIcon: '/sidenav/ocean-b.png'
  },
  { 
    name: 'Search', 
    href: '/search', 
    activeIcon: '/sidenav/search-w.png', 
    inactiveIcon: '/sidenav/search-b.png'
  },
];

export default function SideNav() {
  return (
    <div className="flex-col w-60 h-full bg-white p-4 border-r border-border">
      <div className="flex w-full h-10 items-center gap-2">
        <Image 
          src="/sidenav/logo.png"
          width={40}
          height={40}
          alt="Logo"
        />
        <h1 className={`text-3xl ${orelegaOne.className}`}>Cruise</h1>
      </div>
      <div className="h-12"></div>
      <NavLinks links={upperLinks} />
    </div>
  )
}