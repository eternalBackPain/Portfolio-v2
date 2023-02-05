import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Canvas from "./components/Canvas";

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
      <Canvas />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>John Naoom</h1>
          <h4>
            Hello. I'm a rising legal professional (i.e. overzealous law
            student) with an interest in tech.
          </h4>
          <h4>Welcome to my site.</h4>
        </div>
        <div className={styles.content}>
          <h2>Background</h2>
          <p>
            I work as a paralegal for a tier-one construction and development
            company. I've also clerked at an upper-mid tier law firm, rotating
            through the construction and public law practices.
          </p>

          <p>
            Prior to entering the legal industry, I:
            <ul>
              <li>cooked at Maccas;</li>
              <li>served at Target;</li>
              <li>merchandised goods for a bit;</li>
              <li>
                started bartending and pulling coffee shots (not the best
                barista admittedly);
              </li>
              <li>interned in not-for-profit shareholder advocacy; and</li>
              <li>sat in display homes to sell new home builds.</li>
            </ul>
          </p>

          <h2>Interests</h2>
          <p>
            I'm an avid programmer. I'm decent at web development (JavaScript,
            Node.js) and want to learn more about AI and Web3 dev. Check out{" "}
            <a href="https://github.com/eternalBackPain">GitHub</a> for my
            projects.
          </p>

          <p>
            I have a background in economics, and particularly enjoy
            econometrics (using statistics to study relationships between
            variables and making predictions).
          </p>

          <p>
            I also enjoy:
            <ul>
              <li>
                watching terrible low budget horror films on Amazon Prime;
              </li>
              <li>financially destroying my friends in Monopoly;</li>
              <li>
                logging my runs on strava and detailing my every thought in the
                description box; and
              </li>
              <li>
                cooking, especially noodle dishes, curries and hummus (baking
                soda and ice - iykyk).
              </li>
            </ul>
          </p>
        </div>
      </main>
    </>
  );
}
