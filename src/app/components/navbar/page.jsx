"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBer = () => {
  const pathname = usePathname();
  console.log(pathname);
  const navLink = (
    <>
      <li>
        <Link
          className={pathname === "/about" ? "text-red-500" : ""}
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/blogs" ? "text-red-500" : ""}
          href="/blogs"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/products" ? "text-red-500" : ""}
          href="/products"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/about/developers" ? "text-red-500" : ""}
          href="/about/developers"
        >
          {" "}
          Developers
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/dashboard" ? "text-red-500" : ""}
          href="/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/user" ? "text-red-500" : ""}
          href="/users"
        >
          {" "}
          Users
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBer;
