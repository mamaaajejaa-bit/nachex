"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const VIDEO_URL = "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Nacho+VSL.mp4"
const POSTER_URL = "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Nacho+VSL.jpg"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [isMuted, setIsMuted] = useState(true) // Muted by default for autoplay
  const videoRef = useRef<HTMLVideoElement>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Autoplay with 0.5s delay
  useEffect(() => {
    const autoplayTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.log('Autoplay prevented:', error)
          // Autoplay was prevented, user will need to click play
        })
      }
    }, 500)

    return () => clearTimeout(autoplayTimer)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      hideTimeoutRef.current = setTimeout(() => {
        setShowButton(false)
      }, 500)
    } else {
      setShowButton(true)
    }

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleInteraction = () => {
    if (isPlaying) {
      setShowButton(true)
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
      hideTimeoutRef.current = setTimeout(() => {
        setShowButton(false)
      }, 500)
    }
  }

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-emerald-100/80 bg-slate-900 animate-in fade-in duration-700">
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster={POSTER_URL}
              className="w-full h-full object-cover"
              playsInline
              muted={isMuted}
              preload="auto"
              onEnded={() => setIsPlaying(false)}
            />

            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
              onMouseMove={handleInteraction}
              onTouchStart={handleInteraction}
            >
              <button
                className={`group transition-opacity duration-300 ${showButton ? "opacity-100" : "opacity-0"}`}
                aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40 group-hover:scale-110 group-active:scale-95 transition-all duration-300 group-hover:bg-emerald-500">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="white" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                  )}
                </div>
                {!isPlaying && (
                  <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 m-auto bg-emerald-600/30 rounded-full animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center px-2 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
            ¿Listo para llenar tu agenda de pacientes?
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200 font-semibold hover:scale-105 active:scale-95"
            onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agenda tu llamada GRATIS ahora
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 flex items-center justify-center gap-2 flex-wrap">
            <span>Sin compromiso</span>
            <span className="w-1 h-1 bg-muted-foreground/40 rounded-full" />
            <span>100% gratis</span>
            <span className="w-1 h-1 bg-muted-foreground/40 rounded-full" />
            <span>Solo 15 minutos</span>
          </p>
        </div>
      </div>
    </section>
  )
}
