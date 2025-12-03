"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Star, Maximize2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type TestimonialType = "video" | "image"

interface Testimonial {
  type: TestimonialType
  name: string
  role: string
  location?: string
  result: string
  videoUrl?: string
  thumbnailUrl?: string
  imageUrl?: string
}

const testimonials: Testimonial[] = [
  {
    type: "video",
    name: "Dra. Paulina",
    role: "Odontóloga General",
    location: "CDMX",
    result: "+45 pacientes/mes",
    videoUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Testimonio+Paulina.mp4",
    thumbnailUrl: "/testimonio-paulina.jpg",
  },
  {
    type: "image",
    name: "Dr. Genaro",
    role: "Alivio Dental",
    result: "$18,500 MXN Semanales",
    imageUrl: "/images/testimonial-2.png",
  },
  {
    type: "video",
    name: "Dr. Juarez",
    role: "Especialista en Implantes",
    location: "MEXICO",
    result: "+250 pacientes generados",
    videoUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Nuestro+cliente+Dental+Juarez+comparte+su+experiencia+trabajando+con+nosotros+luego+de+unos+meses.+Gracias+Dr+Axel%2C+a+seguir+creciendo.mp4",
    thumbnailUrl: "/dental-juarez.jpg",
  },
  {
    type: "image",
    name: "Dra. Alejandra López",
    role: "Agenda Completa",
    result: "Calendario Lleno",
    imageUrl: "/images/testimonial-1.png",
  },
  {
    type: "video",
    name: "Dr. Pablo",
    role: "Ortodoncia",
    location: "MEXICO",
    result: "ROI de 8x",
    videoUrl: "https://dental-growthyy.s3.sa-east-1.amazonaws.com/Testimonio+de+Pablito.mp4",
    thumbnailUrl: "/testimonio-pablito.jpg",
  },
  {
    type: "image",
    name: "Al Dent Marketing",
    role: "Resultados Mensuales",
    result: "ROI 990%",
    imageUrl: "/images/testimonial-3.png",
  },
]

function TestimonialCard({
  testimonial,
  isActive
}: {
  testimonial: Testimonial
  isActive: boolean
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Auto play/pause based on isActive for videos
  useEffect(() => {
    if (testimonial.type !== 'video' || !videoRef.current) return

    if (isActive && !isPlaying) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => { })
    } else if (!isActive && isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive, isPlaying, testimonial.type])

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

  if (testimonial.type === 'image') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Card className="flex-shrink-0 w-[260px] xs:w-[280px] sm:w-auto snap-center overflow-hidden bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="relative aspect-[9/16] sm:aspect-[9/14] bg-black">
              <Image
                src={testimonial.imageUrl!}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-emerald-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg">
                {testimonial.result}
              </div>

              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 p-2.5 sm:p-3 rounded-full backdrop-blur-sm">
                  <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="font-semibold text-white text-xs sm:text-sm">{testimonial.name}</div>
                <div className="text-white/80 text-[10px] sm:text-xs">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] sm:max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="relative w-full h-[70vh] sm:h-[80vh]">
            <Image
              src={testimonial.imageUrl!}
              alt={testimonial.name}
              fill
              className="object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Card className="flex-shrink-0 w-[260px] xs:w-[280px] sm:w-auto snap-center overflow-hidden bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
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

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
          onClick={togglePlay}
        >
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-emerald-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg">
            {testimonial.result}
          </div>

          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Reproducir testimonio"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-600 ml-0.5" fill="currentColor" />
              </div>
            </button>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="font-semibold text-white text-xs sm:text-sm">{testimonial.name}</div>
            <div className="text-white/80 text-[10px] sm:text-xs">{testimonial.role}</div>
          </div>
        </div>

        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="font-semibold text-white text-[10px] sm:text-xs">{testimonial.name}</div>
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePlay()
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Pausar"
                >
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />}
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
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLDivElement | null)[]>([])

  // Detect when testimonials section is visible
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeVideoIndex === null) {
            setActiveVideoIndex(0)
          } else if (!entry.isIntersecting) {
            setActiveVideoIndex(null)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [activeVideoIndex])

  // Detect which video is most visible in scroll container
  useEffect(() => {
    if (activeVideoIndex === null) return

    const observers = videoRefs.current.map((videoDiv, index) => {
      if (!videoDiv) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveVideoIndex(index)
            }
          })
        },
        { threshold: [0.5], root: videoDiv.parentElement }
      )

      observer.observe(videoDiv)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [activeVideoIndex])

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Resultados reales de dentistas como tú</p>
        </div>

        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:overflow-visible sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div key={index} ref={(el) => { videoRefs.current[index] = el }}>
              <TestimonialCard
                testimonial={testimonial}
                isActive={activeVideoIndex === index}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${activeVideoIndex === i ? 'bg-emerald-600' : 'bg-emerald-200'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
