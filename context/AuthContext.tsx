import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {ethers} from "ethers"

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('');
  const [currentAccount, setCurrentAccount] = useState('');
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }
  const connectWallet = async() => {

    if (!window.ethereum) return setError("Please Install Metamask");

    const account = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    setCurrentAccount(account[0]);
  }
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
    <AuthContext.Provider value={{ user, login, signup, logout , connectWallet, checkIfWalletIsConnected }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
