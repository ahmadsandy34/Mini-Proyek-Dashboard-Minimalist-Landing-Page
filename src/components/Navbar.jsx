import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-amber-400 shadow-md">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-3xl text-white font-bold">
          dsgnr.
        </Link>
      </div>
      <div className="mr-2 lg:mr-4">
        <p className="text-white text-2xl">User</p>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/profile" className="justify-between">Profile</Link>
          </li>
          <li className="text-red-600">
            <a>Logout<i className="bi bi-box-arrow-right text-md"></i></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
