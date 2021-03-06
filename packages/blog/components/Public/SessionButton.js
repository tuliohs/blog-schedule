/**
 * This component provides a clickable button which shows if the user
 * is logged in or is a guest.
 */

import React, { useContext } from "react";
import Link from "next/link";
////import { connect } from "react-redux";
import {
  GENERIC_SIGNOUT_TEXT,
  GENERIC_SIGNIN_TEXT,
} from "../../config/strings.js";
//import { authProps, profileProps } from "../../types.js";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MyContext from "../../context/MyContext.js";

const useStyles = makeStyles({
  button: {
    color: "white",
  },
});

function SessionButton(props) {
  const classes = useStyles();
  const { authProp } = useContext(MyContext)

  return (
    <>
      {authProp.guest ? (
        <Link href="/login">
          <Button className={classes.button}>{GENERIC_SIGNIN_TEXT}</Button>
        </Link>
      ) : (
        <Link href="/logout">
          <Button className={classes.button}>{GENERIC_SIGNOUT_TEXT}</Button>
        </Link>
      )}
    </>
  );
}

//SessionButton.propTypes = {
//  auth: authProps,
//  profile: profileProps,
//};
//const mapStateToProps = (state) => ({ auth: state.auth, profile: state.profile, });
//export default (SessionButton);
export default SessionButton
