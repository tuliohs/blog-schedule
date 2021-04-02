import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import Link from "next/link";
//import { connect } from "react-redux";
import SessionButton from "../SessionButton";
import { siteInfoProps } from "../../../types";
import { makeStyles } from "@material-ui/styles";
import dynamic from "next/dynamic";
import MyContext from "../../../context/MyContext";

const Img = dynamic(() => import("../../Img.js"));

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
  },
  logocontainer: {
    width: "2em",
    height: "2em",
    marginRight: theme.spacing(1),
    display: "flex",
  },
  logoimg: {
    borderRadius: "0.2em",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { siteInfo } = useContext(MyContext)
  return (
    <Grid container justify="space-between" direction="row" alignItems="center">
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Link href="/">
              <a className={classes.logo}>
                <div className={classes.logocontainer}>
                  <Img
                    src={siteInfo.logopath}
                    isThumbnail={true}
                    classes={classes.logoimg}
                    alt="logo"
                    defaultImage="6065dde6d5f9071a90a73a6c"
                  />
                </div>
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5">{siteInfo.title}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <SessionButton />
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  siteinfo: siteInfoProps,
};

const mapStateToProps = (state) => ({
  siteinfo: state.siteinfo,
});

//export default connect(mapStateToProps)(Header);
export default Header