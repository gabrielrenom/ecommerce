import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import FrontPage from './pages/FrontPage/FrontPage';
import  ProductDetail  from "./products/detail/ProductDetail"; 
import  ProductList  from "./products/ProductList";


//const AppRoutes = [
//  {
//    index: true,
//    element: <Home />
//  },
//  {
//    path: '/counter',
//    element: <Counter />
//  },
//  {
//    path: '/fetch-data',
//    requireAuth: true,
//    element: <FetchData />
//  },
//  ...ApiAuthorzationRoutes
//];

const AppRoutes = [
    {
        index: true,
        element: <FrontPage />
    },
    {
        path: '/products',
        element: <ProductList />
    },
    {
        path: '/products/:slug',
        //requireAuth: true,
        element: <ProductDetail />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
