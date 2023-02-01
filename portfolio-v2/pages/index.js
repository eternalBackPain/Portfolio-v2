import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>John Naoom</title>
        <meta name="description" content="Porfolio of John Naoom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>John Naoom</h1>
        </div>
        <p>add content here</p>    
      </main>
    </>
  );
}
