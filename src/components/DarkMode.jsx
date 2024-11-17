'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';

export default function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = useMemo(() => (theme === 'system' ? systemTheme : theme), [theme, systemTheme]);

  if (!currentTheme) return null; 

  return (
    <div className="flex items-center justify-center p-2">
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer hover:text-amber-500"
          aria-label="Switch to light mode"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer hover:text-amber-500"
          aria-label="Switch to dark mode"
        />
      )}
    </div>
  );
}
