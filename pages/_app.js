import '../styles/globals.css';

//INTERNAL IMPORTS
import {VotingProvider} from "../context/Voter";
import NavBar from "../components/NavBar/NavBar";

const myApp = ({ Component, pageProps})=>(
    <VotingProvider>
        <div>
            <NavBar />
            <div>
                < Component {...pageProps} />
            </div>
        </div>
    </VotingProvider>
);

export default myApp;