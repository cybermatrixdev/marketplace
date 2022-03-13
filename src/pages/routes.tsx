import React, { lazy, Suspense } from "react";
import { Route, Navigate, Routes as RR_Routes } from "react-router-dom";

import RequireWalletConnection from "../components/RequireWalletConnection";
import Layout from "../components/PageLayout"
// const Layout = import("../components/PageLayout");
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Account = lazy(() => import("./Account"));
const Create = lazy(() => import("./Create"));
const Following = lazy(() => import("./Following"));
const NFTPage = lazy(() => import("./NFT"));

export function Routes() {

  return (
    <Suspense fallback={null}>
      <RR_Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="account/*"
            element={
              <Suspense fallback={<>Account Page Loading...</>}>
                <RequireWalletConnection><Account /></RequireWalletConnection>
              </Suspense>
            }
          />
          <Route
            path="create/*"
            element={
              <Suspense fallback={<>Create Page Loading...</>}>
                <RequireWalletConnection><Create /></RequireWalletConnection>
              </Suspense>
            }
          />
          <Route path="following" element={<Following />} />
          <Route
            path="nft/*"
            element={
              <Suspense fallback={<>NFT Page Loading...</>}>
                <NFTPage />
              </Suspense>
            }
          />
        </Route>
      </RR_Routes>
    </Suspense>
  );
}
