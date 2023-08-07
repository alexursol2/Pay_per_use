/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Users = ({ className, users = "/img/users-03.svg" }) => {
  return <img className={`users ${className}`} alt="Users" src={users} />;
};

Users.propTypes = {
  users: PropTypes.string,
};
