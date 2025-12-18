"use client";

import { Loader2 } from "lucide-react";
import { smoothScroll } from "@/utlis/smoothScroll";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EVENT_TYPES } from "@/constants/eventTypes";

interface EventTypeFilterProps {
  onFilterChange: (eventType: string | null) => void;
  onSearchChange: (value: string) => void;
  selectedType: string | null;
  searchValue: string;
  isSearching?: boolean;
}

export default function EventTypeFilter({
  onFilterChange,
  selectedType,
  onSearchChange,
  searchValue,
  isSearching = false,
}: EventTypeFilterProps) {
  return (
    <div className="container pt-8 md:pt-16">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">

        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">

          {/* Search */}
          <div className="relative w-full sm:w-auto order-1 sm:order-2">
            <input
              type="search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search events..."
              className="w-full sm:w-[250px] border border-(--west-bg-secondary) rounded-4xl px-5 py-3 pr-10 text-md focus:outline-none"
            />
            {isSearching && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
              </div>
            )}
          </div>

          {/* Filter */}
          <div className="w-full sm:w-[260px] order-2 sm:order-1">
            <Select
              value={selectedType ?? "__all__"}
              onValueChange={(val) => onFilterChange(val === "__all__" ? null : val)}
            >
              <SelectTrigger className="w-full min-h-12 rounded-4xl px-4 border-teal-700 bg-(--west-bg) text-teal-900 focus:ring-0 data-placeholder-shown:text-teal-500">
                <SelectValue placeholder="EVENT TYPES" />
              </SelectTrigger>

              <SelectContent className="rounded-2xl bg-(--west-bg) border-teal-200 shadow-xl animate-in fade-in zoom-in-95">
                <SelectItem value="__all__" className="italic text-teal-600">
                  EVENT TYPES
                </SelectItem>

                <div className="h-px bg-teal-100 my-1" />

                {EVENT_TYPES.map((type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                    className="cursor-pointer text-teal-900 hover:bg-teal-100 data-[state=checked]:bg-teal-200"
                  >
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <button
          onClick={() => smoothScroll("past-events", 1000 , 30)}
          className="bg-(--west-bg-secondary) text-(--west-bg) rounded-3xl px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
        >
          SHOW PAST EVENTS
        </button>
      </div>
    </div>
  );
}
