import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';

function BarChart({ data }) {
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
          type: 'bar',
          name: 'Sales',
          marker: { color: 'rgb(75, 192, 192)' }
        },
        {
          x: xValues,
          y: yValuesExpenses,
          type: 'bar',
          name: 'Expenses',
          marker: { color: 'rgb(255, 99, 132)' }
        }
      ];

      const layout = {
        title: 'Bar Chart Visualization',
        xaxis: { title: keys[0] },
        yaxis: { title: 'Value', rangemode: 'tozero' },
        barmode: 'group',
        responsive: true
      };

      Plotly.newPlot('chart', plotData, layout, {responsive: true});
    }
  }, [data]);

  return <div id="chart" style={{ width: '100%', height: '100%' }}></div>;
}

export default BarChart;
