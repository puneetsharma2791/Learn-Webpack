import React from "react";
import DropDown from "./dropdownmenu/dropdown";
import "./sidenavbar.scss";
import { RightComponent } from "../rightpanel/rightpanel";
export interface SideNavBarState {}

export interface SideNavBarProps {
  onMenuClick(contentComponent: RightComponent): void;
}

class SideNavBar extends React.Component<SideNavBarProps, SideNavBarState> {
  render() {
    return (
      <div className="sidenav">
        <DropDown
          onsubMenuClick={this.props.onMenuClick}
          label="Base Tokens"
          subMenuMap={{
            Color: "BASE_TOKENS_COLOR",
            Shape: "BASE_TOKENS_SHAPE",
            Space: "BASE_TOKENS_SPACING",
            Size: "BASE_TOKENS_SIZE"
          }}
        />
        {/* <DropDown
          onsubMenuClick={this.props.onMenuClick}
          label="Themes"
          subMenuMap={{ Candu: "THEMES_CANDU", AHS: "THEMES_AHS" }}
        />

        <a onClick={() => this.props.onMenuClick("KITCHEN_SINK")}>
          Kitchen Sink
        </a> */}
      </div>
    );
  }
}

export default SideNavBar;
