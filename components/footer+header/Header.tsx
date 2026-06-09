"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
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
          <NextLink href="/" className="relative block h-12 w-32">
            <Image 
              src="/assets/images/images/OSUT alb.webp" 
              alt="OSUT Logo" 
              fill
              sizes="128px"
              priority
              loading="eager"
              className="object-contain"
            />
          </NextLink>
        </div>

        <div className="nav-right">
          <ul className="nav-menu">
            <li className="dropdown">
              <NextLink href="#">
                Despre <span className="dropdown-icon">▼</span>
              </NextLink>
              <ul className="dropdown-menu">
                <li>
                  <NextLink href="/despre-noi/">Despre noi</NextLink>
                </li>
                <li>
                  <NextLink href="/biroul-de-conducere/">Biroul de Conducere</NextLink>
                </li>
                <li>
                  <NextLink href="/biroul-de-conducere-extins/">Biroul de Conducere Extins</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="/educational/">Educațional</NextLink>
            </li>
            <li>
              <NextLink href="/proiecte-si-initiative/">Proiecte și Inițiative</NextLink>
            </li>
            <li>
              <NextLink href="/donat/">Donează</NextLink>
            </li>
            <li>
              <NextLink href="/green/">Sustenabilitate</NextLink>
            </li>
            <li>
              <a href="https://osutcluj.pixieset.com/" target="_blank" rel="noopener noreferrer">
                Galerie
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <NextLink href="/butonul-rosu/" className="red-button">
              Butonul Roșu
            </NextLink>
          </div>
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`} id="mobileSidebar">
        <span className="close-btn" onClick={toggleSidebar}>
          &times;
        </span>
        <NextLink href="/despre-noi/" onClick={toggleSidebar}>
          Despre noi
        </NextLink>
        <NextLink href="/biroul-de-conducere/" onClick={toggleSidebar}>
          Biroul de Conducere
        </NextLink>
        <NextLink href="/biroul-de-conducere-extins/" onClick={toggleSidebar}>
          Biroul de Conducere Extins
        </NextLink>
        <NextLink href="/educational/" onClick={toggleSidebar}>
          Educațional
        </NextLink>
        <NextLink href="/proiecte-si-initiative/" onClick={toggleSidebar}>
          Proiecte și Inițiative
        </NextLink>
        <NextLink href="/donat/" onClick={toggleSidebar}>
          Donează
        </NextLink>
        <NextLink href="/green/" onClick={toggleSidebar}>
          Sustenabilitate
        </NextLink>
        <a href="https://osutcluj.pixieset.com/" target="_blank" rel="noopener noreferrer" onClick={toggleSidebar}>
          Galerie
        </a>
        <div className="flex items-center justify-center my-4">
        </div>
        <NextLink href="/butonul-rosu/" className="red-button" onClick={toggleSidebar}>
          Butonul Roșu
        </NextLink>
      </div>
    </>
  );
}
