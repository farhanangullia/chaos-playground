import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AUTH0_ENABLED } from "./config";
import LikesServicePage from './routing/LikesServicePage';
import NavBarComponent from './components/NavBarComponent';
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import AppsPage from './routing/AppsPage';
import AboutPage from './routing/AboutPage';
import ECommercePage from './routing/ECommercePage';

const App = () => {

  return (
    <>
      <div style={{ backgroundColor: '#e9ebed', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<NavBarComponent />}>
            <Route index element={<Navigate replace to="apps" />} />
            <Route path="apps" element={<AppsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="likes-app"
              element={<AuthenticationGuard component={LikesServicePage} enabled={AUTH0_ENABLED}/>}
            />
            <Route
              path="ecommerce-app"
              element={<AuthenticationGuard component={ECommercePage} enabled={AUTH0_ENABLED}/>}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;