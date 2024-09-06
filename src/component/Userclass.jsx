import React from "react";
import { Link } from "react-router-dom";
import { UserInfo_Url } from "../utils/constants";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(UserInfo_Url);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, blog } = this.state.userInfo;

    return (
      <div className="border border-solid border-black bg-slate-200 h-[200px] m-6">
        <img className="w-[200px] h-[200px] float-right" src={avatar_url} />
        <h2 className="font-bold text-2xl m-5">Name: {name}</h2>
        <h3 className="font-bold text-2xl m-5">Location: {location}</h3>
        <h4 className="font-bold text-2xl m-5">
          Contact: <Link className=" hover:text-blue-500" to={blog}>{blog}</Link>
        </h4>
      </div>
    );
  }
}
export default Userclass;
