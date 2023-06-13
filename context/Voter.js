import React,{useState,useEffect} from 'react';
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import {create as ipfsHttpClient} from "ipfs-http-client";
import axios from "axios";
import {useRouter} from "next/router";


///INTERNAL IMPORTS

import {VotingAddress, VotingAddressABI} from "./constants";

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const fetchContract = (signerOrProvider) => new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider); 

export const VotingContext = React.createContext();

export const VotingProvider = ({children}) => {

    const votingTitle = 'My First smart contract app';

    const router = useRouter();
    const [currentAccount, setCurrentAccount] = useState('');
    const [candidateLength, setCandidateLength] = useState('');
    const pushCandidate = [];
    const candidateIndex = [];
    const [candidateArray, setCandidateArray] = useState(pushCandidate);

    //--------- END OF CANDIDATE DATA

    const [error, setError] = useState('');
    const highestVote = [];

    //-------- VOTER SECTION
    const pushVoter = [];
    const [voterArray, setVoterArray] = useState(pushVoter);
    const [voterLenght, setVoterLength] = useState('');
    const [voterAddress, setVoterAddress] = useState([]);

    //---- CONNECTING WALLET

    const checkIfWalletIsConnected = async()=>{
        if (!window.ethereum) return setError("Please Install Metamask");

        const account = await window.ethereum.request({method: "eth_accounts"});

        if(account.length){
            setCurrentAccount(account[0]);
        }else{
            setError("Please Install Metamask & Connect, Reload");
        }
    };
    return (
        <VotingContext.Provider value={{votingTitle, checkIfWalletIsConnected}}>
            {children}
        </VotingContext.Provider>
    ); 
};