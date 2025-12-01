import { Star } from "lucide-react"

export function SocialProof() {
  const stats = [
    { number: "+200", label: "Dentistas activos" },
    { number: "+15K", label: "Pacientes generados" },
    { number: "98%", label: "Satisfacción" },
    { number: "45 días", label: "Promedio ROI" },
  ]

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center gap-0.5 sm:gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-emerald-100 text-sm sm:text-base">4.9/5 basada en +150 reseñas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">{stat.number}</div>
              <div className="text-emerald-100 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
