"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Seguridad Informática"
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.28_0.02_260)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.28_0.02_260)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Portafolio Digital
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Mayeli</span>{" "}
          <span className="text-primary text-glow">Sánchez</span>
        </h1>

        <div className="h-12 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span> {text}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Estudiante de Ingeniería en TI · UPSLP · 9.º semestre
          <br />
          <span className="text-primary/80">CNO V – Seguridad Informática</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="glow">
            <a href="#portafolio">
              Ver Portafolio
              <ArrowDown className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contacto">Contacto</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contacto@example.com"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
