import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import '../styles/globals.css';
import '../styles/animations.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vadala Ananda Teertha | Portfolio</title>
        <meta name="description" content="Professional portfolio of Vadala Ananda Teertha - Full-Stack Developer & AI Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp