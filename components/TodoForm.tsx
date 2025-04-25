'use client';

import { useState } from 'react';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && !isSubmitting) {
      setIsSubmitting(true);
      await onAdd(title.trim());
      setTitle('');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="group">
      <div className="relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                   focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300
                   placeholder-gray-400 transition-all duration-200"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" 
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
        <button
          type="submit"
          disabled={!title.trim() || isSubmitting}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 
                   bg-primary-500 text-white rounded-lg
                   hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 text-sm font-medium"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Adding...
            </span>
          ) : (
            'Add Task'
          )}
        </button>
      </div>
    </form>
  );
} 