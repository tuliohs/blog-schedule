import React from "react";
import dynamic from "next/dynamic";
////import { connect } from "react-redux";
//import { publicCourse } from "../types";

const Article = dynamic(() => import("./Public/Article.js"));

const CourseIntroduction = ({ course }) => {
  //const { course } = props;
  const options = {
    showEnrollmentArea: true,
  };

  return <>{course && <Article course={course} options={options} />}</>;
};

//CourseIntroduction.propTypes = {  course: publicCourse,};
//const mapStateToProps = (state) => ({});
//export default (CourseIntroduction);
export default CourseIntroduction
