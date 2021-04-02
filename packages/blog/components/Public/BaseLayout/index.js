import React, { useContext } from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";
import Head from "next/head";
import { formulateMediaUrl } from "../../../lib/utils.js";
//import { addressProps, siteInfoProps } from "../../../types.js";
import Template from "./Template.js";
import Scaffold from "./Scaffold";
import MyContext from "../../../context/MyContext.js";

//type Props = {
//  children?: ReactNode;
//  title?: string;
//  followLinks?: boolean;
//  descript?: string;
//};

const MasterLayout = ({ children, title, props }) => {
  const { siteInfo } = useContext(MyContext)
  return (
    <>
      <Head>
        <title>
          {title} | {siteInfo?.title}
        </title>
        {siteInfo?.logopath && (
          <link
            rel="icon"
            href={formulateMediaUrl(
              props?.address.backend,
              siteInfo?.logopath,
              true
            )}
          />
        )}
        <link
          rel="icon"
          href={
            siteInfo?.logopath
              ? formulateMediaUrl(
                props?.address.backend,
                siteInfo?.logopath,
                true
              )
              : "/courselit_backdrop_square.webp"
          }
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Scaffold  >
        <Template>{children}</Template>
      </Scaffold>
    </>
  );
};

//MasterLayout.propTypes = {
//  children: PropTypes.object,
//  networkAction: PropTypes.bool,
//  siteInfo: siteInfoProps?.isRequired,
//  title: PropTypes.string.isRequired,
//  layout: PropTypes.object.isRequired,
//  address: addressProps,
//};

const mapStateToProps = (state) => ({
  networkAction: state.networkAction,
  siteInfo: state.siteinfo,
  layout: state.layout,
  address: state.address,
});

//export default connect(mapStateToProps)(MasterLayout);
export default MasterLayout
