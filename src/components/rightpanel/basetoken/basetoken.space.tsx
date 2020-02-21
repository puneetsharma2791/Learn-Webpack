import "./basetoken.scss";
import React from "react";
export interface BaseTokenSpaceProps {}

export interface BaseTokenSpaceState {}

class BaseTokenSpace extends React.Component<
  BaseTokenSpaceProps,
  BaseTokenSpaceState
> {
  constructor(props: BaseTokenSpaceProps) {
    super(props);
  }
  render() {
    return [
      "spacing-padding-0",
      "spacing-padding-1",
      "spacing-padding-2",
      "spacing-padding-3",
      "spacing-padding-4",
      "spacing-padding-5",
      "spacing-padding-6"
    ].map(className =>
      /^spacing-/.test(className) ? (
        <div className="row space">
          <div className="col col-30 token-name">{className}</div>
          <div className="col">
            <div className={`space-box ${className}`}></div>
          </div>
        </div>
      ) : (
        <h2>{className}</h2>
      )
    );
  }
}

export default BaseTokenSpace;
