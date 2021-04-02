import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import App from "next/app";

import { Provider, useStore } from "react-redux";
import { getCookie } from "../lib/session.js";
import { JWT_COOKIE_NAME, USERID_COOKIE_NAME } from "../config/constants.js";
//import {
//  signedIn,
//  updateSiteInfo,
//  authHasBeenChecked,
//  updateSiteTheme,
//  updateSiteLayout,
//  updateSiteNavigation,
//  updateBackend,
//} from "../redux/actions.js";
import { ThemeProvider, unstable_createMuiStrictModeTheme } from "@material-ui/styles";
import { responsiveFontSizes, createMuiTheme } from "@material-ui/core";
import { CONSOLE_MESSAGE_THEME_INVALID } from "../config/strings.js";
//import wrapper from "../redux/store.js";
//import "@courselit/rich-text/dist/main.css";
import dynamic from "next/dynamic";

//const CodeInjector = dynamic(() =>
//  import("../components/Public/CodeInjector.js")
//);



import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import MyContext from '../context/MyContext';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({});
  const [address, setAddress] = useState({});
  const [siteInfo, setSiteInfo] = useState({
    title: "a",
    subtitle: "f",
    logopath: "f",
    currencyUnit: "d",
    currencyISOCode: "a",

  })

  const [profile, setProfile] = useState({
    isCreator: false,
    name: "",
    id: "",
    fetched: false,
    email: "",
    purchases: [""],

  })


  //const muiTheme = responsiveFontSizes(theme);
  //const { theme, address } = store.getState();
  //try {
  //  muiTheme = responsiveFontSizes(
  //    createMuiTheme(Object.keys(theme.styles).length ? theme.styles : {})
  //  );
  //} catch (err) {
  //  console.warn(CONSOLE_MESSAGE_THEME_INVALID);
  //  muiTheme = responsiveFontSizes(createMuiTheme({}));
  //}

  //const setUpCookies = () => {
  //  const tokenCookie = getCookie({
  //    key: JWT_COOKIE_NAME,
  //    domain: address.domain,
  //  });
  //  if (tokenCookie) {
  //    store.dispatch(
  //      signedIn(
  //        getCookie({ key: USERID_COOKIE_NAME, domain: address.domain }),
  //        tokenCookie
  //      )
  //    );
  //  }
  //  store.dispatch(authHasBeenChecked());
  //};

  const removeServerSideInjectedCSS = () => {//???? its usable for more projects
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  useEffect(() => {
    //setUpCookies();
    removeServerSideInjectedCSS();
  }, []);

  return (
    <>
      <MyContext.Provider value={{ siteInfo, profile }}>
        <ThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
          {/*<CodeInjector />*/}
        </ThemeProvider>
      </MyContext.Provider>
    </>
  )
}


//MyApp.getInitialProps = async (appContext) => {
//  const { ctx } = appContext;

//  if (ctx.req && ctx.req.headers && ctx.req.headers.host) {
//ctx.store.dispatch(updateBackend(ctx.req.headers.host));
//await ctx.store.dispatch(updateSiteInfo());
//await ctx.store.dispatch(updateSiteLayout());
//await ctx.store.dispatch(updateSiteTheme());
//await ctx.store.dispatch(updateSiteNavigation());
//  }

//  const appProps = await App.getInitialProps(appContext);
//  return { ...appProps };
//};

export default MyApp
