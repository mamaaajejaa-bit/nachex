"use client"

import { X, Zap, Clock, Target, Shield, TrendingUp } from "lucide-react"

export function Benefits() {
  const problems = [
    "Perder tiempo respondiendo mensajes que no convierten",
    "Pacientes que agendan pero nunca llegan",
    "Publicidad que no genera resultados reales",
    "No logras llenar tu agenda todos los meses",
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
      description: "Si no generas pacientes, no pagas",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-slate-50/80 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Problems */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 view-timeline-name:--section view-timeline-axis:block fill-mode-both">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
            ¿Te identificas con esto?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-2 sm:gap-3 bg-red-50/80 border border-red-100 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 md:p-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 text-red-500" />
              </div>
              <span className="text-foreground text-xs sm:text-sm md:text-base leading-snug">{problem}</span>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-foreground">
            Con <span className="text-emerald-600">Growth</span> todo cambia
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Esto es lo que obtienes al trabajar con nosotros:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 md:p-5 border-2 border-emerald-100 hover:border-emerald-200 transition-all duration-200 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex gap-2.5 sm:gap-3 md:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-0.5 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-snug">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-backwards">
          <button
            onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-base sm:text-lg md:text-xl font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto max-w-xs active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agendar llamada GRATIS
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  )
}
