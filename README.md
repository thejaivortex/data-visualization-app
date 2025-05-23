# Data Visualization App

A React-based web application that allows users to upload CSV files and create interactive visualizations with export functionality.

## Features

- 📊 **CSV File Upload** - Upload and parse CSV files with validation
- 📈 **Interactive Charts** - Bar charts and line charts powered by Plotly.js
- 🔄 **Chart Toggle** - Switch between chart types with custom toggle buttons
- 💾 **PNG Export** - Export charts as high-quality PNG images
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Data Validation** - Proper error handling and file format validation

## Screenshots

### Application Overview
Application Demo(image.png)

### File Upload Interface
File Upload(Screenshot 2025-05-23 213952.png)

### Bar Chart Visualization
Bar Chart(Screenshot 2025-05-23 214549.png)

### Line Chart Visualization
Line Chart(Screenshot 2025-05-23 214454.png)

### Demonstration Link 
Link - https://drive.google.com/file/d/18PLe_kSdjnlj7ZNuXmnvxCgYBOr53TVT/view?usp=drive_link

## Technology Stack

- **Frontend Framework:** React.js
- **Charts:** Plotly.js
- **CSV Parsing:** PapaParse
- **Styling:** CSS3 with Flexbox
- **Build Tool:** Create React App

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation & Setup

1. **Clone the repository**
git clone https://github.com/thejaivortex/data-visualization-app.git
cd data-visualization-app

2. **Install dependencies**

npm install


4. **Open your browser**
- The application will automatically open at `http://localhost:3000`
- If it doesn't open automatically, navigate to the URL manually

## Usage Instructions

1. **Upload CSV File**
- Click the "Choose CSV File" button
- Select a CSV file with at least 2 columns
- The first column will be used for x-axis labels
- Subsequent columns will be used for data series

2. **View Visualizations**
- Use the toggle buttons to switch between Bar Chart and Line Chart
- Interact with charts using Plotly's built-in controls (zoom, pan, hover)

3. **Export Charts**
- Click "Export as PNG" to download the current chart as an image
- The exported image will be saved to your Downloads folder

## Sample Data

You can test the application with this sample CSV data:

Month,Sales,Expenses
Jan,200,150
Feb,220,160
Mar,250,170
Apr,270,180
May,300,190
Jun,320,200
Jul,310,210
Aug,330,220
Sep,350,230
Oct,370,240
Nov,390,250
Dec,420,260


## Project Structure

ata-visualization-app/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── FileUploader.js
│ │ ├── VisualizationPanel.js
│ │ ├── BarChart.js
│ │ ├── LineChart.js
│ │ ├── ExportButton.js
│ │ └── ChartSelector.js
│ ├── utils/
│ │ ├── csvParser.js
│ │ └── exportUtils.js
│ ├── styles/
│ │ ├── App.css
│ │ └── components/
│ ├── App.js
│ ├── index.js
│ └── index.css
├── package.json
└── README.md


## Dependencies

- `react`: Frontend framework
- `plotly.js-dist-min`: Chart visualization library
- `papaparse`: CSV parsing utility

## Contact

Created by Jai Balaje S - Frontend Developer Intern Application

---

**Note:** This project was created as part of a frontend development internship application.
