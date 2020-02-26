import fetch from "isomorphic-unfetch";

const GetAccessToken = (props) => {
  return (
    <h1>Access Token: {props.theAccessToken} and Code: {props.theCode}</h1>
  )
}

GetAccessToken.getInitialProps = async ({ query }) => {

  const res = await fetch(`https://untappd.com/oauth/authorize/?client_id=`+process.env.CLIENTID+`&client_secret=`+process.env.CLIENT_SECRET+`&response_type=code&redirect_url=`+process.env.REDIRECT_URL+`&code=${query.code}`);

  const data = await res.json();

  return {
    theAccessToken: data.response.access_token,
    theCode: query.code
  }

}

export default GetAccessToken;
