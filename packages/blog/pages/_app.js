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
import defaultState from '../config/defaultState'
//import wrapper from "../redux/store.js";
//import "@courselit/rich-text/dist/main.css";
import dynamic from "next/dynamic";

const CodeInjector = dynamic(() => import("../components/Public/CodeInjector.js"))

import { getBackendAddress } from "../lib/utils.js";
import MyContext from '../context/MyContext';

const muiTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: { main: '#2A3F54' },
    secondary: {
      main: '#ec4d37',
      dark: '#eee'
    },
    error: { main: '#ff1744' },
    background: { default: '#f5f5f5' },
    contrastThreshold: 3
  },
  overrides: { drawerWidth: 240 }
}
))

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(muiTheme);
  const [address, setAddress] = useState({});
  const [siteInfo, setSiteInfo] = useState({
    title: "Forgetion",
    subtitle: "Learning Bases in Not Forgetion",
    logopath: "6065dde6d5f9071a90a73a6c",
    currencyUnit: "d",
    currencyISOCode: "a",
  })
  const [profile, setProfile] = useState({
    isCreator: false,
    name: "",
    id: "",
    fetched: false,
    email: "",
    //purchases: [""],

  })
  const [authProp, setAuthProp] = useState({
    guest: false,
    token: ""
  });
  const [navigation, setNavigation] = useState([{
    text: "Home",
    destination: "/",
    category: "main",
    newTab: false
  }])
  const [layout, setLayout] = useState(defaultState.layout)

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
      <MyContext.Provider value={{ siteInfo, profile, authProp, navigation, layout }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <CodeInjector props={{ codeForHead: "<>customization headers</>" }} />
        </ThemeProvider>
      </MyContext.Provider>
    </>
  )
}

//async function updateSiteTheme(backend) {
//  let tema;
//  try {
//    //dispatch(networkAction(true));
//    const query = `
//      { 
//        theme: getTheme {
//          styles
//        }
//      }
//      `;
//    const fetch = new FetchBuilder()
//      .setUrl(`${backend}/graph`)
//      .setPayload(query)
//      .setIsGraphQLEndpoint(true)
//      .build();
//    const response = await fetch.exec();
//    tema = response

//  } catch (e) {
//    console.log(e, 'erro fetch')
//  }
//  return tema
//}

//export const getStaticProps  = async () => {
//export async function getServerSideProps
//export const getServerSideProps = async (context) => {

//  const { req } = context;
//  const courses = await updateSiteTheme(getBackendAddress(
//    req?.headers?.host || 'localhost:8000'
//  ));
//  return { props: { courses } };
//}

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
