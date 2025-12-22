"use client";

import { useEffect, useState } from "react";
import { EVENT_TYPES, SOLUTION_TYPES } from "@/constants/eventTypes";

interface AreaOfInterestDropdownProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
}

type Category = "events" | "workspace" | null;

export default function AreaOfInterestDropdown({
  value,
  onChange,
  disabled = false,
  placeholder = "SELECT AREA OF INTEREST",
  label,
  showLabel = false,
}: AreaOfInterestDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<Category>(null);
  const [activeCategory, setActiveCategory] = useState<Category>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getDisplayValue = () => {
    if (!value) return placeholder;

    const event = EVENT_TYPES.find((t) => t.value === value);
    if (event) return event.label;

    const solution = SOLUTION_TYPES.find((t) => t.value === value);
    if (solution) return solution.label;

    if (value === "other") return "Other";

    return placeholder;
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setHoveredCategory(null);
    setActiveCategory(null);
  };

  const currentCategory = isMobile ? activeCategory : hoveredCategory;

  return (
    <div className="relative w-full">
      {showLabel && label && (
        <label className="block text-sm mb-2 text-(--west-bg-secondary)/60">
          {label}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((v) => !v)}
        className="w-full rounded-3xl min-h-[45px] px-4 bg-(--west-bg) border-2 border-black flex items-center justify-between text-left">
        <span className={!value ? "text-black/50" : ""}>
          {getDisplayValue()}
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute z-20 mt-2 w-full md:w-auto rounded-2xl bg-(--west-bg) border-2 border-slate-200 shadow-xl">
            <div className="flex flex-col lg:flex-row">
              {/* Main Menu */}
              <div className="w-full md:w-[180px] py-2 md:border-r border-slate-200">
                <div
                  onMouseEnter={
                    !isMobile ? () => setHoveredCategory("events") : undefined
                  }
                  onClick={
                    isMobile
                      ? () =>
                          setActiveCategory((c) =>
                            c === "events" ? null : "events"
                          )
                      : undefined
                  }
                  className={`px-4 py-3 cursor-pointer ${
                    currentCategory === "events"
                      ? "bg-slate-100 font-medium"
                      : "hover:bg-slate-50"
                  }`}>
                  Events
                </div>

                <div
                  onMouseEnter={
                    !isMobile ? () => setHoveredCategory("workspace") : undefined
                  }
                  onClick={
                    isMobile
                      ? () =>
                          setActiveCategory((c) =>
                            c === "workspace" ? null : "workspace"
                          )
                      : undefined
                  }
                  className={`px-4 py-3 cursor-pointer ${
                    currentCategory === "workspace"
                      ? "bg-slate-100 font-medium"
                      : "hover:bg-slate-50"
                  }`}>
                  Workspace
                </div>
                <div
                  onClick={() => handleSelect("other")}
                  onMouseEnter={() => setHoveredCategory(null)}
                  className="px-4 py-3 cursor-pointer hover:bg-slate-50">
                  Other
                </div>
              </div>

              {currentCategory && (
                <div
                  className={`py-2 ${
                    isMobile
                      ? "w-full border-t border-slate-200"
                      : "w-[220px]"
                  }`}
                >
                  {(currentCategory === "events"
                    ? EVENT_TYPES
                    : SOLUTION_TYPES
                  ).map((item) => (
                    <div
                      key={item.value}
                      onClick={() => handleSelect(item.value)}
                      className={`px-4 py-3 cursor-pointer hover:bg-slate-100 ${
                        isMobile ? "pl-6" : ""
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </>
      )}
    </div>
  );
}
