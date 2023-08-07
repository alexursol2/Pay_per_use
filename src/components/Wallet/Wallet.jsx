/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Wallet = ({ className, wallet = "/img/wallet-01.svg" }) => {
  return <img className={`wallet ${className}`} alt="Wallet" src={wallet} />;
};

Wallet.propTypes = {
  wallet: PropTypes.string,
};
