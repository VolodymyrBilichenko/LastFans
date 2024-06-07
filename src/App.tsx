import "./assets/scss/style.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { AsideMessages } from "./components/AsideMessages/AsideMessages";
import { useOpenAside } from "./hooks/OpenAside";


export const App = () => {
  const location = useLocation();
  const {handleOpenMenu, isOpenAsideMenu} = useOpenAside();

  const checkLocation = location.pathname.slice(0, location.pathname.indexOf('/',1) === -1 ? undefined : location.pathname.indexOf('/',1))

  console.log(checkLocation);
  
  
  const currentPage = routes.filter(item => item.path === checkLocation || item.path === '*');
  
  return (
    <>
      { !currentPage[0]?.isNotNeedHeader && <Header handleOpenMenu={handleOpenMenu}/>}
      
      <main className={`page ${currentPage[0]?.additionalClass ?? 'page-main'} `}>

        {!currentPage[0]?.isNotNeedMenu && <AsideMenu isOpenAsideMenu={isOpenAsideMenu}/>}

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

        {!currentPage[0]?.isNotNeedMessage && <AsideMessages />}
      </main>
    </>
  );
};
