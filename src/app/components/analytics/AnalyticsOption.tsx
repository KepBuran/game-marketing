import React, { useMemo, useState } from 'react';

import gamesStore from "../../stores/GamesStore";
import { GamesService } from '@/app/services/GamesService';
import { IComputedValue, computed } from 'mobx';
import { Game } from '@/app/models/Game';
import { AnalyticsService } from '../../services/AnalyticsService';


const AnalyticsOption = () => {
  const gamesService = useMemo(() => GamesService.getInstance(), []);
  const games: IComputedValue<Game[]> = computed(() => gamesStore.games)
  const analyticsService = useMemo(() => AnalyticsService.getInstance(), []); 

  const changeSelectedGame = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gameId = event.target.value;
    analyticsService.setUsersByGameId(gameId);
  }

  const changeSelectedOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;

    // analyticsService.getAnalytics(option);
  }

  return (
    <div className='flex flex-row gap-5'>
          <div className='flex gap-2 rounded px-3 py-1 bg-cyan-500 text-white font-semibold cursor-pointer' style={{height: '32px'}}>
            <label htmlFor="selection">Game:</label>
            <select onChange={changeSelectedGame} id="selection" className="text-black">
              {games.get().map((game, index) => (
                <option key={index} value={game.id}>{game.name}</option>
              ))}
            </select>
          </div>
          
          <div className='flex gap-2 rounded px-3 py-1 bg-cyan-500 text-white font-semibold cursor-pointer' style={{height: '32px'}}>
            <label htmlFor="selection">Selection:</label>
            <select onChange={changeSelectedOption} id="selection" className="text-black">
              <option value="age">Age</option>
              <option value="registrationDate">Registration Date</option>
              <option value="sex">Sex</option>
            </select>
          </div>
    </div>
  );
};

export default AnalyticsOption;
