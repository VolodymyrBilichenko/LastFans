import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { useState } from "react";

import './assets/scss/style.scss'

export const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const toggleLoader = (value: any) => {
    setLoading(value);
  }

  return (
    <div style={{position: 'relative'}}>
      
      {loading && <p style={{position: 'absolute', top: '0', left: '0'}}>loading...</p>}

      <Header/>

      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames='fade' timeout={300} onEnter={() => toggleLoader(true)} onExited={() => toggleLoader(false)}>

        <Routes location={location}>
          {
            routes.map((item: any) => <Route key={item.path} element={item.element} path={item.path}/>)
          }
        </Routes>

        </CSSTransition>
      </TransitionGroup>

    </div>

  );
}
