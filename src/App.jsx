import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { routes } from "./routes/RouteValue";
import { ImportValue } from "./utils/FileHandle";

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
              element={
                <ImportValue.PrivateRoute>
                  {route.element}
                </ImportValue.PrivateRoute>
              }
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
