// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Head from 'next/head'
import Hero from '../components/web/Hero'
import Navbar from '../components/web/Navbar'
import SectionTitle from '../components/web/SectionTitle'

import { benefitOne, benefitTwo } from '../components/Data'
import Video from '../components/web/Video'
import Benefits from '../components/web/Benefits'
import Footer from '../components/web/Footer'
import Testimonials from '../components/web/Testemonials'
import Cta from '../components/web/CTA'
import Faq from '../components/web/FAQ'
import PopupWidget from '../components/PopupWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Citizens - Powerfull API´s</title>
        <meta
          name="description"
          content="We offer powerful RESTful API services built with you in mind."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="OUR BENEFITS" title="Increase Your Sales">
        Get your message to the right person at the right time with global
        infrastructure and industry expertise you can rely on.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Send an email with a few lines of code"
      >
        Get up and running today. We have a robust set of APIs and comprehensive
        documentation so you can spend less time adding email into your app and
        more time building cool stuff.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  )
}
