import React, { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../styles/PDFViewerPage.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(800);
  const [bookMode, setBookMode] = useState(false);
  const pdfContainerRef = useRef(null);

  const pdfFiles = [
    { name: 'Chapter 1 - Introduction', path: 'pdf/Chapter1_Introduction.pdf' },
    { name: 'Chapter 2 - Big Data & NoSQL', path: 'pdf/Chapter 2 - Big data - No sql.pdf' },
    { name: 'Chapter 3 - Clean Code & SOLID', path: 'pdf/Chapter 3- Clean code & SOLID.pdf' },
    { name: 'Chapter 4 - Microservices', path: 'pdf/Chapter 4 -  Microservices.pdf' },
    { name: 'Chapter 5,6 - Design Patterns', path: 'pdf/Chapter_5,6_Microservices_Design_Patterns_Communication_Patterns….pdf' },
    { name: 'Chapter 7 - OCL + UML', path: 'pdf/chapter 7- OCL + UML.pdf' },
    { name: 'Chapter 8 - AOP & OOP', path: 'pdf/Chapter 8 - AOP & OOP.pdf' },
    { name: 'Chapter 9 - Testing software', path: 'pdf/Chapter 9 - Testing software.pdf' },

  ];

  useEffect(() => {
    const handleResize = () => {
      if (pdfContainerRef.current) {
        const maxWidth = bookMode ? window.innerWidth : 800;
        setContainerWidth(Math.min(pdfContainerRef.current.offsetWidth - 40, maxWidth));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [bookMode]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => Math.max(1, Math.min(prevPageNumber + offset, numPages)));
  }

  function zoomIn() {
    setScale(prevScale => Math.min(prevScale + 0.25, 2));
  }

  function zoomOut() {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
  }

  function resetZoom() {
    setScale(1);
  }

  function toggleBookMode() {
    setBookMode(!bookMode);
    if (!bookMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  function downloadFile() {
    if (!selectedPdf) return;
    const link = document.createElement('a');
    link.href = selectedPdf;
    link.download = selectedPdf.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      changePage(1); 
    }

    if (touchStart - touchEnd < -50) {
      changePage(-1); 
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPdf) return; 
      
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        changePage(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        changePage(-1);
      } else if (e.key === 'Escape' && bookMode) {
        e.preventDefault();
        toggleBookMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [numPages, pageNumber, bookMode, selectedPdf]);

  useEffect(() => {
    if (!bookMode) return;

    const handleClickOutside = (e) => {
      if (pdfContainerRef.current && !pdfContainerRef.current.contains(e.target)) {
        toggleBookMode();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [bookMode]);

  return (
    <div className={`pdf-viewer-container ${bookMode ? 'book-mode-active' : ''}`}>
      <h1>PDF Files Viewer</h1>

      <div className="select-wrapper">
        <select 
          onChange={(e) => {
            setSelectedPdf(e.target.value);
            setPageNumber(1);
            resetZoom();
            if (bookMode) setBookMode(false);
          }}
          value={selectedPdf || ''}
        >
          <option value="">-- Select a file --</option>
          {pdfFiles.map((file, index) => (
            <option key={index} value={file.path}>
              {file.name}
            </option>
          ))}
        </select>
        {selectedPdf && (
          <button onClick={downloadFile} className="download-btn">
            <i className="fas fa-download"></i> Download PDF
          </button>
        )}
      </div>

      {!selectedPdf ? (
        <div className="no-file-selected">
          <p>No file selected. Please choose a PDF file from the dropdown above.</p>
        </div>
      ) : (
        <>
          <div className="controls">
            <div className="zoom-controls">
              <button onClick={zoomOut} disabled={scale <= 0.5} aria-label="Zoom out">
                <i className="fas fa-search-minus"></i>
              </button>
              <span>{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn} disabled={scale >= 2} aria-label="Zoom in">
                <i className="fas fa-search-plus"></i>
              </button>
              <button onClick={resetZoom} aria-label="Reset zoom">
                <i className="fas fa-sync-alt"></i>
              </button>
            </div>
            <div className="page-controls">
              <button 
                onClick={() => changePage(-1)} 
                disabled={pageNumber <= 1}
                className="nav-button prev"
                aria-label="Previous page"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span>Page {pageNumber} of {numPages || '--'}</span>
              <button 
                onClick={() => changePage(1)} 
                disabled={pageNumber >= numPages}
                className="nav-button next"
                aria-label="Next page"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div 
            className="pdf-document" 
            ref={pdfContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Document
              file={selectedPdf}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="loading-message">Loading document...</div>}
              error={<div className="error-message">Error while loading document</div>}
            >
              <Page 
                pageNumber={pageNumber} 
                width={bookMode ? null : containerWidth * scale}
                height={bookMode ? null : undefined}
                scale={bookMode ? scale : 1}
                renderTextLayer={false}
                loading={<div className="loading-message">Loading page {pageNumber}...</div>}
                className={bookMode ? "book-mode-page" : ""}
              />
            </Document>
          </div>
        </>
      )}
    </div>
  );
};

export default PDFViewer;