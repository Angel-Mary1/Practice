import React, { useState } from 'react';
import './App.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPdfFile(reader.result);
      };
    } else {
      console.log('Select your file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type='file' className='form-control' onChange={handleChange} />
        <button type='submit' className='btn btn-primary'>
          View Pdf
        </button>
      </form>
      <div className='pdf-container'>
        {viewPdf ? (
          <div>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
              <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        ) : (
          <div>No pdf file selected</div>
        )}
      </div>
    </div>
  );
}

export default App;
