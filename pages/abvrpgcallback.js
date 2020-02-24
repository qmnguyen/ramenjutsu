import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const codeQuery = [];
const customAccessToken = [];

const GetAccessToken = (props) => {
  return (
    <h1>hello world: {props.accessToken} and {props.specialCode}</h1>
  )
}

GetAccessToken.getInitialProps = async (cxt) => {

  const res = await fetch(`https://untappd.com/oauth/authorize/?client_id=`+process.env.CLIENTID+`&client_secret=`+process.env.CLIENT_SECRET+`&response_type=code&redirect_url=`+process.env.REDIRECT_URL+`&code=${cxt.query.code}`);

  // const data = await res.json();

  return (
    {accessToken: res.access_token},
    {specialCode: cxt.query.code}
  )
}

export default withRouter(GetAccessToken);
