import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda en ver resultados?",
      answer:
        "La mayoría de nuestros clientes ven sus primeros pacientes en la primera semana. En promedio, alcanzamos los 50+ pacientes mensuales garantizado.",
    },
    {
      question: "¿Qué pasa si no funciona?",
      answer:
        "Tenemos una garantía de resultados. Si no generas pacientes nuevos, no pagas.",
    },
    {
      question: "¿Necesito hacer algo yo?",
      answer:
        "No. Nosotros nos encargamos de todo: publicidad, responder mensajes, agendar citas y hacer seguimiento. Tú solo te dedicas a atender pacientes.",
    },
    {
      question: "¿Cuánto cuesta el servicio?",
      answer:
        "El precio depende del tamaño de tu consultorio y tus objetivos. En la llamada de consultoría analizamos tu caso y te damos una propuesta personalizada.",
    },
    {
      question: "¿Funciona en mi ciudad/país?",
      answer:
        "Sí. Trabajamos con dentistas exclusivamente en MEXICO. Nuestro sistema esta adaptado al mercado local.",
    },
    {
      question: "¿Por qué debería confiar en ustedes?",
      answer:
        "Tenemos +42 clinicas dentales activas y una calificación de 4.9/5. Puedes ver testimonios reales arriba. Además, nuestra garantía elimina cualquier riesgo para ti.",
    },
  ]

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50/80">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">Todo lo que necesitas saber antes de empezar</p>
        </div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-xl px-4 sm:px-5 data-[state=open]:border-emerald-300 data-[state=open]:shadow-sm transition-all"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-foreground py-3.5 sm:py-4 text-sm sm:text-base [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-emerald-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3.5 sm:pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
