import './styles/App.css'
import './styles/ColorSpans.css'
import AboutSlide from './components/AboutSlide'

import backIcon from './assets/icons/back.png'
import nextIcon from './assets/icons/next.png'
import Header from './components/Header'

import { useState } from 'react'
import Project from './components/Project'

const NUM_PROJECTS = 2;


function App() {

  const [pageIndex, setPageIndex] = useState<number>(0);

  function prevPage() {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }

  function nextPage() {
    if (pageIndex < NUM_PROJECTS) {
      setPageIndex(pageIndex + 1);
    }
  }

  let slideBoxContent;

  switch (pageIndex) {
    case 0:
      slideBoxContent = ( <AboutSlide /> )
      break;
    default:
      slideBoxContent = ( <Project pageIndex={pageIndex} /> )
      break;
  }

  return (
    <main className="full-page">
      <div className="main-column">
        <Header />
        <div className="carousel-container">
          <div className="button-area">
            <div className="button-circle" onClick={prevPage}>
              <img src={backIcon}/>
            </div>
          </div>
          <div className="slide-box">
            {slideBoxContent}
          </div>
          <div className="button-area">
            <div className="button-circle" onClick={nextPage}>
              <img src={nextIcon}/>
            </div>
          </div>
        </div>
        <div className="book-placeholder">.</div>
      </div>

    </main>
  )
}

export default App
