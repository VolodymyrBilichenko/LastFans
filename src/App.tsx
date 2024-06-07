import "./assets/scss/style.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { AsideMessages } from "./components/AsideMessages/AsideMessages";
import { useOpenAside } from "./hooks/OpenAside";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const location = useLocation();
  const {handleOpenMenu, isOpenAsideMenu} = useOpenAside();


  const checkLocation = location.pathname.slice(0, location.pathname.indexOf('/',1) === -1 ? undefined : location.pathname.indexOf('/',1))

  const currentPage = routes.filter(item => item.path === checkLocation || item.path === '*');

<!--   const currentPage = routes.filter(item => item.path === location.pathname || item.path === '*'); -->
  const isOnRulesPage = location.pathname.startsWith("/rules");
    
  return (
    <>
      <ToastContainer/>

      {!currentPage[0]?.isNotNeedHeader && !isOnRulesPage && <Header handleOpenMenu={handleOpenMenu}/>}
      
      <main className={`page ${currentPage[0]?.additionalClass ?? 'page-main'} `}>

        {!currentPage[0]?.isNotNeedMenu && !isOnRulesPage && <AsideMenu isOpenAsideMenu={isOpenAsideMenu}/>}

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

        {!currentPage[0]?.isNotNeedMessage && !isOnRulesPage && <AsideMessages />}
      </main>
    </>
  );
};
