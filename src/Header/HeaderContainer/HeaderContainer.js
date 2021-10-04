import React from "react";
import { MediaContextProvider } from "../../MediaProfile";
import DesktopHeader from "../DesktopHeader/DestopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";

const HeaderContainer = () => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopHeader />
    <MobileHeader />
  </MediaContextProvider>
);

export default HeaderContainer;
