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
        path: '/wishlist',
        element: <WishList/>,
      },
      {
        path: '/readinglist',
        element:<ReadList/> ,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/books/:bookId',
        element: <BookDetails />,
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
