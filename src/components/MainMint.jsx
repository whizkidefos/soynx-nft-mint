import React, { useEffect, useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import roboPunksNFT from '../RoboPunksNFT.json';

const roboPunksNFTAddress = '0xc1A04cac7855e29F2D9Ba5Aa9de7102E93Eb555d';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response ', response);
            }
            catch (error) {
                console.log('error ', error);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <section>
            <h2>RoboPunks</h2>
            <p>It's 2092. Can the RoboPunks NFT save humans from distructive rampant NFT speculations? Mint Robopunks to find out.</p>

            {isConnected
                ? (
                    <div>
                        <div>
                            <button onClick={handleDecrement}>-</button>
                            <input type='number' value={mintAmount} />
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                )
                : (
                    <p>You must be connected to mint.</p>
                )
            }
        </section>
    )
}

export default MainMint;