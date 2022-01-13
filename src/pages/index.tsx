import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>im not desperate i swear ;-;</title>
        <meta name="keywords" content="pls" />
      </Head>
      <div className={styles.container}>
        <b>pls?</b>
        <Link href="/resume">
          <a>here resume</a>
        </Link>
      </div>
      ;
    </div>
  );
};

export default Home;
