import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import SignUp from '../pages/SignUp';


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
      
      
    ],

    
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  }
  
]);

export default routes;
