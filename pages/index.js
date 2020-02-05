import Link from "next/link";

import Layout from "../components/Layout";

const Index = (props) => {
  const authBaseUrl = process.env.AUTH_BASE_URL;

  return (
    <Layout>
      <br />
      <a href={authBaseUrl} >Login with your Untappd account</a>
    </Layout>
  )
}

export default Index;
