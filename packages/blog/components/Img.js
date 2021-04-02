import React from "react";
import PropTypes from "prop-types";
import { formulateMediaUrl } from "../lib/utils.js";
//import { connect } from "react-redux";
import { addressProps } from "../types.js";

const Img = (props) => {
  const {
    src,
    isThumbnail,
    classes,
    alt,
    defaultImage,
    address = {
      backend: "",
      frontend: "",
      domain: "",
    },
    isExternal = false,
  } = props;


  const source = src
    ? isExternal
      ? src
      : formulateMediaUrl(address.backend, src, isThumbnail)
    : defaultImage || "vercel.svg";

  return (
    <>
      <img className={classes} src={source} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  isThumbnail: PropTypes.bool,
  classes: PropTypes.string,
  alt: PropTypes.string,
  defaultImage: PropTypes.string,
  address: addressProps,
  isExternal: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  address: state.address,
});

//export default connect(mapStateToProps)(Img);
export default Img
