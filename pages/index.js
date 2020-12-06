import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>BankFly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && <>
        <div className="mx-auto px-5 bg-gray-100 w-screen">
          <nav className="flex justify-between">
            <div className="p-5 text-gray-900">
              <Link href="/">
                <a className="text-gray-900">
                  BankFly
                </a>
              </Link>
            </div>
            <ul className="flex flex-row">
              <li className="p-5 cursor-pointer hover:bg-gray-200">
                <button onClick={signIn}>Sign in</button>
              </li>
            </ul>
          </nav>
        </div>
        <main>
        </main>
      </>}
      {session && <>
        <div className="mx-auto px-5 bg-gray-100 w-screen">
          <nav className="flex justify-between">
            <div className="p-5">
              <Link href="/">
                <a className="text-gray-900">
                  BankFly
                </a>
              </Link>
            </div>
            <ul className="flex flex-row">
              <li className="p-5 cursor-pointer hover:bg-gray-200">
                <button onClick={signOut}>Sign out</button>
              </li>
            </ul>
          </nav>
        </div>
        <main className="flex justify-center items-center flex-grow">
          <div className="justify-center items-center bg-gray-200 rounded shadow p-5">
            <h1>Hello {session.user.email}!</h1>
          </div>
        </main>
        <footer>
        </footer>
      </>}
    </div>
  )
}
