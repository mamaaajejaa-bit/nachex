"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-emerald-100/80 bg-slate-900">
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/video-principal.mp4"
              poster="/videos/video-thumbnail.jpg"
              muted={isMuted}
              playsInline
              onEnded={() => setIsPlaying(false)}
            />

            {/* Overlay con controles */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
              onClick={togglePlay}
            >
              {/* Botón de play central */}
              {!isPlaying && (
                <button
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Reproducir video"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40 group-hover:scale-110 group-active:scale-95 transition-all duration-300 group-hover:bg-emerald-500">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                  </div>
                  {/* Ripple effect */}
                  <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-emerald-600/30 rounded-full animate-ping" />
                </button>
              )}

              {/* Caption inferior */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6">
                  <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-snug">
                    Mira cómo ayudamos a odontólogos a conseguir <strong>+80 pacientes nuevos</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Controles de video */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
              {/* Botón de mute/unmute */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-black/80 transition-colors"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Activar sonido</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Sonido activo</span>
                  </>
                )}
              </button>
            </div>

            {/* Botón de pausa flotante cuando está reproduciendo */}
            {isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur-sm text-white p-2 sm:p-2.5 rounded-full hover:bg-black/80 transition-colors"
                aria-label="Pausar video"
              >
                <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center px-2">
          <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
            ¿Listo para llenar tu agenda de pacientes?
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200 font-semibold"
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
