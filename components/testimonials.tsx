import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dra. María González",
      role: "Odontóloga General",
      location: "CDMX",
      image: "/latina-woman-dentist-professional-headshot.jpg",
      quote: "En 2 meses pasé de 15 a 60 pacientes nuevos. Mi agenda está llena y ya no pierdo tiempo en WhatsApp.",
      result: "+45 pacientes/mes",
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Especialista en Implantes",
      location: "Bogotá",
      image: "/latino-man-dentist-doctor-professional-headshot.jpg",
      quote:
        "La mejor inversión que he hecho. Los pacientes llegan pre-calificados y listos para tratamientos de alto valor.",
      result: "+$15,000 USD/mes",
    },
    {
      name: "Dra. Ana Rodríguez",
      role: "Ortodoncia",
      location: "Lima",
      image: "/latina-woman-orthodontist-professional-headshot-sm.jpg",
      quote: "Tenía miedo de que fuera otra agencia igual. Pero los resultados hablan solos. 100% recomendado.",
      result: "ROI de 8x",
    },
  ]

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
            <Card
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-auto snap-center p-4 sm:p-5 relative bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-emerald-100" />

              {/* Estrellas */}
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed relative z-10 line-clamp-4 sm:line-clamp-none">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-100"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm sm:text-base truncate">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Result badge */}
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-lg p-2.5 sm:p-3 text-center border border-emerald-100">
                <span className="text-emerald-700 font-bold text-sm sm:text-base">{testimonial.result}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-emerald-200" />
          ))}
        </div>
      </div>
    </section>
  )
}
