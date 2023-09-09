import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

export function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>;
};


export function LogoutButton() {
  const { logout } = useAuth0();

  return <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>;
};