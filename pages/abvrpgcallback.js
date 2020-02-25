import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const GetAccessToken = (props) => {
  return (
    <h1>The code is {props.specialCode}</h1>
  )
}

GetAccessToken.getInitialProps = async (cxt) => {
  const myCode = cxt.query.code

  // const res = await fetch(`https://untappd.com/oauth/authorize/?client_id=`+process.env.CLIENTID+`&client_secret=`+process.env.CLIENT_SECRET+`&response_type=code&redirect_url=`+process.env.REDIRECT_URL+`&code=${cxt.query.code}`);
  //
  // const data = await res.json();

  return {
    specialCode: myCode
  }
}

export default withRouter(GetAccessToken);
