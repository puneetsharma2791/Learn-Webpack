import React from "react";
import "./dropdown.scss";
import { RightComponent } from "../../rightpanel/rightpanel";
import { CustomerValidationService } from "@ftdr/web-api-js-client";
export interface DropDownProps {
  label: string;
  onsubMenuClick(contentComponent: RightComponent): void;
  subMenuMap: { [key: string]: RightComponent };
}

export interface DropDownState {
  menuOpened: boolean;
}

class DropDown extends React.Component<DropDownProps, DropDownState> {
  constructor(props: DropDownProps) {
    super(props);
    this.state = { menuOpened: true };
    CustomerValidationService.configure({ BearerAuthToken: "" });
  }

  toggleMenu = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  };
  render() {
    let subMenuTags: any = [];
    Object.keys(this.props.subMenuMap).forEach((key, index) => {
      // key: the name of the object key
      // index: the ordinal position of the key within the object
      subMenuTags.push(
        <a
          onClick={() => this.props.onsubMenuClick(this.props.subMenuMap[key])}
        >
          {key}
        </a>
      );
    });

    return (
      <>
        <button onClick={this.toggleMenu} className="dropdown-btn">
          {this.props.label}
          <i className="fa fa-caret-down"></i>
        </button>
        {this.state.menuOpened && (
          <div className="dropdown-container">{subMenuTags}</div>
        )}
      </>
    );
  }
}

export default DropDown;
