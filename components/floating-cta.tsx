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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden animate-in slide-in-from-bottom duration-300 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2.5">
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 active:bg-primary text-white py-4 text-sm font-semibold rounded-xl transition-all"
          onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Agendar llamada GRATIS
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[10px] sm:text-xs text-center text-muted-foreground mt-1.5">Solo quedan 3 lugares este mes</p>
    </div>
  )
}
