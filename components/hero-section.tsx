"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-background to-background overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-2 px-4 text-center animate-in fade-in slide-in-from-top duration-500">
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-medium">
          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span className="leading-tight">Solo aceptamos 5 consultorios este mes</span>
          <Badge
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30 text-[9px] sm:text-[10px] px-1.5 py-0"
          >
            3 disponibles
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-4 pb-2 sm:pt-6 sm:pb-4 text-center">
        {/* Logo mejorado con Glow */}
        <div className="mb-4 sm:mb-6 relative animate-in fade-in zoom-in duration-700">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-emerald-400/30 blur-[40px] sm:blur-[50px] rounded-full pointer-events-none" />
          <div className="relative">
            <Image
              src="/images/logo-growth.png"
              alt="Growth"
<<<<<<< HEAD
              width={160}
              height={45}
              className="mx-auto h-10 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-sm transition-all duration-300"
              style={{ filter: "brightness(0) saturate(100%) invert(38%) sepia(13%) saturate(1638%) hue-rotate(115deg) brightness(96%) contrast(88%)" }} // #649584
=======
              width={140}
              height={40}
              className="mx-auto h-8 sm:h-10 md:h-12 w-auto drop-shadow-sm"
              style={{ filter: "brightness(0)" }} // negro
>>>>>>> 2c8985cff8d97016edf608d0b16f555ce84f0040
              priority
            />
          </div>
        </div>

        {/* Pre-headline con mejor estilo */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards">
          <Badge className="relative overflow-hidden bg-emerald-100/80 text-emerald-700 hover:bg-emerald-100 mb-3 sm:mb-4 text-[10px] sm:text-xs py-1 px-2.5 sm:px-3 font-medium border border-emerald-200/50 shadow-sm">
            <span className="relative z-10">Atención Odontólogos de MEXICO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite] translate-x-[-100%]" />
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] sm:leading-tight mb-4 sm:mb-6 text-balance px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards">
          Te llenamos el consultorio con{" "}
          <span className="text-emerald-600 relative inline-block whitespace-nowrap">
            +50 pacientes
            <svg
              className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 text-emerald-500/50"
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
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards">
          Sin que respondas un solo mensaje. Nosotros nos encargamos de todo el proceso de captación y agendamiento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-backwards">
          <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
            <span>
              <strong className="text-foreground">+42</strong> dentistas confían en nosotros
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
            <span>
              <strong className="text-foreground">+15,000</strong> pacientes generados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
