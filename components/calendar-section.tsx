"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Clock, Video, Check } from "lucide-react"

export function CalendarSection() {
  const features = [
    "Análisis gratuito de tu situación actual",
    "Estrategia personalizada para tu consultorio",
    "Sin compromiso ni presión de venta",
    "Respuesta a todas tus dudas",
  ]

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.type = "text/javascript"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      id="calendar"
      className="py-10 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-3 sm:mb-4 text-xs sm:text-sm py-1.5 px-3 border-0">
            Siguiente paso
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-balance">
            Agenda tu llamada de consultoría GRATIS
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            En 15 minutos te mostramos cómo podemos llenar tu agenda
          </p>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl border-0">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left - Info */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Llamada de consultoría</h3>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-slate-50 rounded-full px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  <span>15 min</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-slate-50 rounded-full px-3 py-1.5">
                  <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  <span>Videollamada</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Descubre cómo captar pacientes nuevos de forma consistente, sin depender de referidos ni perder tiempo
                en redes.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Warning box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4">
                <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
                  <strong>IMPORTANTE:</strong> Si agendas y no te presentas sin avisar, no podrás acceder a otra
                  llamada.
                </p>
              </div>
            </div>

            {/* Right - LeadConnector Calendar Embed */}
            <div className="order-1 lg:order-2 min-h-[500px] sm:min-h-[550px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/VXjsvOFXMNJpPM0hvGfH"
                style={{ width: "100%", height: "100%", minHeight: "500px", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="VXjsvOFXMNJpPM0hvGfH_1764624950927"
                title="Agenda tu llamada de consultoría"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
