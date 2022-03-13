import React from "react";
import useWeb3Modal from '../../hooks/useWeb3Modal'
import { Outlet, Link, Route, Routes } from "react-router-dom";
import { AccountWelcome } from './components/Welcome'
import { AccountSettings } from './components/Settings'
import { AccountProfile } from './components/Profile'


function AccountPage() {
  const { signedInAddress } = useWeb3Modal();
  return (
    <div>
      <nav>
        <Link to="/account/settings">Settings | </Link> <Link to={`/account/${signedInAddress}`}>Profile</Link>
      </nav>
      
      <Outlet />
    </div>
  );
}

export default function AccountRoutes() {
  return (
    <Routes>
    <Route path="/" element={<AccountPage />}>
      <Route index element={<AccountWelcome />} />
      <Route path="settings" element={<AccountSettings />} />
      <Route path=":user_address" element={<AccountProfile />} />
    </Route>
    </Routes>
  )
}
