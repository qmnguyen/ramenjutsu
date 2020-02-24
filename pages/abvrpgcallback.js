import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const codeQuery = [];
const customAccessToken = [];

const GetAccessToken = (props) => {
  console.log(props.accessToken);
  return (
    <h1>hello world: {props.accessToken}</h1>
  )
}

GetAccessToken.getInitialProps = async (cxt) => {

  // testing if code is pulled in
  { console.log(cxt.query.code) }

  const res = await fetch(`https://untappd.com/oauth/authorize/?client_id=`+process.env.CLIENTID+`&client_secret=`+process.env.CLIENT_SECRET+`&response_type=code&redirect_url=`+process.env.REDIRECT_URL+`&code=${cxt.query.code}`);

  const data = await res.json();
  { console.log(data.response.access_token) }
  return {
    accessToken: data.response.access_token
  }
}

export default withRouter(GetAccessToken);
