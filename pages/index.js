import Link from "next/link";

import Layout from "../components/Layout";

const Index = (props) => {
  const loginUrl = process.env.AUTH_BASE_URL + `?client_id=` + process.env.CLIENT_ID + `&response_type=code&redirect_url=` + process.env.REDIRECT_URL;

  return (
    <Layout>
      <br />
      <a href={loginUrl} >Login with your Untappd account</a>
    </Layout>
  )
}

export default Index;
