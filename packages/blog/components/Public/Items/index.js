import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";
////import { connect } from "react-redux";
//import { networkAction } from "../../../redux/actions";
import FetchBuilder from "../../../lib/fetch";
import { Grid, Button } from "@material-ui/core";
import { BTN_LOAD_MORE } from "../../../config/strings";
import Post from "./Post";
//import { addressProps, publicCourse } from "../../../types";
import Course from "./Course";
import { makeStyles } from "@material-ui/styles";
import defaultState from '../../../config/defaultState'


const useStyles = makeStyles((theme) => ({
  loadMoreBtn: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2),
    },
  },
}));

const List = ({ showLoadMoreButton = true, initialItems,
  generateQuery, posts = true }) => {
  const [courses, setCourses] = useState(initialItems || []);
  const [offset, setOffset] = useState(2);
  const [shouldShowLoadMoreButton, setShouldShowLoadMoreButton] = useState(
    typeof showLoadMoreButton === "boolean"
      ? showLoadMoreButton
      : false
  );

  const classes = useStyles();

  useEffect(() => {
    getPosts(defaultState.address.backend);
  }, [offset]);

  const getPosts = async (backend) => {
    try {
      //verify what is it
      //props.dispatch && props.dispatch(networkAction(true));
      const fetch = new FetchBuilder()
        .setUrl(`${backend}/graph`)
        .setPayload(generateQuery(offset))
        .setIsGraphQLEndpoint(true)
        .build();
      const response = await fetch.exec();

      if (response.courses) {
        if (response.courses.length > 0) {
          setCourses([...courses, ...response.courses]);
        } else {
          setShouldShowLoadMoreButton(false);
        }
      }
    } finally {
      //props.dispatch && props.dispatch(networkAction(false));
    }
  };
  return courses.length > 0 ? (
    <>
      <Grid item container xs={12} justify="space-between">
        {courses.map((x, index) =>
          posts ? <Post key={index}  {...x} /> : <Course key={index} {...x} />
        )}
      </Grid>
      {shouldShowLoadMoreButton && courses.length > -50 && (
        <Grid item xs={12}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setOffset(offset + 1)}
            className={classes.loadMoreBtn}
          >
            {BTN_LOAD_MORE}
          </Button>
        </Grid>
      )}
    </>
  ) : (
    <></>
  );
};

//List.propTypes = {
//  generateQuery: PropTypes.func.isRequired,
//  initialItems: PropTypes.arrayOf(publicCourse),
//  showLoadMoreButton: PropTypes.bool,
//  dispatch: PropTypes.func.isRequired,
//  posts: PropTypes.bool,
//  address: addressProps,
//};
//const mapStateToProps = (state) => ({address: state.address,})
//const mapDispatchToProps = (dispatch) => ({  dispatch: dispatch,});
//export default (List);
export default List
