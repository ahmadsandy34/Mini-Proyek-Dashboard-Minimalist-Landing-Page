import React from "react";
import Home from "./Home";
import Users from "./Users";
import Blog from "./Blog";
import Portolio from "./Portfolio";
import Profile from "./Profile";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          <i className="bi bi-justify"></i>
        </label>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portolio />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-100 text-base-content w-72 p-4 h-full">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-3 py-2 hover:bg-slate-500 hover:text-white rounded-md"
            >
              <i className="bi bi-house-door text-xl"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center space-x-3 py-2 hover:bg-slate-500 hover:text-white rounded-md"
            >
              <i className="bi bi-people text-xl"></i>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="flex items-center space-x-3 py-2 hover:bg-slate-500 hover:text-white rounded-md"
            >
              <i className="bi bi-newspaper text-xl"></i>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="flex items-center space-x-3 py-2 hover:bg-slate-500 hover:text-white rounded-md"
            >
              <i className="bi bi-briefcase text-xl"></i>
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/testimonial"
              className="flex items-center space-x-3 py-2 hover:bg-slate-500 hover:text-white rounded-md"
            >
              <i className="bi bi-stars text-xl"></i>
              <span>Testimonial</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-3 py-2 hover:bg-slate-500 hover:text-white rounded-md"
            >
              <i className="bi bi-telephone text-xl"></i>
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
