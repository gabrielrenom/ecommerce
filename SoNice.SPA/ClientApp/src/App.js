import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import { Layout } from './components/Layout';
//import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, requireAuth, ...rest } = route;
            return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
//import './custom.css';

//import Template from "./template/Template";
//import ProductDetail from "./products/detail/ProductDetail";
//import { Switch, Route } from "react-router-dom";
//import Landing from "./landing/Landing";
//import ProductList from "./products/ProductList";

//function App() {
//    return (
//        <Template>
//            <Switch>
//                <Route path="/products" exact>
//                    <ProductList />
//                </Route>
//                <Route path="/products/:slug">
//                    <ProductDetail />
//                </Route>
//                <Route path="/" exact>
//                    <Landing />
//                </Route>
//            </Switch>
//        </Template>
//    );
//}

//export default App;
