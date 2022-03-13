import NFT from '../artifacts/contracts/tokens/RealCyberMatrixERC1155Token.sol/RealCyberMatrixERC1155Token.json'
import axios from 'axios'
import * as _ from 'lodash'
import { BigNumber, ethers } from "ethers";

export type NftEntity =  { tokenId: number, nftContract: string, owner: string, price: BigNumber, seller: string, sold: boolean }
export type NftMetadata = { name: string, description: string, image: string } 

const provider = new ethers.providers.JsonRpcProvider(import.meta.env.VITE_RPC_URL)
const tokenContract = new ethers.Contract(import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS, NFT.abi, provider) 

export async function fetchAllNfts(){ return tokenContract.getTokenIds() } 
export async function getNftUri(tokenId: string) { return tokenContract.uri(tokenId) }
export async function fetchNftMetadata(uri: string) { return axios.get(uri) }
