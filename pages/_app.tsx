import Head from "next/head";
import React from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import ReactGA from 'react-ga';
import "../styles/globals.css";

const trackingId = "UA-200059503-1"
ReactGA.initialize(trackingId);


const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Maveshi Farms</title>
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
        
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
