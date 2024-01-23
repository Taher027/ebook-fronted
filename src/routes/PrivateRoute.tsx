import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loader from "../components/ui/Loader"
import { useAppSelector } from "../redux/hooks"

interface IProps {
  children: ReactNode
}

const PrivateRoute = ({ children }: IProps) => {
  const { pathname } = useLocation()
  const { user, isLoading } = useAppSelector((state) => state.user)

  if (isLoading) {
    return <Loader />
  }

  if (!user.email && !isLoading) {
    
    return <Navigate to={"/login"} state={{ path: pathname }} />
  }
  return children
}
export default PrivateRoute