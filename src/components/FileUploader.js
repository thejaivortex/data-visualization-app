import React, { useRef, useState } from 'react';
import { parseCSV, validateCSVData } from '../utils/csvParser';
import '../styles/components/FileUploader.css';

function FileUploader({ onDataUpload }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      
      // Check file extension
      if (file.name.endsWith('.csv') || file.type === 'text/csv' || file.type === 'application/vnd.ms-excel') {
        parseCSV(
          file,
          (data) => {
            console.log('Parsed data:', data);
            const validation = validateCSVData(data);
            if (validation.valid) {
              onDataUpload(data);
            } else {
              alert(`Invalid CSV: ${validation.message}`);
            }
          },
          (error) => {
            console.error('Detailed error:', error);
            alert(`Error parsing CSV file: ${error.message || 'Unknown error'}. Please check the file format.`);
          }
        );
      } else {
        alert('Please upload a valid CSV file (.csv extension).');
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="file-uploader">
      <h2>Upload Dataset</h2>
      <div className="upload-container">
        <input
          type="file"
          accept=".csv,text/csv,application/vnd.ms-excel"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <div className="upload-section">
          <button 
            className="upload-button" 
            onClick={handleButtonClick}
          >
            Choose CSV File
          </button>
          {fileName && (
            <div className="file-name-display">
              <span className="file-name">Selected: {fileName}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
