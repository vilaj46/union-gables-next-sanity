import React from "react";
import { useRouter } from "next/router";

// Template:
// https://codepen.io/worsnupd/pen/VgZwOw?editors=0110

// Components
import MobileLinks from "./components/MobileLinks";
import RegularLinks from "./components/RegularLinks";

// Test data
import sampleData from "./data";

function Navbar({ links = sampleData }) {
  const router = useRouter();

  const routerPush = (e, href) => {
    if (href === "#") {
      return;
    }
    e.preventDefault();
    router.push(href);
  };

  return (
    <nav>
      {/** Not mobile navbar */}
      <RegularLinks links={links} routerPush={routerPush} />
      {/** Mobile navbar */}
      <MobileLinks links={links} routerPush={routerPush} />
    </nav>
  );
}

export default Navbar;
