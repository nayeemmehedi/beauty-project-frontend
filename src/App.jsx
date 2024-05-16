import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import Login from "./page/Login";
import DashbBoard from "./page/DashbBoard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import ProductDetails from "./page/ProductDetails";
import Description from "./components/ChildProductDetails/Description";
import Reviews from "./components/ChildProductDetails/Reviews";
import Fqa from "./components/ChildProductDetails/Fqa";
import GiveReview from "./components/ChildProductDetails/GiveReview";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Signup from "./components/Signup";

const routes = [
  { path: "/", element: <Home />, isPrivate: false },
  { path: "/card", element: <Card />, isPrivate: false },
  { path: "/signup", element: <Signup />, isPrivate: false },


  { path: "/product", element: <ProductPage />, isPrivate: false },
  { path: "/login", element: <Login />, isPrivate: false },
  {
    path: "/product-details/:id/*",
    element: <ProductDetails />,
    children: [
      { path: "", element: <Description />, isPrivate: false },

      { path: "description", element: <Description />, isPrivate: false },
      { path: "reviews", element: <Reviews />, isPrivate: false },
      { path: "faq", element: <Fqa />, isPrivate: false },
      { path: "give-review", element: <GiveReview />, isPrivate: false },

    ],
    isPrivate: false,
  },
  { path: "/dashboard", element: <DashbBoard />, isPrivate: true },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) =>
          route.isPrivate ? (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoute>{route.element}</PrivateRoute>}
            />
          ) : (
            <Route key={route.path} path={route.path} element={route.element}>
              <>
                {route.children &&
                  route.children.map((child) => (
                    <Route
                      key={child.path}
                      path={`${child.path}`}
                      element={child.element}
                    />
                  ))}
              </>
            </Route>
          )
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

