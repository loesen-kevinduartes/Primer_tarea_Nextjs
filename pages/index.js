// Package Imports
import Head from 'next/head';

// Component Imports
import Favicons from '../components/Favicons';
import Header from '../components/Header';
import Body from '../components/Body';

// Config Imports

// Custom Hook Imports

// Helper Imports

// Icon Imports

// Exported Component
export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Duartes</title>
        <Favicons />
      </Head>
      <header className=''></header>
      <main className=''>
        <div className='max-w-5xl mx-auto pt-4 pb-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <Header />
          <Body />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
