"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./Carousel.css"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef(null)
  const timerAnimationRef = useRef(null)

  // Slower transition timing
  const TRANSITION_DURATION = 1000// in milliseconds (slower transition)
  const AUTO_TRANSITION_DELAY = 3000 // 5 seconds between slides

  const professionals = [
    {
      id: 1,
      title: "Manicure",
      description: "It is said that hands are a reflection of how we take care of ourselves.",
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: 2,
      title: "Hairdresser",
      description: "Looking for a new look or simply a fresh new look? Need expert advice to enhance your style?",
      image:
        "https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
      id: 3,
      title: "Barber",
      description:
        "Specialized in men's grooming, our barbers offer precision cuts and traditional shaving techniques.",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Beauty Institute",
      description: "Comprehensive beauty treatments to help you look and feel your best from head to toe.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]

  // Setup auto-transition
  useEffect(() => {
    if (!isPaused) {
      // Reset any existing timer
      resetTimer()

      // Start a new timer
      timerRef.current = setTimeout(() => {
        nextSlide()
      }, AUTO_TRANSITION_DELAY)

      // Reset and restart the timer animation
      if (timerAnimationRef.current) {
        timerAnimationRef.current.style.animation = "none"
        // Force reflow to restart animation
        void timerAnimationRef.current.offsetWidth
        timerAnimationRef.current.style.animation = `timer-circle-animation ${AUTO_TRANSITION_DELAY}ms linear forwards`
      }
    }

    return () => {
      resetTimer()
    }
  }, [currentSlide, isPaused])

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    resetTimer()

    // After animation completes, update the current slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === professionals.length - 1 ? 0 : prev + 1))
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    resetTimer()

    // After animation completes, update the current slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? professionals.length - 1 : prev - 1))
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section className="professionals-carousel">
      <div className="carousel-container">
        <div className="carousel-slides-container">
          {professionals.map((professional, index) => (
            <div
              key={professional.id}
              className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              style={{
                zIndex: index === currentSlide ? 2 : 1,
              }}
            >
              <img src={professional.image || "/placeholder.svg"} alt={professional.title} />
            </div>
          ))}
          {isTransitioning && (
            <div className="carousel-slide incoming">
              <img
                src={professionals[(currentSlide + 1) % professionals.length].image || "/placeholder.svg"}
                alt={professionals[(currentSlide + 1) % professionals.length].title}
              />
            </div>
          )}
        </div>

        <div className="carousel-content">
          <h2 className="carousel-title">
            Discover our Professionals
            <span className="title-underline"></span>
          </h2>

          <div className="professional-info">
            <h3>{professionals[currentSlide].title}</h3>
            <p>{professionals[currentSlide].description}</p>
            <a href="#" className="see-more">
              See more
            </a>
          </div>

          <div className="carousel-controls">
            {/* Previous button without timer */}
            <button
              className="control-button"
              onClick={prevSlide}
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next button with timer */}
            <button
              className="control-button timer-button"
              onClick={nextSlide}
              aria-label="Next slide"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              disabled={isTransitioning}
            >
              <ChevronRight size={20} />
              <svg className="timer-circle" viewBox="0 0 36 36">
                <circle
                  ref={timerAnimationRef}
                  className={`timer-circle-path ${isPaused ? "paused" : ""}`}
                  cx="18"
                  cy="18"
                  r="16"
                  style={{ animationDuration: `${AUTO_TRANSITION_DELAY}ms` }}
                />
              </svg>
            </button>
          </div>

          <div className="slide-indicators">
            {professionals.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? "active" : ""}`}
                onClick={() => {
                  if (!isTransitioning) {
                    resetTimer()
                    setCurrentSlide(index)
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
