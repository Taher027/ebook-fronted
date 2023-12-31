import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import AllBooks from '../pages/AllBooks';
import EdditBook from '../pages/EdditBook';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      {
        path: '/edit-book/:bookId',
        element: <EdditBook />,
      },
      
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      
      
    ],

    
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/login',
    element:<Login/>
  }
  
]);

export default routes;
