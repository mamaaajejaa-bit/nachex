"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, Sparkles, ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-background via-emerald-50/30 to-emerald-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-foreground text-balance px-2">
          ¿Listo para llenar tu consultorio de pacientes?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed px-2">
          Únete a +200 dentistas que ya están creciendo con nosotros. La llamada es 100% gratis y sin compromiso.
        </p>

        <Button
          size="lg"
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-4 sm:py-5 md:py-7 h-auto rounded-xl shadow-xl shadow-emerald-600/25 mb-5 sm:mb-6 md:mb-8 font-semibold transition-all group"
          onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
        >
          Agenda tu llamada GRATIS ahora
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-600" />
            <span>Garantía de resultados</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-600" />
            <span>Solo 15 minutos</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-600" />
            <span>Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
