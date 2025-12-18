"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EVENT_TYPES } from "@/constants/eventTypes";

interface EventTypeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
}

export default function EventTypeDropdown({
  value,
  onChange,
  disabled = false,
  placeholder = "SELECT EVENT TYPE",
  label,
  showLabel = false,
}: EventTypeDropdownProps) {

  const triggerId = "event-type-select";
  return (
    <div className="w-full">
      {showLabel && label && (
        <label 
        htmlFor={triggerId}
        className="block text-sm font-medium text-(--west-bg-secondary)/60 mb-2">
          {label}
        </label>
      )}
 
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full rounded-3xl min-h-[45px] px-4 bg-(--west-bg) border-2 border-black text-slate-900 data-placeholder-shown:text-black/50 focus:border-black focus:ring-0">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

       <SelectContent
            className="mt-12 rounded-2xl bg-(--west-bg) border-slate-200 shadow-xl animate-in fade-in zoom-in-95">
            <SelectItem
                value="__all__"
                className="text-slate-900 italic hover:bg-slate-100">
                All event types
            </SelectItem>

            <div className="h-px bg-slate-200 my-1" />

            {EVENT_TYPES.map((type) => (
                <SelectItem
                key={type.value}
                value={type.value}
                className="cursor-pointer text-slate-900 hover:bg-slate-100 data-[state=checked]:bg-slate-200">
                {type.label}
            </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
