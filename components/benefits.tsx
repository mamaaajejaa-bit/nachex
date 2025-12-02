import { X, Zap, Clock, Target, Shield } from "lucide-react"

export function Benefits() {
  const problems = [
    "Perder tiempo respondiendo mensajes que no convierten",
    "Pacientes que agendan pero nunca llegan",
    "Publicidad que no genera resultados reales",
    "Competir por precio con otros dentistas",
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Sistema automatizado 24/7",
      description: "Respondemos y calificamos pacientes incluso mientras duermes",
    },
    {
      icon: Target,
      title: "Pacientes pre-calificados",
      description: "Solo te llegan pacientes listos para tratamiento, no curiosos",
    },
    {
      icon: Clock,
      title: "Ahorra +20 horas/semana",
      description: "Dedica tu tiempo a lo que importa: atender pacientes",
    },
    {
      icon: Shield,
      title: "Garantía de resultados",
      description: "Si no generas pacientes, te devolvemos tu inversión",
    },
  ]

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50/80">
      <div className="max-w-5xl mx-auto">
        {/* Problems */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-foreground">
            ¿Te identificas con esto?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-red-50/80 border border-red-100 rounded-xl p-3.5 sm:p-4"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-red-500" />
              </div>
              <span className="text-foreground text-sm sm:text-base leading-snug">{problem}</span>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
            Con <span className="text-emerald-600">Growth</span> todo cambia
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Esto es lo que obtienes al trabajar con nosotros:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 border-2 border-emerald-100 hover:border-emerald-200 transition-all duration-200 bg-white rounded-xl shadow-sm hover:shadow-md"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-snug">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
