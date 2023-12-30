import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/user/userSlice";
import toast from "react-hot-toast";


export default function Navbar() {
  const dispatch = useAppDispatch()
  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      dispatch(logout());
      toast("You are Logout!!")
    })
  }
  return (
   <div>
    <h2>This is navbar</h2>
    <button onClick={handleLogout}>logout</button>
   </div>
  );
}
