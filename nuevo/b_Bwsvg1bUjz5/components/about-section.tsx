import { User, GraduationCap, Briefcase, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const infoItems = [
  {
    icon: User,
    label: "Nombre",
    value: "Mayeli Sánchez",
  },
  {
    icon: GraduationCap,
    label: "Carrera",
    value: "Ing. en Tecnologías de la Información",
  },
  {
    icon: Briefcase,
    label: "Institución",
    value: "Universidad Politécnica de San Luis Potosí",
  },
  {
    icon: Target,
    label: "Periodo",
    value: "9.º semestre · 2026",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="text-3xl font-bold">
            <span className="text-primary font-mono">01.</span> Sobre mí
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-primary font-mono text-sm">&lt;</span>
                Perfil del Estudiante
                <span className="text-primary font-mono text-sm">/&gt;</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy estudiante de Ingeniería en Tecnologías de la Información en la{" "}
                <span className="text-foreground font-medium">Universidad Politécnica de San Luis Potosí (UPSLP)</span>,
                actualmente cursando noveno semestre.
              </p>
              <p>
                Complemento mi formación académica realizando prácticas profesionales en{" "}
                <span className="text-primary">Vuteq Industries México</span>, donde colaboro en el área de soporte técnico.
              </p>
              <p>
                Me motiva no solo resolver incidencias, sino comprender a fondo el origen de los errores y explicar a los usuarios el porqué de cada solución.
              </p>
              <p>
                Tengo un especial interés en la <span className="text-primary">ciberseguridad</span>, el análisis de vulnerabilidades y la protección de la información.
              </p>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="space-y-4">
            {infoItems.map((item, index) => (
              <Card
                key={item.label}
                className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all group"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                  <span className="ml-auto font-mono text-primary/40 text-sm">
                    0{index + 1}
                  </span>
                </CardContent>
              </Card>
            ))}

            {/* Extra Info Card */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary">$</span> alias: <span className="text-foreground">MayAth</span>
                </p>
                <p className="text-sm text-muted-foreground font-mono mt-1">
                  <span className="text-primary">$</span> asignatura: <span className="text-foreground">Seguridad Informática</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
