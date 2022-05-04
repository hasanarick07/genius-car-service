import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        <small>Copywrite © {year} By Arick</small>
      </p>
    </footer>
  );
};

export default Footer;
