// import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import { UserService } from "./services/UsersService";
import { loadUsers } from "./api/UserAPI";
import UserStore from "./stores/UsersStore";
import { useEffect } from "react";



export default function Home() {

  return (
    <div className="text-center flex items-center flex-col gap-5 justify-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Ласкаво просимо на веб-сайт Game Marketing!</h1>
      <p className="text-lg">Тут ви можете купувати ігри, а також допомагати їх вдосконалювати за допомогою зворотнього зв&apos;язку та опитувань.</p>
      <img className="w-1/2 rounded-3xl mt-10" src="https://previews.123rf.com/images/deniex3/deniex32304/deniex3230400407/203392979-futuristic-man-wearing-virtual-reality-headset-with-hypernova-background-metaverse-vr-concept-player.jpg"></img>
    </div>
  )
}
