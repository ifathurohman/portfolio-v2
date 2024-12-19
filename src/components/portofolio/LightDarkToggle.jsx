import { useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useThemeStore } from '../../store/themeStore';

/**
 * Represents a light/dark mode toggle button component.
 *
 * @component
 */

const LightDarkToggle = () => {
  // Access the Zustand store's state and actions
  const { isDark, toggleTheme } = useThemeStore(state => ({
    isDark: !state.isDark,
    toggleTheme: state.toggleTheme,
  }));

  // Apply the selected mode's colors using CSS custom properties
  useEffect(() => {
    const colors = isDark
      ? {
          // Dark Colors
          "--bg-color": "#131a22",
          "--bg2-color": "#75abef19",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#e47911",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#999999",
          "--grey": "#9f9f9f76",
        }
      : {
          // Light Colors
          "--bg-color": "#181616",
          "--bg2-color": "#121212",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#ea5b5c",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#9f9f9f",
          "--grey": "#9f9f9f76",
        };

    // Apply the CSS properties
    for (const property in colors) {
      const value = colors[property];
      document.documentElement.style.setProperty(property, value);
    }
  }, [isDark]);

  return (
    <button className="toggleMode" onClick={toggleTheme}>
      {isDark ? (
        <MdDarkMode className="toggleIcon" />
      ) : (
        <CiLight className="toggleIcon" />
      )}
    </button>
  );
};

export default LightDarkToggle;
