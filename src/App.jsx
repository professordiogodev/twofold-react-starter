import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import DiogoMessageBanner from './components/DiogoMessageBanner'
import DionamindHub from './components/DionamindHub'
import DiogoIntro from './components/DiogoIntro'
import CardActions from './components/CardActions'
import CTANewsletter from './components/CTANewsletter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ContextSection from './components/ContextSection'

function App() {

  return (
    <>
      {/* Largura Total - 1440px */} 
      {/* Conteúdo Principal - 1180px */} 

      <MainContainer>
        <Header />
        <div className='spacer-xl'></div>
        <Hero />
        <ContextSection />
        <DiogoMessageBanner />
        <DionamindHub />
        <DiogoIntro />
        <CardActions />
        <CTANewsletter />
        <FAQ />
      </MainContainer>

      <Footer />

    </>
  )
}

export default App
