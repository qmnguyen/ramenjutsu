import fetch from "isomorphic-unfetch";

const GetAccessToken = (props) => {
  return (
    <h1>Okay here goes nothing {props.theAccessToken}</h1>
  )
}

GetAccessToken.getInitialProps = async (cxt) => {

  const res = await fetch(`https://untappd.com/oauth/authorize/?client_id=`+process.env.CLIENTID+`&client_secret=`+process.env.CLIENT_SECRET+`&response_type=code&redirect_url=`+process.env.REDIRECT_URL+`&code=${cxt.query.code}`);

  const data = await res.json();

  return {
    theAccessToken: data.response.access_token
  }
}

export default GetAccessToken;
