// import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import { UserService } from "./services/UserService";
import { loadUsers } from "./api/UserAPI";
import UserStore from "./stores/UserStore";


export default function Home() {
  // useEffect(() => {
    // new UserService(loadUsers).updateUsers();
// }, [])
// const userStore = UserStore
// console.log("🚀 ~ file: page.tsx:13 ~ Home ~ userStore.users:", userStore.users)
  return (
    <div>

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        TEMP
      {/* {userStore.users.map((user, index) => <div key={index}></div>)} */}
      </div>
    </div>
  )
}
