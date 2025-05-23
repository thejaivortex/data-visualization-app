import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ChartSelector from './ChartSelector';
import ExportButton from './ExportButton';
import '../styles/components/VisualizationPanel.css';

function VisualizationPanel({ data, chartType, onChartTypeChange }) {
  const chartRef = React.useRef(null);

  return (
    <div className="visualization-panel">
      <div className="controls">
        <ChartSelector
          chartType={chartType}
          onChartTypeChange={onChartTypeChange}
        />
        <ExportButton chartRef={chartRef} />
      </div>

      <div className="chart-container" ref={chartRef}>
        {chartType === 'bar' ? (
          <BarChart data={data} />
        ) : (
          <LineChart data={data} />
        )}
      </div>
    </div>
  );
}

export default VisualizationPanel;
