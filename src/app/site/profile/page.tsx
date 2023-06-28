"use client";

import Stats, { TStats } from "@/components/stats";
import { useState } from "react";
import { useAccount } from "wagmi";
import Web3 from "web3"; 
import "boxicons";

const web3Api = new Web3("https://sepolia.infura.io/v3/{infura_key}")

export default function Profile() {

  const { address, isConnected } = useAccount()
  const [ balance, setBalance ] = useState('0.0')

  const stats: TStats = [{ id: 1, name: "Balance", value: `${balance} ETHs` }]

  if(address)
    web3Api.eth.getBalance(address)
      .then(value => setBalance(
        web3Api.utils.fromWei(Number(value), "ether")
          .toString()
          .slice(0, 6)));

  return (
    <div className="sm:container p-10 mx-auto">
      <div className="p-10 drop-shadow-lg">
          <div className="grid grid-rows-1 gap-4">
              <div className="flex justify-center">
                <img
                    className="inline-block h-20 w-20 rounded-full ring-2 ring-white mr-5"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt=""
                    />
              </div>
              <div className="flex justify-center">
                <a className="rounded text-black items-center justify-center flex bg-gradient-to-r from-cyan-400/[.4] to-sky-500/[.4] p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                  href={`https://etherscan.io/address/${address}`} target="_blank">
                  {address} 
                  <i className='ml-3 bx bxs-bar-chart-square bx-sm'></i>
                </a>
              </div>
          </div>
          <div className="mt-10">
            <Stats stats={stats} />
          </div>
      </div>
    </div>
  )
}  