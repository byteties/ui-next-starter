import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
export default function Home() {
  return (
    <>
    <Head>
        <title>Bigbyte</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <Layout />
    </>
  )
}