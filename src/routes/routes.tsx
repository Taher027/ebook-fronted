import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';


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
  
]);

export default routes;
