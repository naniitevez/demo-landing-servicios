// =========================================================
// ⚙️ CONFIGURACIÓN RÁPIDA DEL CLIENTE (EDITAR SOLO ACÁ)
// =========================================================
const CONFIG = {
  nombreMarca: "Clima",
  nombreMarcaAcento: "Pro",
  telefonoWhatsapp: "5491100000000", // Sin + ni espacios
  instagramBies: "https://www.instagram.com/bies.agencia/", // Link real de Bies
};

// Función helper para armar los links de WhatsApp con mensaje personalizado
const linkWsp = (mensaje) =>
  `https://wa.me/${CONFIG.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`;

const SERVICIOS = [
  {
    icono: "🔧",
    titulo: "Instalación Split",
    descripcion:
      "Colocación completa con cañería de cobre, vacío con bomba y prueba de estanqueidad para conservar la garantía de fábrica.",
    mensajeWsp: "Hola! Quiero consultar el precio de una instalación de Split.",
  },
  {
    icono: "❄️",
    titulo: "Carga de Gas",
    descripcion:
      "Detección de fugas y recarga de refrigerante R410A / R22 / R32 con manómetros digitales.",
    mensajeWsp: "Hola! Mi aire no enfría bien, quisiera consultar por carga de gas.",
  },
  {
    icono: "🧼",
    titulo: "Limpieza Profunda",
    descripcion:
      "Desinfección de unidad interior, limpieza de turbinas, desagües y condensadora para eliminar malos olores y goteos.",
    mensajeWsp: "Hola! Quiero pedir turno para limpieza y mantenimiento de un aire.",
  },
  {
    icono: "🚚",
    titulo: "Desinstalación y Traslado",
    descripcion:
      "Recuperación segura del gas refrigerante sin pérdidas para mudanzas o reubicación de equipos.",
    mensajeWsp: "Hola! Necesito desinstalar/trasladar un aire acondicionado.",
  },
];

const ZONAS = [
  "General Rodríguez",
  "Moreno",
  "Luján",
  "Ituzaingó / Castelar",
  "CABA (Consultar)",
];

const OPINIONES = [
  {
    texto:
      "Vinieron puntual al día siguiente de escribirles. Dejaron todo impecable, ni una mancha en la pared y el equipo enfría perfecto.",
    autor: "Martín G. · Instalación Split 3000F",
  },
  {
    texto:
      "Me goteaba el aire adentro y otro técnico me quería cobrar una fortuna. Ellos lo limpiaron completo y quedó 10 puntos.",
    autor: "Carla R. · Limpieza y destape",
  },
  {
    texto:
      "Muy prolijos para trabajar en altura y súper claros con el presupuesto desde el primer mensaje.",
    autor: "Lucas M. · 2 equipos Inverter",
  },
];

const FAQS = [
  {
    pregunta: "¿Qué incluye la instalación básica?",
    respuesta:
      "Incluye hasta 3 metros de cañería de cobre, aislantes, cable de interconexión, manguera de desagüe, ménsulas, vacío con bomba y puesta en marcha.",
  },
  {
    pregunta: "¿Entregan certificado para no perder la garantía de marca?",
    respuesta:
      "Sí, somos técnicos matriculados y entregamos constancia de instalación con matrícula vigente.",
  },
  {
    pregunta: "¿Cuánto demora una instalación?",
    respuesta:
      "Una instalación estándar en pared demora aproximadamente entre 2 y 3 horas.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-extrabold text-xl text-primario tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-acento text-white flex items-center justify-center text-sm">
              ❄️
            </span>
            <span>
              {CONFIG.nombreMarca}
              <span className="text-acento">{CONFIG.nombreMarcaAcento}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-acento transition">
              Servicios
            </a>
            <a href="#zonas" className="hover:text-acento transition">
              Zonas
            </a>
            <a href="#opiniones" className="hover:text-acento transition">
              Opiniones
            </a>
            <a href="#faq" className="hover:text-acento transition">
              Preguntas
            </a>
          </nav>

          <a
            href={linkWsp("Hola! Necesito consultar por un servicio de aire acondicionado.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wsp hover:opacity-95 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition flex items-center gap-2"
          >
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ================= HERO / PORTADA ================= */}
        <section className="bg-suave py-14 md:py-24">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-white text-acento font-semibold text-xs px-3 py-1.5 rounded-full border border-sky-200 mb-4">
                ✓ Técnicos Matriculados · Garantía Escrita
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primario leading-tight mb-4">
                Instalación y service de aires acondicionados{" "}
                <span className="text-acento">en el día</span>.
              </h1>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                Trabajamos con todas las marcas (Split e Inverter). Presupuestos
                claros antes de empezar, prolijidad garantizada y atención rápida
                en hogar y comercios.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={linkWsp(
                    "Hola! Quiero pedir presupuesto para instalar/revisar un aire acondicionado."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-acento text-white font-bold px-6 py-4 rounded-xl text-center shadow-md transition"
                >
                  Pedir presupuesto ahora →
                </a>
                <a
                  href="#servicios"
                  className="bg-white text-primario font-semibold px-6 py-4 rounded-xl text-center border border-slate-200 hover:bg-slate-50 transition"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-xs font-medium text-slate-500">
                <span>⚡ Atención en 24/48 hs</span>
                <span>🛡️ Garantía de 12 meses</span>
                <span>💳 Efectivo y Transferencia</span>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
                alt="Técnico realizando mantenimiento de aire acondicionado"
                className="rounded-2xl shadow-xl w-full h-[340px] md:h-[420px] object-cover"
              />
              <div className="absolute -bottom-5 left-4 right-4 sm:right-auto bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-acento flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <p className="text-sm font-bold text-primario">
                    +350 equipos instalados
                  </p>
                  <p className="text-xs text-slate-500">
                    Service oficial multimarca
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICIOS ================= */}
        <section id="servicios" className="py-16 md:py-24 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primario mb-3">
              Nuestros Servicios
            </h2>
            <p className="text-slate-600">
              Soluciones completas para que tu equipo enfríe al máximo y consuma
              menos energía.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICIOS.map((servicio) => (
              <div
                key={servicio.titulo}
                className="border border-slate-200 rounded-2xl p-6 hover:border-acento transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-suave text-acento flex items-center justify-center text-xl mb-4">
                    {servicio.icono}
                  </div>
                  <h3 className="font-bold text-lg text-primario mb-2">
                    {servicio.titulo}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {servicio.descripcion}
                  </p>
                </div>
                <a
                  href={linkWsp(servicio.mensajeWsp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-acento hover:underline"
                >
                  Consultar precio →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ZONAS DE COBERTURA ================= */}
        <section id="zonas" className="bg-suave py-14">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primario mb-3">
              Zonas de Atención
            </h2>
            <p className="text-slate-600 mb-8">
              Llegamos a domicilio sin cargo de visita dentro de nuestra zona
              principal.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {ZONAS.map((zona) => (
                <span
                  key={zona}
                  className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-primario border border-sky-200"
                >
                  📍 {zona}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OPINIONES ================= */}
        <section id="opiniones" className="py-16 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primario text-center mb-10">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {OPINIONES.map((op) => (
              <div
                key={op.autor}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
              >
                <p className="text-amber-400 text-sm mb-2">★★★★★</p>
                <p className="text-sm text-slate-600 mb-4">"{op.texto}"</p>
                <p className="text-xs font-bold text-primario">— {op.autor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primario text-center mb-8">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {FAQS.map((item) => (
                <details
                  key={item.pregunta}
                  className="bg-white p-5 rounded-xl border border-slate-200 cursor-pointer"
                >
                  <summary className="font-bold text-primario">
                    {item.pregunta}
                  </summary>
                  <p className="text-sm text-slate-600 mt-2">{item.respuesta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="bg-primario text-white py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              ¿Necesitás presupuesto hoy?
            </h2>
            <p className="text-slate-300 mb-8">
              Escribinos por WhatsApp indicando frigorías del equipo o el
              problema que tenés y te respondemos en minutos.
            </p>
            <a
              href={linkWsp(
                "Hola! Quiero pedir un presupuesto para mi aire acondicionado."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-wsp hover:opacity-95 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition"
            >
              Hablar por WhatsApp ahora
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER CON CRÉDITO DE BIES ================= */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 {CONFIG.nombreMarca}
            {CONFIG.nombreMarcaAcento} Climatización. Todos los derechos
            reservados.
          </p>
          <p>
            Diseño y desarrollo por{" "}
            <a
              href={CONFIG.instagramBies}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              Bies Agencia Creativa
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}