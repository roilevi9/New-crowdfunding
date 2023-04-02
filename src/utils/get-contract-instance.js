import { ethers } from "ethers";
import abi from "../ABIs/Crowdfunding.json";

export const getContractInstance = (signer = null) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  return new ethers.Contract(
    "0xf08F46b132E22Dd8a24F260d00BEc1f072b93093",
    abi,
    signer || provider
  );
};
