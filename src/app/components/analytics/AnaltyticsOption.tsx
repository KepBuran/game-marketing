import React from 'react';

interface AnalyticsOptionProps {
  options: string[];
}

const AnalyticsOption: React.FC<AnalyticsOptionProps> = ({ options }) => {
  return (
    <div>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AnalyticsOption;
