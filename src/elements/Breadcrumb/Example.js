import React from "react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const BreadCrumbEx = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  return (
    <div>
      <Router>
        <Breadcrumb data={breadcrumbList} />
      </Router>
    </div>
  );
};

export default BreadCrumbEx;
