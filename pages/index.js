import Head from 'next/head'
import Image from 'next/image'
import Descontos from '../components/Descontos'
import Header from '../components/Header'
import Top from '../components/Top'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import About from '../components/About'

export default function Home() {
  return (
    <div className=''>
        <div className="pt-8 md:h-screen px-10 bg-no-repeat bg-cover bg-center bg-[url('/background-hero-mobile.png')] xl:bg-[url('/background-hero.png')]">
          <Header />
          <Top />
        </div>
        <About />
        <Descontos />
        <ContactForm />
        <Footer />
        {/*<Form></Form>
        <Testemunhos></Testemunhos>*/}
    </div>
  )
}
