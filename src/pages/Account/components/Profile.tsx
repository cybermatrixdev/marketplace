import React from "react";
import { useParams } from "react-router-dom";

export function AccountProfile() {
  let { user_address } = useParams();
  return <div>Account Profile: {user_address}</div>;
}
