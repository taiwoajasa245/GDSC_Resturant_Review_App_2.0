import React from 'react';

const BirthdateSelector = ({ month, day, year, onMonthChange, onDayChange, onYearChange }) => {
  return (
    <fieldset className="mb-2 ">
      <ul className="flex flex-wrap gap-2 ">
        <li>
          <select
            className="block w-full p-2 border border-gray-300 rounded"
            value={month}
            onChange={(e) => onMonthChange(e.target.value)}
            id="month"
            name="birthdate_m"
          >
            <option value="">Month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </li>
        <li>
          <select
            className="block w-full p-2 border border-gray-300 rounded"
            value={day}
            onChange={(e) => onDayChange(e.target.value)}
            id="day"
            name="birthdate_d"
          >
            <option value="">Day</option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </li>
        <li>
          <select
            className="block w-full p-2 border border-gray-300 rounded"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            id="year"
            name="birthdate_y"
          >
            <option value="">Year</option>
            {Array.from({ length: 124 }, (_, i) => 2024 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </fieldset>
  );
};

export default BirthdateSelector;
