import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#2E1A4F] text-white ">
        <div className="p-4">
          <p>Designed by: Henry Okafor</p>
          <p>For Bincom Dev Center</p>
          <p className="text-xl p-4">&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
