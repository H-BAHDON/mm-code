import { useState } from "react";
import "./themeSelector.css";


 function ThemeSelector({setTheme, setFontSize}) {
    
    const themesOptions = [
      "monokai",
      "github",
      "tomorrow",
      "kuroir",
      "twilight",
      "xcode",
      "textmate",
      "solarized_dark",
      "solarized_light",
      "terminal",
    ];

    const fontSizeValues = [12, 14, 16, 17, 18, 20, 24]

    return (
      <div className="choose-theme">
        <label className="">
          Theme:
          <select name="selectedTheme" onClick={e => setTheme(e.target.value)}>
            {themesOptions.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Font size:
          <select name="selectFontSize" onClick={e => setFontSize(Number(e.target.value))}>
            {fontSizeValues.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    );
}

export default ThemeSelector;