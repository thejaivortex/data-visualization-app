import Papa from 'papaparse';

export function parseCSV(file, onComplete, onError) {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    delimiter: ',', // Explicitly set delimiter
    encoding: 'UTF-8',
    transformHeader: (header) => {
      return header.trim();
    },
    transform: (value, field) => {
      return value ? value.trim() : '';
    },
    complete: (results) => {
      console.log('Papa Parse Results:', results);
      
      if (results.errors && results.errors.length > 0) {
        console.error('CSV parsing errors:', results.errors);
        // Only fail on critical errors, not warnings
        const criticalErrors = results.errors.filter(error => error.type === 'Delimiter');
        if (criticalErrors.length > 0) {
          onError(new Error(`CSV parsing failed: ${criticalErrors[0].message}`));
          return;
        }
      }
      
      if (!results.data || results.data.length === 0) {
        onError(new Error('No data found in CSV file'));
        return;
      }
      
      // Filter out any empty rows
      const cleanedData = results.data.filter(row => {
        return Object.values(row).some(value => value && value.toString().trim() !== '');
      });
      
      if (cleanedData.length === 0) {
        onError(new Error('No valid data rows found in CSV file'));
        return;
      }
      
      console.log('Cleaned CSV data:', cleanedData);
      console.log('First row structure:', cleanedData[0]);
      console.log('Available columns:', Object.keys(cleanedData[0]));
      
      onComplete(cleanedData);
    },
    error: (error) => {
      console.error('Papa Parse error:', error);
      onError(new Error(`File reading error: ${error.message}`));
    },
  });
}

export function validateCSVData(data) {
  if (!data || data.length === 0) {
    return { valid: false, message: 'No data found in CSV file' };
  }
  
  const firstRow = data[0];
  const columns = Object.keys(firstRow);
  
  if (columns.length < 2) {
    return { valid: false, message: 'CSV must have at least 2 columns' };
  }
  
  return { valid: true, columns: columns };
}
