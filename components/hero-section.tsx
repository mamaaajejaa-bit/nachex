import { Badge } from "@/components/ui/badge"
import { Clock, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-emerald-50/50 to-background">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-4 text-center">
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
        {/* Logo mejorado */}
        <div className="mb-5 sm:mb-6">
          <Image
            src="/images/logo-growth.png"
            alt="Growth"
            width={180}
            height={50}
            className="mx-auto h-10 sm:h-12 md:h-14 w-auto"
            priority
          />
        </div>

        {/* Pre-headline con mejor estilo */}
        <Badge className="bg-emerald-100/80 text-emerald-700 hover:bg-emerald-100 mb-4 sm:mb-5 text-xs sm:text-sm py-1.5 px-3 sm:px-4 font-medium border border-emerald-200/50">
          Atención Odontólogos de MEXICO
        </Badge>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] sm:leading-tight mb-4 sm:mb-6 text-balance px-2">
          Te llenamos el consultorio con{" "}
          <span className="text-emerald-600 relative inline-block">
            +50 pacientes nuevos
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M2 10C50 2 250 2 298 10" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          al mes
        </h1>

        {/* Sub-headline mejorado */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-2">
          Sin que respondas un solo
          mensaje. Nosotros nos encargamos de todo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-100">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            <span>
              <strong className="text-foreground">+42</strong> dentistas confían en nosotros
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-100">
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
