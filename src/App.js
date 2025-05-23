import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import VisualizationPanel from './components/VisualizationPanel';
import './styles/App.css';

function App() {
  const [data, setData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const handleDataUpload = (parsedData) => {
    setData(parsedData);
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  return (
    <div className="app">
      <header>
        <h1>Data Visualization Tool</h1>
        <div className="project-description">
          <p>
            📊 Transform your CSV data into interactive visualizations! Upload your dataset and 
            create beautiful bar charts or line charts with just a few clicks. Export your 
            charts as high-quality PNG images for presentations and reports. 💾
          </p>
          <p className="features">
            📁 CSV Upload • 📈 Interactive Charts • 🖼️ PNG Export • 📱 Responsive Design
          </p>
        </div>
      </header>
      <main>
        <FileUploader onDataUpload={handleDataUpload} />
        {data && (
          <VisualizationPanel
            data={data}
            chartType={chartType}
            onChartTypeChange={handleChartTypeChange}
          />
        )}
      </main>
    </div>
  );
}

export default App;
