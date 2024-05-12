import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routs = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "about", name: "About" },
    { id: 3, path: "services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <>
      <div className="md:flex justify-center">
        <button className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <ImCross /> : <TiThMenuOutline />}
        </button>
        <ul
          className={`md:flex absolute md:static duration-1000 bg-white md:bg-base-100 px-5 rounded-lg text-black md:text-white   ${
            open ? "top-8" : "-top-60"
          }`}
        >
          {routs.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
