import React, { useState} from 'react';

import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton } from '../components';

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');

  const handleClick = async () => {
    try {
      await contract.isPlayer(walletAddress)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='flex flex-col'>
      <CustomInput
        label="name"
        placeholder="Enter your battle name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton 
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to Knotz Battle Mages <br /> a Web3 NFT Card Game</>,
  <>Connect your wallet to start playing <br /> the ultimate Web3 Battle Card Game</>
);