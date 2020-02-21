import "./basetoken.scss";
import React from "react";
export interface BaseTokenColorProps {}

export interface BaseTokenColorState {}

class BaseTokenColor extends React.Component<
  BaseTokenColorProps,
  BaseTokenColorState
> {
  constructor(props: BaseTokenColorProps) {
    super(props);
  }
  render() {
    return [
      "Primary Brand Colors",
      "color-brand-primary-dark",
      "color-brand-primary",
      "color-brand-primary-light",

      "Status Colors",
      "color-status-error",
      "color-status-warning",
      "color-status-success",

      "Neutral Colors",
      "color-white",
      "color-gray-5",
      "color-gray-10",
      "color-gray-20",
      "color-gray-30",
      "color-gray-40",
      "color-gray-50",
      "color-gray-60",
      "color-gray-70",
      "color-gray-80",
      "color-gray-90",
      "color-black"
    ].map(className =>
      /^color-/.test(className) ? (
        <div className="row">
          <div className="col col-30 token-name">{className}</div>
          <div className="col">
            <div className={`color-box ${className}`}></div>
          </div>
        </div>
      ) : (
        <h2>{className}</h2>
      )
    );
  }
}

export default BaseTokenColor;
