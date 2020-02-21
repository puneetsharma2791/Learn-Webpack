import "./basetoken.scss";
import React from "react";
export interface BaseTokenShapeProps {}

export interface BaseTokenShapeState {}

class BaseTokenShape extends React.Component<
  BaseTokenShapeProps,
  BaseTokenShapeState
> {
  constructor(props: BaseTokenShapeProps) {
    super(props);
  }
  render() {
    return [
      "Border Radius",
      "shape-border-radius-0",
      "shape-border-radius-1",
      "shape-border-radius-2",
      "shape-border-radius-3",
      "shape-border-radius-4",
      "shape-border-radius-5",
      "shape-border-radius-6",
      "shape-border-radius-7",
      "shape-border-radius-button-primary",
      "shape-border-radius-button-secondary",

      "Border Width",
      "shape-border-width-0",
      "shape-border-width-1",
      "shape-border-width-2",
      "shape-border-width-3"
    ].map(className =>
      /-width-/.test(className) ? (
        <div className="row shape">
          <div className="col col-30 token-name">{className}</div>
          <div className="col">
            <div className={`shape-box-nofill ${className}`}></div>
          </div>
        </div>
      ) : /^shape-/.test(className) ? (
        <div className="row shape">
          <div className="col col-30 token-name">{className}</div>
          <div className="col">
            <div className={`shape-box ${className}`}></div>
          </div>
        </div>
      ) : (
        <h2>{className}</h2>
      )
    );
  }
}

export default BaseTokenShape;
