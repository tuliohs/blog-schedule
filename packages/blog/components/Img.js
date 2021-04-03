import React from "react";
import PropTypes from "prop-types";
import { formulateMediaUrl } from "../lib/utils.js";
////import { connect } from "react-redux";
import { addressProps } from "../types.js";
import defaultState from '../config/defaultState'

const Img = (src,
  isThumbnail = true,
  classes,
  alt,
  defaultImage,
  address = defaultState.address.backend,
  isExternal = false,) => {
  console.log('srccrs', src.src)

  const source = src
    ? isExternal
      ? src
      : formulateMediaUrl(address, src.src, isThumbnail)
    : defaultImage || "/courselit_backdrop_square";

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

//Img.propTypes = {
//  src: PropTypes.string,
//  isThumbnail: PropTypes.bool,
//  classes: PropTypes.string,
//  alt: PropTypes.string,
//  defaultImage: PropTypes.string,
//  address: addressProps,
//  isExternal: PropTypes.bool,
//};
//const mapStateToProps = (state) => ({  address: state.address,});
//export default (Img);
export default Img
