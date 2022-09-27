import * as React from "react"
import { GlobalStyles } from "../globalStyles"

// Components
import Header from "../components/header/Header"
import Landing from "../components/landing/Landing"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header siteTitle={'Portfolio'} />
        <Landing />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
