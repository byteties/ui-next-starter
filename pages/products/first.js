import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function First() {
  return (
    <Layout>      
      <Head>
          <title>Bigbyte</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}