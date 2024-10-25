import React from "react";

function Footer() {
  return (
    <footer className="w-full py-4 fixed bottom-0 bg-gray-950 text-white text-center">
      <p className="text-xs">
        Designed and Coded by{" "}
        <a
          href="https://www.linkedin.com/in/yossi-shem-tov/"
          className="font-semibold text-blue-400 hover:underline"
        >
          Yossi Shem Tov
        </a>
      </p>
    </footer>
  );
}

export default Footer;
