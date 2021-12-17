import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the myyy second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage byeee</Link>
  </Layout>
)

export default SecondPage
