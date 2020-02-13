import { withRouter } from "next/router";

const codeQuery = [];
const customAccessToken = [];

const GetAccessToken = (props) => {
  if(props.router.query.code) {
    codeQuery.push(props.router.query.code);
    return (
      codeQuery
    )
  } else {
    console.log(`No code available.`+props.accessToken);
    return null
  }
}

GetAccessToken.getInitialProps = async () => {
  const res = await fetch(`https://untappd.com/oauth/authorize/?client_id=`+process.env.CLIENTID+`&client_secret=`+process.env.CLIENT_SECRET+`&response_type=code&redirect_url=`+process.env.REDIRECT_URL+`&code=${GetAccessToken}`);

  const data = await res.json();
  { console.log(data.response.access_token) }
  return {
    accessToken: data.response.access_token
  }
}

export default withRouter(GetAccessToken);
