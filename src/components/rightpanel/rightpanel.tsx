import React from "react";
import "./rightpanel.scss";
import BaseTokenColor from "./basetoken/basetoken.color";
import BaseTokenShape from "./basetoken/basetoken.shape";
import BaseTokenSpace from "./basetoken/basetoken.space";
export interface RightPanelProps {
  contentComponent: RightComponent;
}
export type RightComponent =
  | "BASE_TOKENS_COLOR"
  | "BASE_TOKENS_SIZE"
  | "BASE_TOKENS_SHAPE"
  | "BASE_TOKENS_SPACING"
  | "THEMES_CANDU"
  | "THEMES_AHS"
  | "BASE_TOKENS"
  | "KITCHEN_SINK";
export interface RightPanelState {}

class RightPanel extends React.Component<RightPanelProps, RightPanelState> {
  constructor(props: RightPanelProps) {
    super(props);
  }
  render() {
    return (
      <div className="rightPanel">
        {this.props.contentComponent === "BASE_TOKENS_COLOR" && (
          <BaseTokenColor></BaseTokenColor>
        )}
        {this.props.contentComponent === "BASE_TOKENS_SHAPE" && (
          <BaseTokenShape></BaseTokenShape>
        )}
        {this.props.contentComponent === "BASE_TOKENS_SPACING" && (
          <BaseTokenSpace></BaseTokenSpace>
        )}
      </div>
    );
  }
}

export default RightPanel;
