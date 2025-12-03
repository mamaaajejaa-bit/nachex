import { Star } from "lucide-react"

export function SocialProof() {
  const stats = [
    { number: "+42", label: "Dentistas activos" },
    { number: "+15K", label: "Pacientes generados" },
    { number: "98%", label: "Satisfacción" },
    { number: "7 días", label: "Promedio ROI" },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 view-timeline-name:--section view-timeline-axis:block fill-mode-both">
          <div className="flex justify-center gap-0.5 mb-1.5 sm:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-emerald-100 text-xs sm:text-sm md:text-base">4.9/5 basada en +150 reseñas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-0.5">{stat.number}</div>
              <div className="text-emerald-100 text-[10px] sm:text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
