import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginForm from './LoginForm'
import { useRouter } from 'next/router'
import { Roboto } from '@next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router

  // if (pathname === '/login' || pathname === '/signup') {
  //   showNavbar = false
  // }

  return (
    <main className={roboto.className}>
       <LoginForm />
    </main>
  )
}
