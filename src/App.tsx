import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
        {
          routes.map((item: any) => <Route key={item.path} element={item.element} path={item.path}/>)
        }
    </Routes>
  );
}
