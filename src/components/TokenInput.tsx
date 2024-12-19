import { useState } from 'react';
import { useConfigStore } from '../store/configStore';
import { Key } from 'lucide-react';
import React from 'react';

const TokenInput: React.FC = () => {
  const { githubToken, setGithubToken } = useConfigStore();
  const [token, setToken] = useState('');
  const [isEditing, setIsEditing] = useState(!githubToken);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGithubToken(token);
    setIsEditing(false);
  };

  if (!isEditing && githubToken) {
    return (
      <div className="flex items-center gap-2">
        <Key size={16} className="text-green-500" />
        <span className="text-sm text-light-text dark:text-gray-300">Token Active</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="password"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter GitHub token"
        className="px-2 py-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <button
        type="submit"
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default TokenInput;