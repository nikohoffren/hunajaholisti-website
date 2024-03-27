import React, { useState } from 'react';

interface MenuItemProps {
  href: string;
  text: string;
  closeDropdown: () => void; // New prop to close dropdown
}

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="block px-5 mx-0 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-white lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-yellow-300 hover:scale-105"
      >
        <i className="fas fa-user text-white"></i>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <MenuItem href="/profile" text="Profile" closeDropdown={closeDropdown} />
          <MenuItem href="#" text="Settings" closeDropdown={closeDropdown} />
          <MenuItem href="/login" text="Logout" closeDropdown={closeDropdown} />
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ href, text, closeDropdown }: MenuItemProps) => {
  // Close the dropdown and perform any other actions
  const handleClick = () => {
    closeDropdown(); 
  };

  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      onClick={handleClick} // Handle click event
    >
      {text}
    </a>
  );
};

export default ProfileMenu;
