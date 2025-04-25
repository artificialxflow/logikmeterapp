'use client';

import { useState } from 'react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ id, title, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`group px-4 py-3 first:pt-0 last:pb-0 transition-all duration-200
                    ${completed ? 'opacity-75' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center min-w-0 flex-1">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
              className="w-5 h-5 border-2 rounded-md text-primary-500 
                       focus:ring-2 focus:ring-primary-200 focus:ring-offset-2
                       cursor-pointer transition-all duration-200
                       border-gray-300"
            />
            <div className={`absolute h-0.5 bg-gray-300 transition-all duration-300
                           ${completed ? 'w-full' : 'w-0'}`} 
                 style={{ left: '24px' }} />
          </div>
          <span className={`ml-3 text-gray-900 truncate transition-all duration-200
                          ${completed ? 'text-gray-400 line-through' : ''}`}>
            {title}
          </span>
        </div>
        <button
          onClick={() => onDelete(id)}
          className="opacity-0 group-hover:opacity-100 focus:opacity-100
                   px-2 py-1 text-sm text-gray-400 hover:text-danger-500
                   rounded focus:outline-none focus:ring-2 focus:ring-danger-200
                   transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
} 