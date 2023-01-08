import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (<div>
        <Head>
            <title>My HomePage</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>This is Home Page</p>
        <Link href="/notes">
            Show all Notess
        </Link>
    </div>)
}