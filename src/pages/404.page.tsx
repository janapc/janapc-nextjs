import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const notFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
        data-testid="page-notfound"
      >
        <Image
          src="/images/404.png"
          alt="Emoji Janaina"
          width="300"
          height="300"
          objectFit="contain"
          data-testid="image-cry"
        />
        <h2
          style={{
            fontSize: '4rem',
            fontFamily: 'Lora, serif',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          data-testid="description-notfound"
        >
          Oh sorry this page is not found
        </h2>
      </div>
    </>
  );
};

export default notFound;
