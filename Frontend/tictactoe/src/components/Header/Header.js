import { Component } from "react";
import NavBar from "./NavBar/NavBar";
import UserBar from "./UserBar/UserBar";

class Header extends Component {
  render() {
    return (
      <div className="flex justify-between items-center border-b-indigo-200 border-b">
        <NavBar />
        <UserBar />
      </div>
    );
  }
}

export default Header;
