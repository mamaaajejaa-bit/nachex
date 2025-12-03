"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const VIDEO_URL = "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Nacho+VSL.mp4"
const POSTER_URL = "/nacho-vsl-preview.jpg"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [isMuted, setIsMuted] = useState(false) // Start unmuted for sound
  const videoRef = useRef<HTMLVideoElement>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    <section className="pb-5 sm:pb-6 md:pb-8 px-3 sm:px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-3 md:border-4 border-emerald-100/80 bg-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-700 view-timeline-name:--section view-timeline-axis:block fill-mode-both">
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40 group-hover:scale-110 group-active:scale-95 transition-all duration-300 group-hover:bg-emerald-500">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white ml-0.5 sm:ml-1" fill="white" />
                  )}
                </div>
                {!isPlaying && (
                  <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 m-auto bg-emerald-600/30 rounded-full animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 md:mt-8 text-center px-2 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2.5 sm:mb-3 md:mb-4">
            ¿Listo para llenar tu agenda de pacientes?
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200 font-semibold hover:scale-105 active:scale-95"
            onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agenda tu llamada GRATIS ahora
          </Button>
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-2.5 sm:mt-3 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <span>Sin compromiso</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-muted-foreground/40 rounded-full" />
            <span>100% gratis</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-muted-foreground/40 rounded-full" />
            <span>Solo 15 minutos</span>
          </p>
        </div>
      </div>
    </section>
  )
}
