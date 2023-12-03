import NavbarItem from "./NavbarItem"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start flex-row gap-6 primary-gradient-r  px-6 drop-shadow-md">
      <img src="/game-controller.svg" alt="logo" className="w-10 h-10 cursor-pointer" href="/"/>
      
      <div className="flex gap-0 flex-row">
        <NavbarItem />
        <NavbarItem />
      </div>
    
    
    </nav>


  )
}