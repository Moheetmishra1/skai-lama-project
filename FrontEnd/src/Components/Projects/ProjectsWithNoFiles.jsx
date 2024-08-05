import React from 'react'
import "../../CSS/ProjectsWithNoFiles.css"

function ProjectsWithNoFiles() {
  return (
    <div className='projectswithnofileBox'>
        <span className='projects-no-files-or' >or</span>


        <div className='projectswith-no-files-uploads'>
            
            <svg  className="projectswith-no-files-cloud" width="128" height="86" viewBox="0 0 128 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M103.2 32.4666C99.5733 14.0666 83.4133 0.253296 64 0.253296C48.5867 0.253296 35.2 8.99996 28.5333 21.8C12.48 23.5066 0 37.1066 0 53.5866C0 71.24 14.3467 85.5866 32 85.5866H101.333C116.053 85.5866 128 73.64 128 58.92C128 44.84 117.067 33.4266 103.2 32.4666ZM101.333 74.92H32C20.2133 74.92 10.6667 65.3733 10.6667 53.5866C10.6667 42.6533 18.8267 33.5333 29.6533 32.4133L35.36 31.8266L38.0267 26.76C43.0933 17 53.0133 10.92 64 10.92C77.9733 10.92 90.0267 20.84 92.7467 34.5466L94.3467 42.5466L102.507 43.1333C110.827 43.6666 117.333 50.6533 117.333 58.92C117.333 67.72 110.133 74.92 101.333 74.92ZM42.6667 48.2533H56.2667V64.2533H71.7333V48.2533H85.3333L64 26.92L42.6667 48.2533Z" fill="#7E22CE"/>
            </svg>

        <p className='projectswith-no-files-selectfile'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
            <p className="projectwithnofile-filetype">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
        <div  className='projectwithnofile-selectbutton-outer'>
        <button className='projectwithnofile-selectbutton'><p>Select File</p></button>
        </div>
        </div>

    </div>
  )
}

export default ProjectsWithNoFiles