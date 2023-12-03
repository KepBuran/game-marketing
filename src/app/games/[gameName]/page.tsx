import { useRouter } from "next/navigation"
import GameInfo from "../../components/game/GameInfo"
import { Game } from "@/app/models/Game"

export default function Page({ params }: { params: { gameName: string } }) {

  const game: Game = {
    id: 'deputinization',
    name: 'Deputinization',
    images: [
      'https://cdn.akamai.steamstatic.com/steam/apps/2146770/header.jpg?t=1697011992',
      'https://cdn.akamai.steamstatic.com/steam/apps/2146770/ss_348c498a4528e41c6e016d79f58ef8fa58c260d4.600x338.jpg?t=1697011992'
    ],
    description: 'Депутінізація - це гра в жанрі "Біжи та Стріляй", де головним елементом є битви з босами. У грі ви зустрінете приємну піксельну графіку та музику, коріння якої тягнуться з української культури.',
    release: new Date(2021, 9, 14),
    developer: 'Myttsi Zabav',
    publisher: 'Myttsi Zabav'
  }

  return (
  <>
    <h1 className="text-2 text-8xl font-normal">{game.name}</h1>
    <div className="flex flex-row gap-5 justify-center content-center primary-gradient p-5 rounded-2xl w-full">
      <div id={'game-images-'+game.id} className="flex flex-col gap-3 justify-center content-center w-3/4">
        <img className="w-full rounded-2xl" src="https://cdn.akamai.steamstatic.com/steam/apps/2146770/header.jpg?t=1697011992"/>
        {/* <img className="w-full rounded-2xl" src="https://cdn.akamai.steamstatic.com/steam/apps/2146770/ss_348c498a4528e41c6e016d79f58ef8fa58c260d4.600x338.jpg?t=1697011992"/> */}
      </div>
        <div id={'game-info-'+game.id} className="flex flex-col text-xl gap-6 content-center justify-start w-1/4 bg-slate-200 rounded-2xl p-4">
          <p className="text-justify">{game.description}</p>
          <div className="flex flex-col gap-2">
            <GameInfo params={{ title: 'Release date:', text: game.release.toLocaleDateString() }} />
            <GameInfo params={{ title: 'Developer:', text: game.developer }} />
            <GameInfo params={{ title: 'Publisher:', text: game.publisher }} />
          </div>
          <button className="rounded-2xl w-auto mt-auto px-6 py-3 text-3xl self-end gradient-transition bg-pos-0 hover:bg-pos-200 mx-auto bg-gradient-to-r to-fuchsia-500 from-cyan-500 bg-size-200 text-white font-semibold cursor-pointer">Buy</button>
        </div>
      </div>
  </>)
}