import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';

function LineChart({ data }) {
  useEffect(() => {
    if (data && data.length > 0) {
      // Extract keys from the first row
      const keys = Object.keys(data[0]);
      
      // First column for x-axis (Month)
      const xValues = data.map(item => item[keys[0]]);
      
      // Parse numeric values for Sales and Expenses
      const yValuesSales = data.map(item => parseFloat(item['Sales']) || 0);
      const yValuesExpenses = data.map(item => parseFloat(item['Expenses']) || 0);

      const plotData = [
        {
          x: xValues,
          y: yValuesSales,
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Sales',
          marker: { color: 'rgb(75, 192, 192)' },
          line: { color: 'rgb(75, 192, 192)' }
        },
        {
          x: xValues,
          y: yValuesExpenses,
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Expenses',
          marker: { color: 'rgb(255, 99, 132)' },
          line: { color: 'rgb(255, 99, 132)' }
        }
      ];

      const layout = {
        title: 'Line Chart Visualization',
        xaxis: { title: keys[0] },
        yaxis: { title: 'Value', rangemode: 'tozero' },
        responsive: true
      };

      Plotly.newPlot('chart', plotData, layout, {responsive: true});
    }
  }, [data]);

  return <div id="chart" style={{ width: '100%', height: '100%' }}></div>;
}

export default LineChart;
