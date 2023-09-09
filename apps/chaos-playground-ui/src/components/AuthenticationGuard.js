import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

export const AuthenticationGuard = ({ component, enabled }) => {
  let Component;
  if (enabled) {
    Component = withAuthenticationRequired(component);

    
  } else {
    Component = component;
  }
  return <Component />; 
};