import Image from 'next/image';
import { Orelega_One } from "next/font/google";

const orelegaOne = Orelega_One({weight: "400", subsets: ["latin"]});

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
      <div className="h-16"></div>
      <div className="flex w-full h-12 bg-main items-center p-4 rounded-lg gap-3">
        <Image 
          src="/sidenav/crew-w.png"
          width={28}
          height={28}
          alt="Crew"
        />
        <h2 className="text-white text-md font-semibold">Crew</h2>
      </div>
      <div className="flex w-full h-12 items-center p-4 rounded-lg gap-3">
        <Image 
          src="/sidenav/ocean-b.png"
          width={28}
          height={28}
          alt="Ocean"
        />
        <h2 className="text-black text-md font-medium">Ocean</h2>
      </div>
    </div>
  )
}