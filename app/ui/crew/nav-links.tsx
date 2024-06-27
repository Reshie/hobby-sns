'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Link = {
  name: string;
  href: string;
  activeIcon: string;
  inactiveIcon: string;
};

interface NavLinksProps {
  links: Link[];
}

export default function NavLinks({links} : NavLinksProps) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        const icon = pathname === link.href ? link.activeIcon : link.inactiveIcon;
        return (
          <Link 
            key={link.name}
            href={link.href}
            className={clsx(
            "flex w-full h-12 items-center p-4 rounded-lg gap-3", 
              {
                "bg-main" : pathname === link.href,
                "hover:bg-main-pale" : pathname !== link.href,
                "mt-2" : index != 0
              }
            )}
          >
            <Image 
              src={icon}
              width={28}
              height={28}
              alt={link.href}
            />
            <h2 className={clsx("text-md font-medium",
              {
                "text-white font-semibold" : pathname === link.href
              }
            )}>
              {link.name}
            </h2>
          </Link>
        );
      })}
    </>
  );
}