import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/SignUpIn/ProtectedRoute'
import { VotingProvider } from '../context/Voter';


const noAuthRequired = ['/', '/login', '/signup',]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <VotingProvider>
            <div>
                <div>
                    <Component {...pageProps}/>
                </div>
            </div>
          </VotingProvider>
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp
