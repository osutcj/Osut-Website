"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-logo">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/images/OSUT alb.png" alt="OSUT Logo" fetchPriority="high" />
          </Link>
        </div>

        <div className="nav-right">
          <ul className="nav-menu">
            <li className="dropdown">
              <Link href="#">
                Despre <span className="dropdown-icon">▼</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/despre-noi/">Despre noi</Link>
                </li>
                <li>
                  <Link href="/biroul-de-conducere/">Biroul de Conducere</Link>
                </li>
                <li>
                  <Link href="/biroul-de-conducere-extins/">Biroul de Conducere Extins</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                Educațional <span className="dropdown-icon">▼</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/cdos/">Documente Utile</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/studenti-reprezentanti/">Studenți Reprezentanți</Link>
            </li>
            {/* <li><Link href="/contact/">Oportunități</Link></li> */}
            <li>
              <Link href="/donat/">Donează</Link>
            </li>
            <li>
              <Link href="/green/">Sustenabilitate</Link>
            </li>
            <li>
              <a href="https://osutcluj.pixieset.com/" target="_blank" rel="noopener noreferrer">
                Galerie
              </a>
            </li>
          </ul>
          <Link href="/butonul-rosu/" className="red-button">
            Butonul ROȘU
          </Link>
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`} id="mobileSidebar">
        <span className="close-btn" onClick={toggleSidebar}>
          &times;
        </span>
        <Link href="/despre-noi/" onClick={toggleSidebar}>
          Despre noi
        </Link>
        <Link href="/biroul-de-conducere/" onClick={toggleSidebar}>
          Biroul de Conducere
        </Link>
        <Link href="/biroul-de-conducere-extins/" onClick={toggleSidebar}>
          Biroul de Conducere Extins
        </Link>
        <Link href="/cdos/" onClick={toggleSidebar}>
          Documente utile
        </Link>
        <Link href="/studenti-reprezentanti/" onClick={toggleSidebar}>Studenți Reprezentanți</Link>
        <Link href="/donat/" onClick={toggleSidebar}>
          Donează
        </Link>
        <Link href="/green/" onClick={toggleSidebar}>
          Sustenabilitate
        </Link>
        <a href="https://osutcluj.pixieset.com/" target="_blank" rel="noopener noreferrer" onClick={toggleSidebar}>
          Galerie
        </a>
        <Link href="/butonul-rosu/" className="red-button" onClick={toggleSidebar}>
          Butonul ROȘU
        </Link>
      </div>
    </>
  );
}
