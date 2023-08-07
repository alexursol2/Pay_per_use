/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Background = ({ variant, type, className, variantType = "/img/variant-2-type-radial.svg" }) => {
  return (
    <img
      className={`background ${className}`}
      alt="Variant type"
      src={
        variant === "five"
          ? "/img/image.svg"
          : variant === "five"
          ? "/img/variant-5-type-radial.svg"
          : variant === "five"
          ? "/img/variant-5-type-radial-1.svg"
          : variant === "four"
          ? "/img/variant-4-type-radial.svg"
          : variant === "four"
          ? "/img/variant-4-type-radial-2.svg"
          : variant === "four"
          ? "/img/variant-4-type-radial-1.svg"
          : variant === "three"
          ? "/img/variant-3-type-radial-2.svg"
          : variant === "three"
          ? "/img/variant-3-type-radial.svg"
          : variant === "three"
          ? "/img/variant-3-type-radial-1.svg"
          : variant === "two"
          ? "/img/variant-2-type-radial-2.svg"
          : variant === "two"
          ? variantType
          : variant === "two"
          ? "/img/variant-2-type-radial-1.svg"
          : variant === "one"
          ? "/img/variant-1-type-radial-2.svg"
          : variant === "one"
          ? "/img/variant-1-type-radial.svg"
          : variant === "one"
          ? "/img/variant-1-type-radial-1.svg"
          : variant === "empty"
          ? "/img/variant-empty-type-radial.svg"
          : undefined
      }
    />
  );
};

Background.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "empty", "one", "four", "five"]),
  type: PropTypes.oneOf(["radial"]),
  variantType: PropTypes.string,
};
