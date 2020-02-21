import "@ftdr/blueprint/assets/scss/themes/candu/theme.scss";
import React from "react";

export interface CanduThemeProps {}

export interface CanduThemeState {}

class CanduTheme extends React.Component<CanduThemeProps, CanduThemeState> {
  constructor(props: CanduThemeProps) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}

export default CanduTheme;
