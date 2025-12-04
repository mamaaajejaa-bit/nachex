"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, Sparkles, ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-primary/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground text-balance">
          ¿Listo para llenar tu consultorio de pacientes?
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
          Únete a +80 dentistas que ya están creciendo con nosotros. La llamada es 100% gratis y sin compromiso.
        </p>

        <Button
          size="lg"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 active:bg-primary text-white text-lg sm:text-lg px-6 sm:px-10 py-4 sm:py-7 h-auto rounded-xl shadow-xl shadow-primary/25 mb-6 sm:mb-8 font-semibold transition-all group"
          onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
        >
          Agenda tu llamada GRATIS ahora
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span>Garantía de resultados</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span>Solo 15 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span>Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
