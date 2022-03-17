import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';

const Login: NextPage = () => {

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex w-full h-screen">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-between w-full  ">
        <div className="w-full p-4 mx-auto my-auto max-w-lg xl:p-12">
          <Link href="/">
            <a className="flex items-center ">
              <img src="images/supersonic solutions-logos_black.png" className="mx-auto max-w-[150px]" />
              <span className="sr-only">Supersonic</span>
            </a>
          </Link>
          <h1 className="my-10 text-3xl text-center font-light text-gray-800">Log in to your account</h1>
          <form className="py-2 space-y-4 " onSubmit={handleLogin}>
            <label className="block">
              <span className="block mb-1 text-lg font-medium text-gray-700">Your Email</span>
              <input className="form-input w-3/4" type="email" placeholder="Ex. james@bond.com" inputMode="email" required />
            </label>
            <label className="block">
              <span className="block mb-1 text-lg font-medium text-gray-700">Your Password</span>
              <input className="form-input w-3/4" type="password" placeholder="••••••••" required />
            </label>
            <div className="flex items-center justify-between">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <div className="my-6 space-y-2">
            <Link href="/forgot password">
              <a className="block text-purple-700 hover:text-black">
                Forgot password?
              </a>
            </Link>
          </div>
        </div>
        <div
          className="w-1/2 h-full hidden lg:block"
        >
          <Image lazyRoot={null} src="/images/login/login.jpg" alt="Restauant managment system" layout="fixed" width="630" height="720" />
        </div>
      </section>

    </div>
  )
}

export default Login