import { motion, AnimatePresence } from 'framer-motion';

import './styles/App.css'
import './styles/ColorSpans.css'
import AboutSlide from './components/AboutSlide'

import backIcon from './assets/icons/back.png'
import nextIcon from './assets/icons/next.png'
import Header from './components/Header'

import { useState } from 'react'
import Project from './components/Project'

// ANIMATIONS
const slideVariants = {
  // Incoming component: comes from Right (+1) or Left (-1)
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  // Active component: sits in the center
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  // Outgoing component: goes to Left (-1) or Right (+1)
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

// const swipeTransition = {
//   x: { type: "spring", stiffness: 300, damping: 30 },
//   opacity: { duration: 0.2 }
// };
// END ANIMATIONS

function App() {

  const [[pageIndex, direction], setPageIndex] = useState<[number, number]>([0, 0]);

  const slides = [
    { id: 'about', component: <AboutSlide /> },
    { id: 'project0', component: <Project projectIndex={0}  /> },
    { id: 'project1', component: <Project projectIndex={1} /> }
  ]

  function changePage(direction: number) {
    if (pageIndex + direction >= slides.length || pageIndex + direction < 0) {
      return;
    }
    setPageIndex([pageIndex + direction, direction])
  }

  function buttonDisplayToggle(icon: string) {
    if (icon == "back") {

      if (pageIndex <= 0) {
        return
      }
      return (
        <div className="button-circle" onClick={()=>{changePage(-1)}}>
          <img src={backIcon}/>
        </ div>
      )
    }

    else if (icon == "next") {

      if (pageIndex >= slides.length - 1) {
        return
      }
      return (
        <div className="button-circle" onClick={()=>{changePage(1)}}>
          <img src={nextIcon}/>
        </ div>
      )
    }
  }

  return (
    <main className="full-page">
      <div className="main-column">
        <Header />
        <div className="carousel-container">
          <div className="button-area">
            {buttonDisplayToggle("back")}
          </div>
          <div className="slide-box">
              <AnimatePresence initial={false} custom={direction} >
                <motion.div
                  key={slides[pageIndex].id}           

                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={
                    {
                      x: { type: "spring", stiffness: 400, damping: 30 },
                      opacity: { duration: 0.2 }
                    }
                  }
                  
                  className="motion-container"
                >
                  <div className="animation-shell">
                    {slides[pageIndex].component}
                  </div>
                </motion.div>
              </AnimatePresence>

          </div>
          <div className="button-area">
            {buttonDisplayToggle("next")}
          </div>
        </div>
        <div className="book-placeholder"> </div>
      </div>

    </main>
  )
}

export default App
