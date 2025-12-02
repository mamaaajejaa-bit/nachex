"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Dra. María González",
    role: "Odontóloga General",
    location: "CDMX",
    result: "+45 pacientes/mes",
    videoUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Testimonio+Paulina.mp4",
    thumbnailUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Testimonio+Paulina.mp4",
  },
  {
    name: "Dr. Carlos Mendoza",
    role: "Especialista en Implantes",
    location: "Bogotá",
    result: "+$15,000 USD/mes",
    videoUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Nuestro+cliente+Dental+Juarez+comparte+su+experiencia+trabajando+con+nosotros+luego+de+unos+meses.+Gracias+Dr+Axel%2C+a+seguir+creciendo.mp4",
    thumbnailUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Nuestro+cliente+Dental+Juarez+comparte+su+experiencia+trabajando+con+nosotros+luego+de+unos+meses.+Gracias+Dr+Axel%2C+a+seguir+creciendo.mp4",
  },
  {
    name: "Dr. Pablo",
    role: "Ortodoncia",
    location: "Lima",
    result: "ROI de 8x",
    videoUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Testimonio+de+Pablito.mp4",
    thumbnailUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Testimonio+de+Pablito.mp4",
  },
]

function VideoTestimonial({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Empieza muted para autoplay
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
    <Card className="flex-shrink-0 w-[280px] sm:w-auto snap-center overflow-hidden bg-white border border-slate-200 rounded-xl shadow-sm">
      {/* Video container - formato vertical para testimonios */}
      <div className="relative aspect-[9/16] sm:aspect-[9/14] bg-black">
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          poster={testimonial.thumbnailUrl}
          className="w-full h-full object-cover"
          playsInline
          muted={isMuted}
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
          onClick={togglePlay}
        >
          {/* Badge de resultado */}
          <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
            {testimonial.result}
          </div>

          {/* Estrellas */}
          <div className="absolute top-3 right-3 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Botón de play central */}
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Reproducir testimonio"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 ml-1" fill="currentColor" />
              </div>
            </button>
          )}

          {/* Info del testimonial */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="font-semibold text-white text-sm">{testimonial.name}</div>
            <div className="text-white/80 text-xs">
              {testimonial.role} • {testimonial.location}
            </div>
          </div>
        </div>

        {/* Controles cuando está reproduciendo */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="font-semibold text-white text-xs">{testimonial.name}</div>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePlay()
                  }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Pausar"
                >
                  <Pause className="w-4 h-4 text-white" fill="white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">Resultados reales de dentistas como tú</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:overflow-visible sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Indicadores de scroll en móvil */}
        <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-emerald-200" />
          ))}
        </div>
      </div>
    </section>
  )
}
