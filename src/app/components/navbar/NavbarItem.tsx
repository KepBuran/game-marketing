import Link from "next/link";
import { useState } from "react";

interface NavbarItemProps {
  text: string
  href: string
  dropItems?: {text: string, href: string}[]
}

export default function NavbarItem({text, href, dropItems}: NavbarItemProps) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  return (
    <Link href={href}>
      <div className={"relative" + (isDropdownVisible ? " bg-cyan-500" : "")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2 className="px-4 relative py-2 text-2xl font-normal  hover:text-white cursor-pointer transition-colors duration-300 ease br">
          {text}
        </h2>
        <div className="absolute bg-cyan-500 min-w-full">
          {isDropdownVisible && dropItems?.map(dropItem => (
            <NavbarItem text={dropItem.text} key={href} href={dropItem.href}></NavbarItem>
          ))}
        </div>
      </div>
    </Link>


  )
}