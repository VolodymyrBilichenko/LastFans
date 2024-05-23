import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  const location = useLocation();
  const [routesList] = useState(routes())

  return (
    <Routes location={location}>
        {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
    </Routes>
  );
}
