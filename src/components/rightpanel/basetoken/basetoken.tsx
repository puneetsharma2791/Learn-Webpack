import React from "react";
import "./basetoken.scss";

export interface BaseTokenProps {}

export interface BaseTokenState {}

class BaseToken extends React.Component<BaseTokenProps, BaseTokenState> {
  constructor(props: BaseTokenProps) {
    super(props);
  }
  render() {
    return <div className="baseToken"></div>;
  }
}

export default BaseToken;
