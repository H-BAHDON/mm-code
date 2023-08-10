import { useState } from "react";


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
      <div className="choose-theme container">
        <div className="mb-3">
          <label className="form-label">
            Theme:
            <select
              className="form-select form-select-sm"
              name="selectedTheme"
              onClick={(e) => setTheme(e.target.value)}
            >
              {themesOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Font size:
            <select
              className="form-select form-select-sm"
              name="selectFontSize"
              onClick={(e) => setFontSize(Number(e.target.value))}
            >
              {fontSizeValues.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    );
}

export default ThemeSelector;