import User from "./User";
import Userclass from "./Userclass";
import React from "react";
//the above line can also be written as written below
//import {Component} from "react"; but then in extend line React.Component will just become Component

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="m-5">
        <h1 className="text-xl"> About us page</h1>
        <h2 className="text-xl">this is an food ordering website</h2>
        <Userclass name={"Saquib Beg "} location={"Mumbai class"} />
      </div>
    );
  }
}

export default About;