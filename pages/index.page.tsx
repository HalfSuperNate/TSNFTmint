import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Wallet from './wallet.page';
import Link from 'next/link';
// import AdminComponent from './adminCtrl.page';
// import { useAccount } from 'wagmi';
// import { useIsMounted } from './useIsMounted';
// import { AdminCheck } from './readContract';

const Home: NextPage = () => {
  // const { address } = useAccount();
  // const isAdmin = AdminCheck(address);
  // const mounted = useIsMounted();
  return (
    <div className={styles.container}>
      <Head>
        <title>The Sanctuary Mint</title>
        <meta name="description" content="The Sanctuary is a place where 5555 pups have found refuge in web3. We are a team and community dedicated to bringing real life utility to a brand that is passionate about the well being of dogs and dog owners alike. Our monthly subscription box service and utilities for our holders are unmatched, along with providing financial assistance to irl Dog Sanctuaries in the USA and Canada." />
        <link href="/icon.png" rel="icon" type="image/x-icon"/>
      </Head>

      <main className={styles.main}>

        <Wallet />
        {/* {mounted ? isAdmin && <AdminComponent /> : null} */}
        
      </main>

      <img src="/bottomImg.png" alt="Logo" className={styles.bottomImg} />

      <footer className={styles.footer}>
        <Link href="https://opensea.io/assets/ethereum/0x715af60ec1c3c65e294c7d8ef340f14e754c66bb" rel="noopener noreferrer" target="_blank">
          <img src="/opensea_icon.svg" alt="OpenSea" className={styles.footerLogo} />
        </Link>
        <Link href="https://etherscan.io/address/0x715af60ec1c3c65e294c7d8ef340f14e754c66bb" rel="noopener noreferrer" target="_blank">
          <img src="/eth_icon.svg" alt="Etherscan" className={styles.footerLogo} />
        </Link>
        <Link href="https://twitter.com/DogSanctuaryNFT" rel="noopener noreferrer" target="_blank">
          <img src="/x_icon.svg" alt="Twitter" className={styles.footerLogo} />
        </Link>
      </footer>
    </div>
  );
};

export default Home;
