import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found Error found" />
    <h1>404: Not Found error</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness sorry.</p>
  </Layout>
)

export default NotFoundPage
