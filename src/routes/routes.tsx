import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import AllBooks from '../pages/AllBooks';
import EdditBook from '../pages/EdditBook';
import BookDetails from '../pages/BookDetails';
import ReadList from '../pages/ReadList';
import WishList from '../pages/WishList';
import PrivateRoute from './PrivateRoute';


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
        element: <PrivateRoute><AddBook /></PrivateRoute>,
      },
      {
        path: '/edit-book/:bookId',
        element: <PrivateRoute><EdditBook /></PrivateRoute>,
      },
      
      {
        path: '/wishlist',
        element: <PrivateRoute><WishList/></PrivateRoute>,
      },
      {
        path: '/readinglist',
        element:<PrivateRoute><ReadList/></PrivateRoute> ,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/books/:bookId',
        element: <PrivateRoute><BookDetails /></PrivateRoute>,
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
