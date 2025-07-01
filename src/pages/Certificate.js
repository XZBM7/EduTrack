import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Certificate.css';

const Certificate = () => {
    const location = useLocation();
    const { fullName, completionDate, score, courseId } = location.state || {};

    // Save certificate data to localStorage
    React.useEffect(() => {
        if (fullName && completionDate && score && courseId) {
            const certificateData = {
                id: Date.now(),
                fullName,
                completionDate,
                score,
                courseId,
                courseName: "Software Engineering Master Course",
                dateEarned: new Date().toISOString()
            };

            // Save to certificates array
            const existingCertificates = JSON.parse(localStorage.getItem('certificates')) || [];
            localStorage.setItem(
                'certificates',
                JSON.stringify([...existingCertificates, certificateData])
            );

            // Update completedLectures
            const completedLectures = JSON.parse(localStorage.getItem('completedLectures')) || [];
            const isCourseCompleted = completedLectures.some(lecture => lecture.courseId === courseId);

            if (!isCourseCompleted) {
                localStorage.setItem(
                    'completedLectures',
                    JSON.stringify([...completedLectures, {
                        courseId,
                        courseName: certificateData.courseName,
                        dateEarned: certificateData.dateEarned
                    }])
                );
            }
        }
    }, [fullName, completionDate, score, courseId]);

    const handleDownloadHTML = () => {
        const element = document.querySelector('.certificate');
        const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;700&display=swap');
            body { margin: 0; padding: 0; }
            .certificate-container {
              width: 1000px;
              height: 700px;
              background: #f9f4e8;
              border: 20px solid #d4af37;
              padding: 50px;
              text-align: center;
              font-family: 'Montserrat', sans-serif;
              position: relative;
            }
            .certificate-title {
              font-family: 'Playfair Display', serif;
              font-size: 48px;
              color: #2c3e50;
              margin-bottom: 20px;
            }
            .certificate-subtitle {
              font-size: 24px;
              color: #7f8c8d;
              margin-bottom: 40px;
            }
            .certificate-body {
              margin: 40px 0;
            }
            .certificate-name {
              font-size: 36px;
              font-weight: bold;
              color: #2c3e50;
              margin: 30px 0;
              padding: 10px;
              border-bottom: 2px solid #d4af37;
              display: inline-block;
            }
            .certificate-text {
              font-size: 20px;
              margin: 20px 0;
              line-height: 1.6;
            }
            .certificate-details {
              display: flex;
              justify-content: space-between;
              margin-top: 60px;
            }
            .certificate-seal {
              position: absolute;
              bottom: 50px;
              right: 80px;
              width: 120px;
              opacity: 0.8;
            }
            .certificate-border {
              position: absolute;
              top: 20px;
              left: 20px;
              right: 20px;
              bottom: 20px;
              border: 2px solid #d4af37;
              pointer-events: none;
            }
          </style>
        </head>
        <body>
          ${document.querySelector('.certificate-container').outerHTML}
        </body>
      </html>
    `;

        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fullName.replace(/\s+/g, '_')}_Certificate.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleDownloadPDF = async () => {
        try {
            const { jsPDF } = await import('jspdf');
            const { default: html2canvas } = await import('html2canvas');

            const element = document.querySelector('.certificate-container');
            if (!element) {
                throw new Error('Certificate element not found');
            }

            // زيادة الجودة والتأكد من أن العنصر مرئي
            const canvas = await html2canvas(element, {
                scale: 2,
                logging: true,
                useCORS: true,
                allowTaint: true
            });

            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new jsPDF('l', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // حساب الأبعاد للحفاظ على التناسب
            const imgRatio = canvas.width / canvas.height;
            let imgWidth = pdfWidth;
            let imgHeight = pdfHeight;

            if (imgRatio > 1) {
                imgHeight = pdfWidth / imgRatio;
            } else {
                imgWidth = pdfHeight * imgRatio;
            }

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`${fullName.replace(/\s+/g, '_')}_Certificate.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again or use HTML download.');
        }
    };
    const handlePrint = () => {
        window.print();
    };

    if (!fullName) {
        return (
            <div className="certificate-error">
                No certificate data found. Please complete the course first.
                <Link to="/my-certificates" className="my-certificates-link">
                    View My Certificates
                </Link>
            </div>
        );
    }

    return (
        <div className="certificate-page">
            <div className="certificate">
                <div className="certificate-container">
                    <div className="certificate-border"></div>
                    <h1 className="certificate-title">Certificate of Completion</h1>
                    <p className="certificate-subtitle">This is to certify that</p>

                    <div className="certificate-body">
                        <div className="certificate-name">{fullName}</div>
                        <p className="certificate-text">
                            has successfully completed the <strong>Software Engineering Master Course</strong>
                        </p>
                        <p className="certificate-text">
                            with a final score of <strong>{score}</strong>
                        </p>
                    </div>

                    <div className="certificate-details">
                        <div className="certificate-date">
                            <p>Date: {completionDate}</p>
                        </div>
                    </div>

                    <img
                        src="https://cdn.pixabay.com/photo/2017/01/31/23/42/decorative-2028039_960_720.png"
                        alt=""
                        className="certificate-seal"
                    />
                </div>
            </div>

            <div className="certificate-actions">
                <button onClick={handleDownloadHTML} className="download-button">
                    Download as HTML
                </button>
                <button onClick={handleDownloadPDF} className="download-button">
                    Download as PDF
                </button>
                <button onClick={handlePrint} className="download-button">
                    Print Certificate
                </button>
            </div>
        </div>
    );
};

export default Certificate;