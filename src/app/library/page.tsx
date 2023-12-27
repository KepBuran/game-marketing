'use client';

import React, { useMemo } from 'react';
import Link from "next/link";
import gamesStore from "../stores/GamesStore";
import { Game } from '../models/Game';
import { GamesService } from '../services/GamesService';
import { observer } from 'mobx-react';
import usersStore from '../stores/UsersStore';
import { IComputedValue, computed } from 'mobx';
import { UsersService } from '../services/UsersService';
import users from '../mock/users';

const UserGamesList: React.FC<{ games: Game[] }> = ({ games }) => {
  const gamesService = useMemo(() => GamesService.getInstance(), []);
  const usersService = useMemo(() => UsersService.getInstance(), []);

  //todo: add user games
  const userGames: IComputedValue<Game[]> = computed(() => {
    return usersStore.currentUserGames
  });

  return (
    <div className='flex flex-col items-center gap-5 pb-5'>
      {userGames.get().length === 0 ? (<h1 className="w-full text-center text-4xl mt-10">You don&apos;t have any games yet.</h1>) : userGames.get().map((game) => (
        <Link href={`/games/${game.id}`} key={game.id}>
          <div style={{ 
            backgroundImage: `url(${game.images[0]})`, 
            backgroundSize: 'cover', 
            width: '600px', 
            height: '300px',
            color: 'white',
            fontSize: '24px',
            backgroundColor: 'gray',
            transition: 'filter 0.3s'
          }}
          className="flex flex-col items-center font-semibold justify-center cursor-pointer rounded-2xl"
          onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(80%)' }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(100%)' }}
          >
            <p className="bg-gradient-to-r to-fuchsia-500 from-cyan-500 p-5 rounded-2xl">{game.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default observer(UserGamesList);
