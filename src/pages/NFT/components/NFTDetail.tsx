import React from "react";
import { useParams } from "react-router-dom";

export default function NFTDetail() {
  let { token_id } = useParams();
  return <div>{`NFT Details: ${token_id}`}</div>;
}
