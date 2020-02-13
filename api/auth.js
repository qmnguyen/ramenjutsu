import React from "react";
import fetch from "isomorphic-unfetch";

const authHandler = (props) => (
  <h1>hey there {props.beers}</h1>
)

authHandler.getInitialProps = async () => {
  const res = await fetch(`https://api.untappd.com/v4/user/checkins?access_token=A727F8E64985BD0506340CEA18BEE021383E8027`);
  const data = await res.json();

  return {
    beers: data.response.checkins.items
  }
}

export default authHandler;
