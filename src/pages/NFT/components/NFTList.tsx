import React, { useEffect, useState } from "react";
import * as _ from 'lodash' 
import { fetchAllNfts, getNftUri, fetchNftMetadata } from '../../../rpc/index'
import type { NftEntity, NftMetadata } from "../../../rpc/index";
import { BigNumber, ethers } from "ethers";
import { formatAddress, formatPrice } from "../../../utils";
import Image from "./Image";
 
type NFT = NftEntity & NftMetadata 

function NFTCard(props: NFT) {
  // const formattedPrice = formatPrice(props.price)
  return (
    <div className="bg-base-100 shadow-xl card">
      <figure className="px-4 pt-4">
        <Image src={props.image} alt={props.name} className="mask mask-sircleu object-contain w-auto h-60" />
      </figure>
      <div className="card-body">
        <h2 className="my-2 text-4xl font-bold card-title">{props.name}</h2>
        {/* <p>Price: {formattedPrice} matic</p>
        <p>Description: {props.description}</p> */}
        <p>Token Id: {props.tokenId}</p>
        {/* <p>Owner: {formatAddress(props.owner)}</p>
        <p>Seller: {formatAddress(props.seller)}</p> */}
      </div>
    </div>
  )
}

export default function NFTList() {
  const [nftList, setNFTs] = useState<NFT[]>([])

  useEffect(() => {
    
    const run = async () => { 
      fetchAllNfts()
        .then(async (r: any) => {
          // fetch uri and metadata
          const promise = _.map(r, async (tokenId: any) => {
            const uri = await getNftUri(tokenId)
              .then((data: string) => data);
            // const metadata = await fetchNftMetadata(uri);
            return {
              tokenId: (tokenId as BigNumber).toNumber(), 
              // nftContract: item.nftConstract as string,
              // owner: item.owner as string, 
              // price: item.price as BigNumber, 
              // seller: item.seller as string, 
              // sold: item.sold as boolean,
              // name: metadata.data.name as string, 
              // description: metadata.data.description as string, 
              image: uri as string
            } as NFT;
          })
          const results = await Promise.all(promise)
          setNFTs(results)
        }
    )}
    run()
  }, [])

  return (<div className="grid grid-cols-4 gap-4">
    {
      _.map(nftList, (nft: NFT, idx: number) => { return <NFTCard key={idx} {...nft} />})
    }
  </div>)
}
