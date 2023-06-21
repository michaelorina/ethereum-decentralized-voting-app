import React, { useContext } from "react";
//import { VotingContext } from "../context/Voter";
//import { useVote } from "../context/Voter";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/Navbar";


const Home = () =>{
  
  return (
    <div >
      <NavBar/>
      <div className="rounded shadow-lg p-2 mb-4 bg-body">
      <main className="px-3">
        <h1 className="text-center p-5">Blockchain Voting Sytem</h1>
        <p className="lead text-center">Welcome to the Kenya Airways Voting System!</p>
        <p className="lead text-center p-4">It is a Secure and Transparent Voting System built with Latest technology to ensure tamper free, fair and auditable elections!</p>
      </main>

      <footer className="mt-auto text-black-50 d-flex flex-col align-items-center justify-content-between p-5">
        <div> 
        <p className="lead">
          <a href="/" className="btn btn-lg btn-danger fw-bold border-white">Learn more</a>
        </p>
        </div>
        <div><p>made by michaelorina</p> </div>
      </footer>
      </div>
    </div>
  )
}
export default Home;