import React from 'react';
import { Calendar } from 'lucide-react';

interface EmptyEventsStateProps {
  message?: string;
}

export default function EmptyEvents({ 
  message = "No events found"
}: EmptyEventsStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <Calendar className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
}