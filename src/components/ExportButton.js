import React, { useState } from 'react';
import Plotly from 'plotly.js-dist-min';

function ExportButton({ chartRef }) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    // Add a small delay to ensure chart is fully rendered
    setTimeout(() => {
      const chartElement = document.getElementById('chart');
      
      if (chartElement) {
        Plotly.toImage(chartElement, {
          format: 'png',
          width: 800,
          height: 600,
          scale: 2
        })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'chart-export.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setIsExporting(false);
        })
        .catch((error) => {
          console.error('Error exporting chart:', error);
          alert('Failed to export chart. Please try again.');
          setIsExporting(false);
        });
      } else {
        alert('No chart found to export.');
        setIsExporting(false);
      }
    }, 100);
  };

  return (
    <button 
      className="export-button" 
      onClick={handleExport}
      disabled={isExporting}
    >
      {isExporting ? 'Exporting...' : 'Export as PNG'}
    </button>
  );
}

export default ExportButton;
