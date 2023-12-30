import  { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/features/user/userThunk';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import toast from 'react-hot-toast';
import Loader from '../components/ui/Loader';

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    })
  
    const { user, isLoading, isError, error } = useAppSelector(
      (state) => state.user,
    )
  
    useEffect(() => {
      if (!isLoading && isError) {
        console.log("Login failed")
        toast("login faield")
       
      }
    }, [isLoading, isError, error])
  
    useEffect(() => {
      if (!isLoading && user.email) {
        const { state } = location
        if (state && state.path) {
          navigate(state.path)
         
        } else {
          navigate("/")
          
        }
      }
    }, [user.email, isLoading, location, navigate])
  
    const handleChange = (event: { target: { name: any; value: any } }) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }
  
    const handleSubmit = (event: { preventDefault: () => void }) => {
      event.preventDefault()
      dispatch(
        loginUser({
          email: formData.email,
          password: formData.password,
        }),
      )
    }
  
    if (isLoading) {
      return <Loader />
    }
  return (

    <div className='h-screen'>
   



    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-72">
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 h-10 border px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 h-10 border px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div  className='mb-5 py-2 font-semibold hover:text-indigo-700'> <Link to="/signup">
        Create a new account
        </Link></div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;