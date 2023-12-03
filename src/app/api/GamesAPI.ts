import { Game } from "../models/Game"

const Deputinization: Game = {
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

export const getGames = () => {
  return [Deputinization]
}