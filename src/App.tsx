import { useState } from "react";
import { useScrollFadeIn } from "./useScrollFadeIn";
import DeviceMockups from "./DeviceMockups";

/* ─── Icons (inline SVG helpers) ─── */
const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-primary-500 shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-slate-300 shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/* ─── Data ─── */

const problems = [
  {
    title: "Eventos perdidos en el ruido",
    text: 'Se publican en Instagram, Facebook, WhatsApp... y el turista que llega no se entera. No hay un lugar centralizado donde consultar "¿qué puedo hacer hoy?".',
  },
  {
    title: "Negocios invisibles para el visitante",
    text: "¿Dónde se come bien? ¿Hay hotel cerca? El turista termina en plataformas genéricas que no reflejan la oferta real de la ciudad.",
  },
  {
    title: "Crear un sitio propio es caro",
    text: "Desarrollar una plataforma cuesta cientos de miles de pesos, requiere equipo técnico permanente, y el contenido se desactualiza en semanas.",
  },
  {
    title: "El comerciante no puede sumarse fácilmente",
    text: "Quiere estar visible, pero no existe un canal claro ni un proceso simple para hacerlo.",
  },
];

const solutionItems = [
  {
    action: "Carga un evento en el panel",
    result: "Aparece en la agenda pública del sitio",
  },
  {
    action: "Registra un restaurante",
    result: 'Se suma al directorio de "¿Dónde Comer?"',
  },
  {
    action: "Elige sus colores y logo",
    result: "Todo el sitio se adapta a su identidad visual",
  },
  {
    action: "Recibe un mensaje de un comerciante",
    result: "Le llega directo por WhatsApp",
  },
];

const agendaFeatures = [
  "Buscador para encontrar eventos, artistas o lugares al instante",
  "Filtro por fecha: elegí un día y ve qué pasa",
  "Filtro por categoría: música, teatro, deportes, gastronomía y más",
  "Eventos destacados en un carrusel principal",
  'Organización automática: "Hoy", "Esta semana" y "Próximos eventos"',
];

const directoryCategories = [
  {
    name: "¿Dónde Salir?",
    examples: "Bares, pubs, discotecas, salas de espectáculos",
    icon: "🎉",
  },
  {
    name: "¿Dónde Dormir?",
    examples: "Hoteles, hostels, cabañas, apart-hotels",
    icon: "🛏️",
  },
  {
    name: "¿Dónde Comer?",
    examples: "Restaurantes, pizzerías, cafeterías, heladerías",
    icon: "🍽️",
  },
  {
    name: "Actividades",
    examples: "Paseos, talleres, deportes, turismo aventura",
    icon: "🚴",
  },
  {
    name: "Comercios",
    examples: "Tiendas, servicios profesionales, comercios varios",
    icon: "🛍️",
  },
];

const infoUtilItems = [
  "Cómo llegar a la ciudad (auto, colectivo, tren, avión)",
  "Números de emergencia",
  "Atractivos turísticos",
  "Transporte público local",
];

const benefits = [
  {
    title: "Presencia digital inmediata",
    text: "Sitio web profesional en días, no en meses. Con logo, colores y nombre del municipio. Sin contratar desarrolladores ni comprar servidores.",
    icon: "🚀",
  },
  {
    title: "Agenda siempre actualizada",
    text: "Los eventos se cargan en minutos. Cuando pasan, desaparecen automáticamente. La agenda nunca queda desactualizada.",
    icon: "📅",
  },
  {
    title: "Apoyo real al comercio local",
    text: "Cada negocio obtiene su ficha digital completa. Sin que el comerciante tenga que hacer nada ni pagar nada.",
    icon: "🏪",
  },
  {
    title: "Funciona en todos los dispositivos",
    text: "Se adapta automáticamente a celulares, tablets y computadoras. El 80% de las consultas turísticas se hacen desde el celular.",
    icon: "📱",
  },
  {
    title: "Visible en redes sociales",
    text: "Cuando alguien comparte el sitio, se muestra automáticamente el logo, título e imagen del municipio. Cada vez que alguien comparte, es publicidad gratuita.",
    icon: "📣",
  },
  {
    title: "Crecimiento orgánico",
    text: "El formulario de contacto permite que nuevos comerciantes y promotores se acerquen solos. El directorio crece de forma natural.",
    icon: "🌱",
  },
];

const brandItems = [
  {
    item: "Color principal",
    result:
      "Encabezado, botones y elementos destacados en el color institucional",
  },
  { item: "Logo", result: "Aparece en el encabezado del sitio" },
  {
    item: "Banner",
    result: "Se muestra al compartir el sitio en redes sociales",
  },
  { item: "Ícono", result: "Aparece en la pestaña del navegador" },
  {
    item: "Título",
    result: '"Un Plan en [Tu Ciudad]" en la pestaña y al compartir',
  },
  {
    item: "Descripción",
    result: "Texto propio al compartir en redes sociales",
  },
  { item: "Contacto", result: "Email, WhatsApp e Instagram del municipio" },
];

interface PlanFeature {
  label: string;
  inicial: string | boolean;
  estandar: string | boolean;
  premium: string | boolean;
}

const planFeatures: PlanFeature[] = [
  { label: "Eventos", inicial: "20", estandar: "100", premium: "Ilimitados" },
  { label: "Negocios", inicial: "15", estandar: "50", premium: "Ilimitados" },
  {
    label: "Categorías",
    inicial: "3",
    estandar: "5",
    premium: "Personalizadas",
  },
  {
    label: "Eventos destacados",
    inicial: false,
    estandar: "5",
    premium: "Ilimitados",
  },
  {
    label: "Personalización",
    inicial: "Básica",
    estandar: "Completa",
    premium: "Completa + dominio propio",
  },
  {
    label: "Info útil",
    inicial: "Genérica",
    estandar: "Personalizable",
    premium: "A medida",
  },
  {
    label: "Soporte",
    inicial: "Email",
    estandar: "Email + WhatsApp",
    premium: "Dedicado",
  },
  {
    label: "Capacitación",
    inicial: "Documentación",
    estandar: "Videollamada",
    premium: "Personalizada",
  },
  { label: "Descuento anual", inicial: "15%", estandar: "15%", premium: "20%" },
];

const plans = [
  {
    name: "Plan Inicial",
    tagline: "Para municipios que quieren dar el primer paso.",
    highlight: false,
    features: [
      "Hasta 20 eventos y 15 negocios",
      "3 categorías de negocio a elegir",
      "Personalización de color y logo",
      "Formulario de contacto vía WhatsApp",
      "Soporte por email",
      "Documentación del panel",
    ],
    ideal:
      "Municipios pequeños o que quieren evaluar la plataforma antes de escalar.",
  },
  {
    name: "Plan Estándar",
    tagline: "Para municipios con actividad turística real.",
    highlight: true,
    badge: "Más elegido",
    features: [
      "Hasta 100 eventos y 50 negocios",
      "Las 5 categorías de negocio",
      "Hasta 5 eventos destacados en el carrusel",
      "Personalización completa (banner, ícono, título, descripción)",
      "Sección de información útil personalizable",
      "Subdominio incluido (ej: miciudad.unplanen.com.ar)",
      "Soporte por email y WhatsApp (respuesta en 24h)",
      "Videollamada de capacitación para el equipo",
    ],
    ideal:
      "Municipios medianos que quieren aprovechar al máximo la plataforma.",
  },
  {
    name: "Plan Premium",
    tagline: "Para ciudades y destinos turísticos de referencia.",
    highlight: false,
    features: [
      "Eventos y negocios ilimitados",
      "Categorías de negocio personalizadas",
      "Eventos destacados ilimitados",
      "Dominio propio (ej: turismomiciudad.com.ar)",
      "Contenido de información útil redactado a medida",
      "Soporte dedicado con persona de contacto asignada",
      "Onboarding asistido: configuración, carga y capacitación",
      "Prioridad en nuevas funcionalidades",
    ],
    ideal:
      "Ciudades turísticas importantes que necesitan el máximo nivel de personalización y servicio.",
  },
];

const steps = [
  { num: 1, title: "Contacto", desc: "Nos contactan y eligen su plan." },
  {
    num: 2,
    title: "Datos",
    desc: "El municipio envía logo, colores y datos de contacto.",
  },
  {
    num: 3,
    title: "Armado",
    desc: "Configuramos el sitio con su marca y cargamos contenido inicial.",
  },
  {
    num: 4,
    title: "Capacitación",
    desc: "Capacitamos al equipo que va a gestionar el contenido.",
  },
  {
    num: 5,
    title: "En Vivo",
    desc: "El sitio está público y accesible para todos.",
  },
];

const faqs = [
  {
    q: "¿Necesitamos un equipo de sistemas para usarlo?",
    a: "No. El contenido se carga desde un panel simple, como publicar en redes sociales. Cualquier persona puede operarlo.",
  },
  {
    q: "¿Podemos tener nuestro propio dominio?",
    a: "Sí. El Plan Premium incluye dominio propio (ej: turismomiciudad.com.ar). El Plan Estándar incluye un subdominio.",
  },
  {
    q: "¿Los eventos viejos se borran solos?",
    a: "Los eventos pasados dejan de mostrarse automáticamente. No hace falta eliminarlos.",
  },
  {
    q: "¿Se puede destacar un evento para más visibilidad?",
    a: 'Sí, los planes Estándar y Premium permiten marcar eventos como "destacados" para el carrusel principal.',
  },
  {
    q: "¿El sitio se ve bien en celulares?",
    a: "Sí. Está diseñado para verse perfecto en celulares, tablets y computadoras.",
  },
  {
    q: "¿Cómo llegan los mensajes de comerciantes que quieren sumarse?",
    a: "Directo al WhatsApp del municipio. Sin intermediarios.",
  },
  {
    q: "¿Se pueden cambiar los colores y el logo después de contratar?",
    a: "Sí, en cualquier momento y sin costo adicional.",
  },
  {
    q: "¿Cada municipio tiene su propio sitio independiente?",
    a: "Sí. Datos, marca y configuración completamente independientes.",
  },
  {
    q: "¿Incluye actualizaciones?",
    a: "Sí. Todos los planes incluyen actualizaciones y mejoras sin costo adicional.",
  },
  {
    q: "¿Qué pasa si necesitamos más categorías?",
    a: "El Plan Premium permite agregar categorías personalizadas además de las 5 estándar.",
  },
];

/* ─── Reusable Section Wrapper ─── */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="fade-in mb-14 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── FAQ Accordion Item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-medium text-slate-800 hover:text-primary-600 transition-colors cursor-pointer"
      >
        <span>{q}</span>
        <ChevronDown open={open} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-slate-500">{a}</p>
      </div>
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  useScrollFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-primary-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-bold text-white">
            Un Plan en...
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            <a href="#problema" className="hover:text-white transition">
              Problema
            </a>
            <a href="#solucion" className="hover:text-white transition">
              Solución
            </a>
            <a href="#funcionalidades" className="hover:text-white transition">
              Funcionalidades
            </a>
            <a href="#planes" className="hover:text-white transition">
              Planes
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-600 transition"
          >
            Contactanos
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <header className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-accent-600 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-400">
            Plataforma para municipios
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            El sitio de tu ciudad,{" "}
            <span className="text-accent-400">listo en días</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Agenda de eventos, directorio de negocios y marca propia. Sin equipo técnico.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#contacto"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-primary-700 shadow-lg hover:bg-slate-100 transition"
            >
              Agendar demo
            </a>
            <a
              href="#funcionalidades"
              className="rounded-full border-2 border-white/30 px-7 py-3 text-sm font-bold text-white hover:border-white/60 transition"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>
        {/* Devices – hero focal point */}
        <DeviceMockups />
      </header>

      {/* ═══ PROBLEMA ═══ */}
      <Section id="problema" className="bg-slate-50">
        <SectionTitle
          eyebrow="El problema"
          title="Los municipios pierden turistas y oportunidades todos los días"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((p, i) => (
            <div
              key={i}
              className="fade-in rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-bold text-slate-800">
                {p.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="fade-in mt-10 rounded-2xl bg-primary-950 p-6 md:p-8 text-center">
          <p className="text-lg font-medium text-white/90 leading-relaxed">
            <strong className="text-white">Resultado:</strong> el turista se va
            sin conocer la mitad de lo que la ciudad ofrece. El vecino se pierde
            eventos. El comerciante pierde clientes. Y el municipio pierde la
            oportunidad de dinamizar su economía local.
          </p>
        </div>
      </Section>

      {/* ═══ SOLUCIÓN ═══ */}
      <Section id="solucion">
        <SectionTitle
          eyebrow="La solución"
          title={'"Un Plan en..." — El sitio de tu ciudad, listo en días'}
          subtitle="Una plataforma web que le da a cada municipio su propio portal de eventos y directorio de negocios, con marca personalizada y contenido gestionado por el propio municipio."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {solutionItems.map((s, i) => (
            <div
              key={i}
              className="fade-in flex items-start gap-4 rounded-xl bg-primary-50 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-slate-800">{s.action}</p>
                <p className="text-sm text-slate-500">→ {s.result}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="fade-in mt-8 text-center text-slate-500">
          <strong className="text-slate-700">
            No hace falta saber de tecnología.
          </strong>{" "}
          Solo se necesita una persona que cargue el contenido desde un panel
          simple, como publicar en redes sociales pero más organizado.
        </p>
      </Section>

      {/* ═══ FUNCIONALIDADES ═══ */}
      <Section id="funcionalidades" className="bg-slate-50">
        <SectionTitle
          eyebrow="Funcionalidades"
          title="Un sitio completo, moderno y fácil de usar"
          subtitle="Esto es lo que ven los vecinos y turistas al entrar al sitio de tu ciudad."
        />

        {/* Agenda */}
        <div className="fade-in mb-16">
          <h3 className="mb-6 text-2xl font-bold">📅 Agenda de eventos</h3>
          <p className="mb-4 text-slate-500">
            La página principal muestra todos los eventos vigentes de la ciudad:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {agendaFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-slate-600">{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-400">
            Cada evento muestra su flyer, fecha, lugar, dirección, categorías y
            enlaces a redes sociales.
          </p>
        </div>

        {/* Directorio */}
        <div className="fade-in mb-16">
          <h3 className="mb-6 text-2xl font-bold">📂 Directorio de negocios</h3>
          <p className="mb-4 text-slate-500">
            Cinco secciones organizan toda la oferta comercial y turística:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directoryCategories.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="mb-1 text-2xl">{c.icon}</p>
                <p className="font-bold text-slate-800">{c.name}</p>
                <p className="text-sm text-slate-500">{c.examples}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-500 leading-relaxed">
            Cada negocio tiene su <strong>ficha completa</strong>: nombre, logo,
            descripción, dirección con mapa, teléfono, web, Instagram, YouTube,
            menú, reservas y delivery. Un turista puede encontrar un
            restaurante, ver su menú, hacer una reserva y llegar con el mapa —
            todo desde la misma ficha.
          </p>
        </div>

        {/* Info Útil */}
        <div className="fade-in mb-16">
          <h3 className="mb-6 text-2xl font-bold">ℹ️ Información útil</h3>
          <p className="mb-4 text-slate-500">
            Sección dedicada con todo lo que el visitante necesita:
          </p>
          <ul className="space-y-2">
            {infoUtilItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto directo */}
        <div className="fade-in">
          <h3 className="mb-4 text-2xl font-bold">💬 Contacto directo</h3>
          <p className="text-slate-500 leading-relaxed">
            Promotores de eventos y comerciantes llenan un formulario simple y
            el mensaje <strong>llega directo al WhatsApp del municipio</strong>.
            Sin emails que se pierden, sin trámites.
          </p>
        </div>
      </Section>

      {/* ═══ BENEFICIOS ═══ */}
      <Section id="beneficios">
        <SectionTitle
          eyebrow="Beneficios"
          title="Beneficios para el municipio"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="fade-in rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="mb-3 text-3xl">{b.icon}</p>
              <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ MARCA PROPIA ═══ */}
      <Section id="marca" className="bg-slate-50">
        <SectionTitle
          eyebrow="Marca propia"
          title="Tu ciudad, tu identidad"
          subtitle="Cada municipio recibe un sitio con su propia identidad visual. No es un sitio genérico: es el sitio del municipio."
        />
        <div className="fade-in mx-auto max-w-2xl">
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {brandItems.map((b, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4"
              >
                <span className="font-semibold text-primary-600 sm:w-36 shrink-0">
                  {b.item}
                </span>
                <span className="text-slate-500">{b.result}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            Todos estos elementos se pueden cambiar en cualquier momento, sin
            intervención técnica.
          </p>
        </div>
      </Section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <Section id="como-funciona">
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Dos partes, un sistema simple"
          subtitle="Se carga en el panel → aparece en el sitio. Así de simple."
        />
        <div className="fade-in grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-primary-50 p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500 text-2xl text-white">
              🏛️
            </div>
            <h3 className="mb-3 text-xl font-bold text-primary-900">
              Municipio
            </h3>
            <p className="mb-4 text-sm text-primary-800/60">Panel de gestión</p>
            <ul className="space-y-2">
              {[
                "Carga eventos",
                "Carga negocios",
                "Elige colores",
                "Destaca eventos",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-accent-600/5 p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-500 text-2xl text-white">
              👥
            </div>
            <h3 className="mb-3 text-xl font-bold text-primary-900">
              Vecinos y turistas
            </h3>
            <p className="mb-4 text-sm text-primary-800/60">Sitio público</p>
            <ul className="space-y-2">
              {[
                "Ven la agenda",
                "Ven el directorio",
                "Buscan y filtran",
                "Se contactan",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Arrow between boxes on md+ */}
        <div className="fade-in mt-6 hidden md:flex justify-center">
          <div className="flex items-center gap-2 text-primary-400">
            <div className="h-px w-16 bg-primary-300" />
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span className="text-sm font-medium text-primary-500">
              Sincronización automática
            </span>
          </div>
        </div>
      </Section>

      {/* ═══ PLANES ═══ */}
      <Section id="planes" className="bg-slate-50">
        <SectionTitle
          eyebrow="Planes"
          title="Tres opciones para cada necesidad"
        />
        {/* Plan cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`fade-in relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-lg ${
                plan.highlight
                  ? "border-2 border-primary-500 bg-white ring-1 ring-primary-500/20"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold text-white shadow">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-extrabold">{plan.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckIcon />
                    <span className="text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 mb-6 text-xs text-slate-400">
                <strong className="text-slate-600">Ideal para:</strong>{" "}
                {plan.ideal}
              </p>
              <a
                href="#contacto"
                className={`mt-auto pt-3 block rounded-full py-3 text-center text-sm font-bold transition ${
                  plan.highlight
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Agendar demo
              </a>
            </div>
          ))}
        </div>

        {/* Comparison table – compact */}
        <details className="fade-in mt-12 rounded-2xl border border-slate-200 bg-white">
          <summary className="cursor-pointer px-6 py-4 text-center font-semibold text-primary-600 hover:text-primary-700 transition">
            Ver comparación rápida de planes
          </summary>
          <div className="overflow-x-auto px-6 pb-6">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="py-3 pr-4 font-semibold text-slate-600"></th>
                  <th className="py-3 px-4 font-semibold text-slate-600">
                    Inicial
                  </th>
                  <th className="py-3 px-4 font-semibold text-primary-600">
                    Estándar
                  </th>
                  <th className="py-3 px-4 font-semibold text-slate-600">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {planFeatures.map((f, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 font-medium text-slate-700">
                      {f.label}
                    </td>
                    {(
                      [f.inicial, f.estandar, f.premium] as (string | boolean)[]
                    ).map((val, j) => (
                      <td key={j} className="py-2.5 px-4 text-slate-500">
                        {val === false ? (
                          <XIcon />
                        ) : val === true ? (
                          <CheckIcon />
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </Section>

      {/* ═══ CASO DE REFERENCIA ═══ */}
      <Section id="referencia" className="bg-primary-950 text-white">
        <SectionTitle
          eyebrow="Caso de referencia"
          title="Un Plan en Junín — Ya funciona"
          subtitle="La ciudad de Junín, provincia de Buenos Aires, es el primer municipio en usar la plataforma."
        />
        <div className="fade-in mx-auto max-w-2xl rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-center">
          <p className="mb-6 leading-relaxed text-white/80">
            En el sitio se pueden encontrar:
          </p>
          <ul className="space-y-3 text-left inline-block">
            {[
              "Agenda de eventos y shows con búsqueda y filtros",
              "Directorio de restaurantes, hoteles, bares, actividades y comercios",
              "Información turística: cómo llegar, emergencias, atractivos, transporte",
              "Formulario de contacto para sumarse al directorio",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/60">
            La plataforma está activa y puede visitarse como ejemplo real de lo
            que cada municipio puede tener con su propia marca.
          </p>
        </div>
      </Section>

      {/* ═══ CÓMO EMPEZAR (Timeline) ═══ */}
      <Section id="empezar">
        <SectionTitle
          eyebrow="Cómo empezar"
          title="En 5 pasos el municipio tiene su propio sitio"
        />
        {/* Timeline */}
        <div className="fade-in relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 md:left-1/2 md:-translate-x-px" />
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative mb-10 flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content */}
              <div
                className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <div className="rounded-xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-500">
                    Paso {step.num}
                  </p>
                  <h4 className="mt-1 text-lg font-bold">{step.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white ring-4 ring-white">
                {step.num}
              </div>
              {/* Spacer on md */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>

        {/* What's needed */}
        <div className="fade-in mt-12 mx-auto max-w-xl rounded-2xl bg-primary-50 p-8">
          <h3 className="mb-4 text-center text-lg font-bold">
            ¿Qué necesita el municipio para arrancar?
          </h3>
          <p className="mb-4 text-center text-sm text-slate-500">
            Solo 5 cosas:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-slate-700">
            <li>
              <strong>Logo</strong> del municipio (imagen con fondo
              transparente)
            </li>
            <li>
              <strong>Color institucional</strong> (el color que identifica al
              municipio)
            </li>
            <li>
              <strong>Descripción breve</strong> de la ciudad (1-2 oraciones)
            </li>
            <li>
              <strong>Datos de contacto</strong> (email, WhatsApp, Instagram)
            </li>
            <li>
              <strong>Listado</strong> de los primeros eventos y negocios a
              cargar
            </li>
          </ol>
          <p className="mt-4 text-center text-xs text-slate-400">
            No se necesita equipo técnico, hosting, dominio ni ningún
            conocimiento de programación.
          </p>
        </div>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq" className="bg-slate-50">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitás saber"
        />
        <div className="fade-in mx-auto max-w-2xl">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </Section>

      {/* ═══ CONTACTO / CTA FINAL ═══ */}
      <Section
        id="contacto"
        className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-600 text-white"
      >
        <div className="fade-in mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-400">
            Contacto
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ¿Querés llevar "Un Plan en..." a tu municipio?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Escribinos para agendar una demostración personalizada.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:contacto@unplanen.com.ar"
              className="rounded-full bg-white px-8 py-3 text-base font-bold text-primary-700 shadow-lg hover:bg-slate-100 transition"
            >
              Agendar demo
            </a>
            <a
              href="mailto:contacto@unplanen.com.ar"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-bold text-white hover:border-white/60 transition"
            >
              Contactanos
            </a>
          </div>
        </div>
      </Section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <p className="text-center text-sm text-slate-400">
          "Un Plan en..." — El sitio de tu ciudad, listo en días.
        </p>
      </footer>
    </div>
  );
}
