import React, {useState, useEffect, useCallback, useContext} from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';


//---INTERNAL IMPORTS
import {VotingContext} from "../context/Voter";
import Style from "../styles/allowdVoters.module.css";
import images from "../assets";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const allowedVoters = () =>{
  const [fileUrl, setFileurl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: "",
    address: "",
    position: "",
  });

  const router = useRouter();
  const {uploadToIPFS} = useContext(VotingContext);

  //-- --- VOTERS IMAGE DROP
  const onDrop = useCallback(async(acceptedFil) => {
    const url = await uploadToIPFS(acceptedFil[0]);
    setFileurl(url);
  });

  const {getRootProps, getInputProps} = useDropzone ({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });


  
  return <div></div>;
}


export default allowedVoters;