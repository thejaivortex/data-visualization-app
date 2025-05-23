import React from 'react';
import '../styles/components/ChartSelector.css';

function ChartSelector({ chartType, onChartTypeChange }) {
  return (
    <div className="chart-selector">
      <label className="chart-selector-label">Chart Type:</label>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${chartType === 'bar' ? 'active' : ''}`}
          onClick={() => onChartTypeChange('bar')}
        >
          Bar Chart
        </button>
        <button
          className={`toggle-button ${chartType === 'line' ? 'active' : ''}`}
          onClick={() => onChartTypeChange('line')}
        >
          Line Chart
        </button>
      </div>
    </div>
  );
}

export default ChartSelector;
