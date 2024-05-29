import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { AsideMessages } from "./components/AsideMessages/AsideMessages";

import "./assets/scss/style.scss";
import { useOpenAside } from "./hooks/OpenAside";

export const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const toggleLoader = (value: any) => {
    setLoading(value);
  };

  const {handleOpenMenu, isOpenAsideMenu} = useOpenAside();
  
  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <p style={{ position: "absolute", top: "0", left: "0" }}>loading...</p>
      )}

      <Header handleOpenMenu={handleOpenMenu}/>
      <main className="page page-main">
        <AsideMenu isOpenAsideMenu={isOpenAsideMenu}/>

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
            onEnter={() => toggleLoader(true)}
            onExited={() => toggleLoader(false)}
          >
            <Routes location={location}>
              {routes.map((item: any) => (
                <Route
                  key={item.path}
                  element={item.element}
                  path={item.path}
                />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>

        <AsideMessages />
      </main>
    </div>
  );
};
