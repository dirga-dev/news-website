import React from "react";

function Footer() {
  return (
    <div className="main-footer">
        <div className="row">
          <p className="col text-center copyrights">
            &copy;{new Date().getFullYear()} Copyright • All rights reserved • NewsApp
          </p>
        </div>
      </div>
  );
}

export default Footer;