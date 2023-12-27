import React, { useEffect, useMemo, useState } from 'react';
import Plot from 'react-plotly.js';

import gamesStore from "../../stores/GamesStore";
import { GamesService } from '@/app/services/GamesService';
import { IComputedValue, computed } from 'mobx';
import { Game } from '@/app/models/Game';
import { AnalyticsService, AnalyticsOption } from '../../services/AnalyticsService';
import analyticsStore from '@/app/stores/AnalyticsStore';
import { observer } from 'mobx-react';


const AnalyticsOption = () => {
  const gamesService = useMemo(() => GamesService.getInstance(), []);
  const games: IComputedValue<Game[]> = computed(() => gamesStore.games)
  const analyticsService = useMemo(() => AnalyticsService.getInstance(), []); 

  const changeSelectedGame = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gameId = event.target.value;
    analyticsService.setUsersByGameId(gameId);
  }

  useEffect(() => {
    analyticsService.setDataByOption('age');
    analyticsService.setUsersByGameId(games.get()[0].id);
  }, [])
  

  const changeSelectedOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value as AnalyticsOption;

    analyticsService.setDataByOption(option);
  }

  const plotData = computed(() => {
    return analyticsStore.data;
  })

  const users = computed(() => {
    return analyticsStore.users;
  })

  return (
    <div className='flex flex-col gap-5'>
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
                <option value="boughtDate">Bought Date</option>
                <option value="sex">Sex</option>
              </select>
            </div>
      </div>
            <Plot
              data={[plotData.get()]}
              layout={{width: 1600, height: 600, xaxis: { tickfont: { size: 10 } }}}
              config={{scrollZoom: false, editable: false, displayModeBar: false, staticPlot: true}}
            />
    </div>
  );
};

export default observer(AnalyticsOption);
