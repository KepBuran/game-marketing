"use client";

import Link from "next/link";
import NavbarItem, {INavbarItem} from "./NavbarItem"
import Image from "next/image"
import { GamesService } from "../../services/GamesService";
import { useEffect, useMemo, useState } from "react";
import gamesStore from "../../stores/GamesStore";
import usersStore from "../../stores/UsersStore";
import { IComputedValue, computed } from "mobx";
import { UsersService } from "../../services/UsersService";
import { observer } from "mobx-react";

function Navbar() {
  const gamesService = useMemo(() => GamesService.getInstance(), []);
  const usersService = useMemo(() => UsersService.getInstance(), []);
  
  const logout = () => {
    usersService.logout()
  }

  const pages: IComputedValue<INavbarItem[]> = computed(() => {
    const newPages: INavbarItem[] = [
      {text: 'Games', href: '', dropItems: gamesStore.navBarGames},
    ]

    if (usersStore.currentUser) {
      newPages.push({text: 'Library', href: '/library'})
      newPages.push({text: 'Profile', href: '/profile'})
    }

    if (usersStore.currentUser?.role === 'marketer') {
      newPages.push({text: 'Analytics', href: '/analytics'})
    }

    const gamesPage = newPages.find(el => el.text === 'Games')
    if (gamesPage) {
      gamesPage.dropItems = gamesStore.navBarGames
    }

    return newPages
  })
 

  return (
    <nav className="flex items-center justify-start flex-row gap-6 primary-gradient-r  px-6 drop-shadow-md">
      <Link href={'/'}>
        <Image src="/game-controller.svg" alt="logo" className="w-10 h-10 cursor-pointer" width={10} height={10}/>
      </Link>
      
      <div className="flex gap-0 flex-row">
        {pages.get().map(page => (
            <NavbarItem key={page.text} href={page.href} text={page.text} dropItems={page.dropItems}/>
        ))}
      </div>

      <Link onClick={logout} href={'/login'} className="ml-auto">
        <Image src="/logout.svg" alt="logo" className="w-10 h-10 cursor-pointer" width={10} height={10}/>
      </Link>
    </nav>
  )
}

export default observer(Navbar)