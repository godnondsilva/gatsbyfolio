import * as React from "react"
import { GlobalStyles } from "../globalStyles"

// Components
import Header from "../components/header/Header"
import Landing from "../components/landing/Landing"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"

// Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(faGithub, faLinkedin, faTwitter, faEnvelope, faEye, faEyeSlash);

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
