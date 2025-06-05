import React, { useState } from "react";
import Hamburger from "hamburger-react";
const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Hamburger size={18} toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-base-100/90 z-50 flex 
        items-center  justify-center">
          <div className="fixed w-full flex items-center justify-end p-4 z-50">
            <Hamburger size={18} toggled={isOpen} toggle={setOpen} />
          </div>
                    <div className="flex items-center justify-center text-center h-screen">
                        items
                        </div>

        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
