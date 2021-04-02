import React, { useContext } from "react";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import WidgetByName from "./WidgetByName";
import { useRouter } from "next/router";
import widgets from "../../../config/widgets";
import MyContext from "../../../context/MyContext";

const Section = ({ name }) => {
  const { layout } = useContext(MyContext)
  const sectionLayout = layout[name];
  const router = useRouter();

  return sectionLayout && sectionLayout.length ? (
    <Grid container item direction="column">
      {sectionLayout.map((item, index) =>
        widgets[item].metadata.excludeFromPaths &&
          widgets[item].metadata.excludeFromPaths.includes(router.pathname) ? (
          <div key={index}></div>
        ) : (
          <Grid item key={index}>
            <WidgetByName name={item} section={name} />
          </Grid>
        )
      )}
    </Grid>
  ) : (
    <></>
  );
};

//Section.propTypes = {
//  name: PropTypes.string.isRequired,
//  layout: PropTypes.object.isRequired,
//};
//const mapStateToProps = (state) => ({layout: state.layout,})
//export default connect(mapStateToProps)(Section);
export default Section
