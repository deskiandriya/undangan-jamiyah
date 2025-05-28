import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import InvitationBody from '../components/InvitationBody';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>JAMIYAH 'AL HIDAYAH' - Undangan</title>
        <meta name="description" content="Undangan resmi dari JAMIYAH 'AL HIDAYAH'" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <Header />
          <InvitationBody />
          <Contact />
          <Footer />
        </main>
      </Layout>
    </>
  );
}
