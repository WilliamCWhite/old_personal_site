import './styles/App.css'
import './styles/ColorSpans.css'
import AboutSlide from './components/AboutSlide'

import backIcon from './assets/icons/back.png'
import nextIcon from './assets/icons/next.png'
import Header from './components/Header'


function App() {
   

  return (
    <main className="full-page">
      <div className="main-column">
        <Header />
        <div className="carousel-container">
          <div className="button-area">
            <div className="button-circle">
              <img src={backIcon}/>
            </div>
          </div>
          <div className="slide-box">
            <AboutSlide />
          </div>
          <div className="button-area">
            <div className="button-circle">
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
