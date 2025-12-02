import { Badge } from "@/components/ui/badge"
import { Clock, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-emerald-50/50 to-background overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-4 text-center animate-in fade-in slide-in-from-top duration-500">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="leading-tight">Solo aceptamos 5 consultorios este mes</span>
          <Badge
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 text-[10px] sm:text-xs px-2 py-0.5"
          >
            3 disponibles
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-6 sm:pt-10 sm:pb-8 text-center">
        {/* Logo mejorado con Glow */}
        <div className="mb-8 sm:mb-10 relative animate-in fade-in zoom-in duration-700">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/30 blur-[50px] rounded-full pointer-events-none" />
          <div className="relative">
            <Image
              src="/images/logo-growth.png"
              alt="Growth"
              width={180}
              height={50}
              className="mx-auto h-12 sm:h-14 md:h-16 w-auto drop-shadow-sm"
              priority
            />
          </div>
        </div>

        {/* Pre-headline con mejor estilo */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards">
          <Badge className="bg-emerald-100/80 text-emerald-700 hover:bg-emerald-100 mb-4 sm:mb-6 text-xs sm:text-sm py-1.5 px-3 sm:px-4 font-medium border border-emerald-200/50 shadow-sm">
            Atención Odontólogos de MEXICO
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] sm:leading-tight mb-6 sm:mb-8 text-balance px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards">
          Te llenamos el consultorio con{" "}
          <span className="text-emerald-600 relative inline-block whitespace-nowrap">
            +50 pacientes
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-emerald-500/50"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M2 10C50 2 250 2 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          nuevos al mes
        </h1>

        {/* Sub-headline mejorado */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards">
          Sin que respondas un solo mensaje. Nosotros nos encargamos de todo el proceso de captación y agendamiento.
        </p>

        {/* Nuevo CTA Principal */}
        <div className="flex flex-col items-center gap-4 mb-10 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-backwards">
          <button
            onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-lg sm:text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto max-w-xs active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agendar llamada GRATIS
              <TrendingUp className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Solo quedan 3 lugares disponibles este mes
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-backwards">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-100 shadow-sm">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            <span>
              <strong className="text-foreground">+42</strong> dentistas confían en nosotros
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-100 shadow-sm">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            <span>
              <strong className="text-foreground">+15,000</strong> pacientes generados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
