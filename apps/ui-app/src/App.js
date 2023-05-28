import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LikesServicePage from './routing/LikesServicePage';
import NavBarComponent from './components/NavBarComponent';
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import AppsPage from './routing/AppsPage';

const App = () => {
  return (
    <>
      <div style={{ backgroundColor: '#e9ebed', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<NavBarComponent />}>
            <Route index element={<Navigate replace to="apps" />} />
            <Route path="apps" element={<AppsPage />} />
            <Route
              path="likes-service"
              element={<AuthenticationGuard component={LikesServicePage} />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;