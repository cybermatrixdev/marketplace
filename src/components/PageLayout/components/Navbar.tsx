import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LOGO from "../../../images/LOGO_m.png";
import WalletConnection from "./WalletConnection";

const StyledName = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  // line-height: 29px;
  color: #000000;
`;

const StyledNavLink = styled(Link)`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: rgba(196, 196, 196, 0.95);
`;

export function Navbar() {
  return (
    <div className="navbar bg-base-100 flex flex-row gap-x-5">
      <div className="flex-none order-1">
        <img src={LOGO} />
      </div>
      <div className="flex-none order-2">
        <StyledName>Cyber Matrix</StyledName>
      </div>

      <div className="flex-auto order-3">
        <div className="form-control w-[90%]">
          <input type="text" placeholder="Search" className="input bg-[#F4F4F4] rounded-xl " />
        </div>
      </div>
      <div className="flex-none order-4">
        <div className="flex flex-row gap-x-5">
          <StyledNavLink to="/create" className="flex-none order-1">
            Create
          </StyledNavLink>
          <StyledNavLink to="/following" className="flex-none order-2">
            Follow
          </StyledNavLink>
          <StyledNavLink to="/account" className="flex-none order-3">
            Profile
          </StyledNavLink>
          <StyledNavLink to="/" className="flex-none order-4">
            About
          </StyledNavLink>
        </div>
      </div>
      <div className="flex-none order-5">
        <WalletConnection />
      </div>
    </div>
  );
}
