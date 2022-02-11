import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import { Container } from '@mui/material'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Buttons from '../components/Buttons'


export default function Home() {
  return (
   <>

    <Head>
      <title>Simplefolio</title>
      <meta name='description' content='A simple portfolio'></meta>
    </Head>
    
    
    <Navigation />
    

    <section>
    <Hero/>
    </section>

    <section>
      <Projects/>
    </section>
    
    <section>
      <Skills/>
    </section>

    <Buttons />
   </>
  )
}
