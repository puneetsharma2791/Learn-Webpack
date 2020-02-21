import React, { useState } from "react";

import "./App.scss";

import SideNavBar from "./components/sidenavbar/sidenavbar";
import RightPanel, { RightComponent } from "./components/rightpanel/rightpanel";
function App() {
  const [rightPanelComponent, setrightPanelComponent] = useState("BASE_TOKENS");
  return (
    <div>
      <SideNavBar onMenuClick={comp => setrightPanelComponent(comp)} />
      <RightPanel contentComponent={rightPanelComponent as RightComponent} />
    </div>
  );
}

export default App;
