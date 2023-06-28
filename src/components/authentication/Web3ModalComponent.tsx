"use client"
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { useRouter } from 'next/navigation';
import { configureChains, createConfig, useAccount, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = ''

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function Web3ModalComponent() {
    const { address, isConnected } = useAccount();
    const { push } = useRouter()

    if(isConnected) {push("/site")};

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <Web3Button />
            </WagmiConfig>

            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> 
        </>
    )
}