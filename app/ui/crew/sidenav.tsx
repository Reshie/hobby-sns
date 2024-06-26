import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex w-60 h-full bg-white p-4">
      <header>
        <Image 
          src="@/public/sidenav/logo.png"
          width={40}
          height={40}
          alt="Logo"
        />
      </header>
    </div>
  )
}