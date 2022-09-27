import * as React from "react"
import { GlobalStyles } from "../globalStyles"

// Components
import Header from "../components/header/Header"
import Landing from "../components/landing/Landing"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
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
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
