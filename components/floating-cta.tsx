"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY <= 600) {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 md:p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden animate-in slide-in-from-bottom duration-300 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2 sm:gap-2.5">
        <Button
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-3 sm:py-4 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all"
          onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
          Agendar llamada GRATIS
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-2 sm:p-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      <p className="text-[9px] sm:text-[10px] text-center text-muted-foreground mt-1 sm:mt-1.5">Solo quedan 3 lugares este mes</p>
    </div>
  )
}
