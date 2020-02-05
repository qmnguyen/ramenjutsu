import Link from "next/link";

import Layout from "../components/Layout";

const Index = (props) => {
  const authBaseUrl = process.env.AUTH_BASE_URL;

  return (
    <Layout>
      <br />
      <Link href={authBaseUrl}>
        <a>Login with your Untappd account</a>
      </Link>
    </Layout>
  )
}

export default Index;
