"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
  const TABS = ["Home", "Work", "About", "Contact"];
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  return (
    <div className="inline-flex uppercase gap-10 bg-white px-5 py-3 text-xl rounded-full text-black fixed bottom-10 left-1/2 -translate-x-1/2 font-fk-display font-medium shadow-lg z-10 items-center">
      {TABS.map((t, i) => (
        <div
          onClick={() => setSelectedTab(t)}
          key={i}
          className="relative px-8 py-2 cursor-pointer"
        >
          {selectedTab === t && (
            <motion.div layoutId="current-tab" className="absolute inset-0 rounded-full bg-black" />
          )}

          <span className={`relative ${selectedTab === t ? "text-white" : "text-black"} z-50`}>{t}</span>
        </div>
      ))}
    </div>
  );
};
