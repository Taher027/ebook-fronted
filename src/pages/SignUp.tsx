import { useEffect, useState } from "react"
import { Link, useNavigate,  } from "react-router-dom"
import { createUser } from "../redux/features/user/userThunk"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import toast, { Toaster } from "react-hot-toast"
import Loader from "../components/ui/Loader"

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { user, isLoading, isError, error } = useAppSelector(
    (state) => state.user,
  )
  console.log(user);
  

  useEffect(() => {
    if(!isLoading && !isError && user.email){
      navigate("/")
    }
   
    if (!isLoading && isError) {
      toast('failed')
    }
  }, [user, isLoading, isError, error, navigate])

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    
    if (formData.password === formData.confirmPassword) {
      dispatch(
        createUser({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      )
    } else {
      toast('password not match')
    }
  }

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <div className=" h-screen">
    

      <div className="flex flex-col items-center justify-center h-screen bg-white pl-24">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="w-72">
          <div className="mb-3">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 h-10 border px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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
          <div className="">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 h-10 border px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5 py-2 font-semibold hover:text-indigo-700">
            {" "}
            <Link to="/login">Already have an account?</Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default SignUp
