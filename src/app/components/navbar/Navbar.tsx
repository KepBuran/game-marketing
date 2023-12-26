"use client";

import Link from "next/link";
import NavbarItem from "./NavbarItem"
import Image from "next/image"
import { GamesBLoC } from "@/app/BLoCs/GamesBLoC";
import { GamesService } from "@/app/services/GamesService";
import { useEffect, useMemo, useState } from "react";
import gamesStore from "../../stores/GamesStore";
import { computed } from "mobx";

export default function Navbar() {
  const articlesService = useMemo(() => new GamesService(), []);
  const gamesBLoC: GamesBLoC = useMemo(() => {return new GamesBLoC()}, []);

  const pages = computed(() => {
    const newPages = [
    {text: 'Home', href: '/'},
    {text: 'Games', href: '', dropItems: gamesStore.navBarGames},
    {text: 'Analytics', href: '/analytics'},
    ]
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
    </nav>


  )
}