import React from "react";
import Link from "next/link";


const NavLinks = (props: any) => {
  return (
    <ul className="nav-links">
      <li>
        <Link href={"/"}>HOME</Link>
      </li>
      <li>
        <Link href={"/"}>POKEDEX</Link>
      </li>
      <li>
        <Link href={"/"}>ABOUT</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
