import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import '../styles/PDFViewerPage.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewerPage = ({ pdfUrl, title, description }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.25, 2.5));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
  };

  return (
    <div className="pdf-viewer-container">
      <h1 className="page-title">{title || 'PDF Viewer'}</h1>
      
      {pdfUrl ? (
        <div className="pdf-content">
          {description && <p className="pdf-description">{description}</p>}
          
          <div className="pdf-controls">
            <button 
              onClick={() => changePage(-1)} 
              disabled={pageNumber <= 1}
              className="control-button"
            >
              Previous
            </button>
            <span className="page-info">
              Page {pageNumber} of {numPages || '--'}
            </span>
            <button 
              onClick={() => changePage(1)} 
              disabled={pageNumber >= (numPages || 0)}
              className="control-button"
            >
              Next
            </button>
            <button onClick={zoomIn} className="control-button">Zoom In (+)</button>
            <button onClick={zoomOut} className="control-button">Zoom Out (-)</button>
            <a 
              href={pdfUrl} 
              download 
              className="download-button"
            >
              Download PDF
            </a>
          </div>

          <div className="pdf-document-container">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="loading-message">Loading PDF...</div>}
              error={<div className="error-message">Failed to load PDF</div>}
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
      ) : (
        <div className="no-content">
          <div className="no-content-icon">📄</div>
          <h2>No PDF available</h2>
          <p>Please check back later or contact support</p>
        </div>
      )}
    </div>
  );
};

export default PDFViewerPage;