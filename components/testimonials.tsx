"use client"

import { useState } from "react"
import { Play, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Dra. María González",
    role: "Odontóloga General",
    location: "CDMX",
    result: "+45 pacientes/mes",
    youtubeId: "VIDEO_ID_1", // Reemplaza con tu ID de YouTube
  },
  {
    name: "Dr. Carlos Mendoza",
    role: "Especialista en Implantes",
    location: "Bogotá",
    result: "+$15,000 USD/mes",
    youtubeId: "VIDEO_ID_2", // Reemplaza con tu ID de YouTube
  },
  {
    name: "Dra. Ana Rodríguez",
    role: "Ortodoncia",
    location: "Lima",
    result: "ROI de 8x",
    youtubeId: "VIDEO_ID_3", // Reemplaza con tu ID de YouTube
  },
]

function VideoTestimonial({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="flex-shrink-0 w-[85vw] sm:w-auto snap-center overflow-hidden bg-white border border-slate-200 rounded-xl shadow-sm">
      {/* Video container - formato vertical para testimonios */}
      <div className="relative aspect-[9/16] sm:aspect-[9/14] bg-black">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            {/* Thumbnail de YouTube */}
            <img
              src={`https://img.youtube.com/vi/${testimonial.youtubeId}/maxresdefault.jpg`}
              alt={`Testimonio de ${testimonial.name}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10">
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

              {/* Botón de play */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Reproducir testimonio"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 ml-1" fill="currentColor" />
                </div>
              </button>

              {/* Info del testimonial */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                <div className="text-white/80 text-xs">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={`Testimonio de ${testimonial.name}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
