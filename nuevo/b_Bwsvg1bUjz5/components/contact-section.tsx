"use client"

import { useState } from "react"
import { Send, Mail, Shield, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would submit to Formspree or similar
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="text-3xl font-bold">
            <span className="text-primary font-mono">04.</span> Contacto
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta o comentario sobre el portafolio? 
            No dudes en enviarme un mensaje.
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Mail className="w-5 h-5 text-primary" />
              Formulario de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground">Gracias por tu mensaje. Te responderé pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground font-mono">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground font-mono">
                      Correo
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground font-mono">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    className="w-full rounded-md bg-secondary/50 border border-border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Certificado SSL · GitHub Pages (HTTPS)</span>
                  </div>
                  <Button type="submit" className="glow w-full sm:w-auto">
                    Enviar mensaje
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
