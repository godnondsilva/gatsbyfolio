import * as React from "react"
import Header from "../components/header/Header"
import Landing from "../components/landing/Landing"
import { GlobalStyles } from "../globalStyles"

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header siteTitle={'Portfolio'} />
        <Landing />
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
