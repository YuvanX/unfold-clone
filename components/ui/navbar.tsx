"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
  const TABS = ["Home", "Work", "About", "Contact"];
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  return (
    <div className="inline-flex bg-white px-2 py-2 xl:px-5 xl:py-3 text-[11px] xl:text-xl rounded-full text-black bottom-2 fixed xl:bottom-10  left-1/2 -translate-x-1/2 font-fk-display font-medium shadow-lg z-10 items-center">
      {TABS.map((t, i) => (
        <button
          onClick={() => setSelectedTab(t)}
          key={i}
          className={`relative px-5 py-1.5 xl:px-8 xl:py-2.5 cursor-pointer`}
        >
          {selectedTab === t && (
            <motion.div layoutId="current-tab" className="absolute inset-0 rounded-full bg-black" />
          )}

          <span className={`relative ${selectedTab === t ? "text-white" : "text-black "} z-50 uppercase`}>{t}</span>
        </button>
      ))}
    </div>
  );
};
