'use client'

import { useRouter } from "next/navigation"
import GameInfo from "../../components/game/GameInfo"
import { Game } from "@/app/models/Game"
import { GamesService } from "@/app/services/GamesService";
import { useMemo, useState } from "react";
import gamesStore from "../../stores/GamesStore";
import usersStore from "../../stores/UsersStore";
import { IComputedValue, computed } from "mobx";
import { observer } from "mobx-react";

function Page({ params }: { params: { gameName: string } }) {
  const gamesService = useMemo(() => GamesService.getInstance(), []);
  const game: Game | undefined = gamesStore.gameById(params.gameName);
  const { push } = useRouter();

  const userHasGame = game?.id ? usersStore.userHasGame(game?.id) : false;
  const [buttonTitle, setButtonTitle] = useState<string>(userHasGame ? 'Play' : 'Buy');

  const buyGame = async (gameToBuy: Game) => {
    const currentUser = usersStore.currentUser
    if (!currentUser) {
      push('/login')
      return
    }

    const userHasGame = usersStore.currentUserGames.find(el => el.id === game?.id)
    if (userHasGame) {
      alert(`Starting ${gameToBuy?.name}`)
      return
    }

    const {success, error} = await gamesService.buyGame(gameToBuy.id, currentUser.id)
    if (success) {
      setButtonTitle('Play')
      alert(`Thanks for buying ${gameToBuy.name}!`)
    }
    if (error) {
      alert(error)
    }
  }

  const gameComponent = useMemo(() => {
    if (!game) {
      return <h1>Game not found</h1>
    }

    return (
      <>
        <h1 className="text-2 text-8xl font-normal">{game.name}</h1>
        <div className="flex flex-row gap-5 justify-center content-center primary-gradient p-5 rounded-2xl w-full mb-5">
          <div id={'game-images-'+game.id} className="flex flex-col gap-3 justify-center content-center w-3/4">
            
            {game.images.map((image, index) => (<img className="w-full rounded-2xl" key={image} src={image}/>))}
          </div>
            <div id={'game-info-'+game.id} className="flex flex-col text-xl gap-6 content-center justify-start w-1/4 bg-slate-200 rounded-2xl p-4">
              <p className="text-justify">{game.description}</p>
              <div className="flex flex-col gap-2">
                <GameInfo params={{ title: 'Release date:', text: game.release.toLocaleDateString() }} />
                <GameInfo params={{ title: 'Developer:', text: game.developer }} />
                <GameInfo params={{ title: 'Publisher:', text: game.publisher }} />
              </div>
              <button onClick={() => buyGame(game)} className="rounded-2xl w-auto mt-auto px-6 py-3 text-3xl self-end gradient-transition bg-pos-0 hover:bg-pos-200 mx-auto bg-gradient-to-r to-fuchsia-500 from-cyan-500 bg-size-200 text-white font-semibold cursor-pointer">{buttonTitle}</button>
            </div>
          </div>
      </>
    )
  }, [buttonTitle, game, userHasGame])



  return gameComponent
}

export default observer(Page)