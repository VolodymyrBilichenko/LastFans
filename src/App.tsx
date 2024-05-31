import "./assets/scss/style.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { AsideMessages } from "./components/AsideMessages/AsideMessages";
import { useOpenAside } from "./hooks/OpenAside";
import { useEffect, useState } from "react";


export const App = () => {
  const location = useLocation();
  const {handleOpenMenu, isOpenAsideMenu} = useOpenAside();
  const [showHeader, setShowHeader] = useState(true);
  const [showAsideMessages, setShowAsideMessages] = useState(true);
  const [showAsideMenu, setShowAsideMenu] = useState(true);
  const [mainClass, setMainClass] = useState('page-main');

  useEffect(() => {
    let currentPage = routes.find((item) => item.path === location.pathname);

    if (!currentPage) {
      currentPage = routes.find((item) => item.path === '*');
    }

    const registrationPageClass = ['/login', '/registration', '/forgot'];
    const isRegistrationPage = registrationPageClass.includes(location.pathname) || currentPage.path === '*';

    
    
    setShowHeader(currentPage ? currentPage?.needed !== false : true);
    setShowAsideMessages(currentPage ? currentPage?.needed !== false : true);
    setShowAsideMenu(currentPage ? currentPage?.needed !== false : true);
    setMainClass(isRegistrationPage ? 'page-registration' : 'page-main');

    setShowAsideMessages(currentPage ? currentPage.message !== false : true);
  }, [location.pathname])
  
  return (
    <>
      { showHeader && <Header handleOpenMenu={handleOpenMenu}/>}
      
      <main className={`page ${mainClass}`}>

        {showAsideMenu && <AsideMenu isOpenAsideMenu={isOpenAsideMenu}/>}

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
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

        {showAsideMessages && <AsideMessages />}
      </main>
    </>
  );
};
