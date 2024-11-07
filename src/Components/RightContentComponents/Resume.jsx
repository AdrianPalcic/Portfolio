import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Resume = () => {

    const handleDownload = () => {
        const pdfURL = 'public/CV_ENG.pdf';

        const link = document.createElement('a');
        link.href = pdfURL;
        link.setAttribute('download', 'CV_ENG.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }

    return (
        <div className="resume content" id="resume">
            <h1>Resume</h1>
            <div className="underline"></div>
            <p>You can download my resume right from here!</p>
            <div className="resumeDownload">
                <button className='buttonDownload' onClick={handleDownload}>
                    <FaDownload className='downloadIcon' />
                    Download PDF
                </button>
            </div>
        </div>
    )
}

export default Resume