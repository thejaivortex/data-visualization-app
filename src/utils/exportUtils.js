import Plotly from 'plotly.js-dist-min';

export function exportChartAsPNG(chartElementId = 'chart') {
  const chartElement = document.getElementById(chartElementId);
  
  if (chartElement) {
    return Plotly.toImage(chartElement, {
      format: 'png',
      width: 800,
      height: 600,
      scale: 2
    });
  } else {
    return Promise.reject(new Error('Chart element not found'));
  }
}

export function downloadChart(filename = 'chart-export.png') {
  return exportChartAsPNG()
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return dataUrl;
    });
}
