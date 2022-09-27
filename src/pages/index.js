import * as React from "react"
import Header from "../components/Header/Header"
import { GlobalStyles } from "../globalStyles"

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header siteTitle={'Portfolio'} />
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
