import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/hooks";
import { getUserData } from "./redux/features/user/userThunk";
import { setLoading } from "./redux/features/user/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
  }, [dispatch]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(getUserData(user.uid));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  });

  return (
    <div className="mx-auto">
      <MainLayout />
      <Toaster />
    </div>
  );
}

export default App;
