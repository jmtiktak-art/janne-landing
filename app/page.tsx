import Image from "next/image";
import { Timeline } from "./components/Timeline";

// Update this once you verify the public booking URL from Google Calendar
// Go to your Appointment Schedule → Share → copy the public link
const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Me4I9T7NBe9xr8snXg2RgEj5tbbXRpPhKxMD7ztKvSgZVSUD6E2kaH8CWZFDnYOEAc2Bc-TiQ";

const testimonials = [
  {
    quote:
      "Janne is one of the most caring people you'll find. She guides you through the process — not just showing you what to do, but helping you understand how and why it works. I strongly recommend her.",
    name: "Fernando",
  },
  {
    quote:
      "What Janne puts together is well-structured and accessible for everyone. You feel at ease immediately. Because of the work we did together, I kept going — and I'm even inspired to take it further myself.",
    name: "Lisa",
  },
  {
    quote:
      "The best thing I could have done for myself — what a fantastic experience. Janne put this together really well. I barely dared to do it at first. By the end I was completely free. What a liberation.",
    name: "Jess Witkamp",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-foreground/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-accent font-medium text-lg tracking-tight">
            🌱 Janne
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-foreground/60">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="sm:hidden bg-accent text-white text-sm px-4 py-2 rounded-full"
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] text-foreground mb-6">
            Take back<br />your time.
          </h1>
          <p className="text-xl text-foreground/70 mb-3 leading-relaxed">
            Imagine taking a week off. Your business still runs.
          </p>
          <p className="text-base text-foreground/55 mb-12 leading-relaxed">
            I help small business founders in wellness, movement, and sustainability
            take back control of their operations — so they can focus on the work
            they actually built this for.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a free call →
          </a>
        </div>

        {/* Hero photo — file: public/janne.jpg */}
        <div className="rounded-3xl aspect-[3/4] w-full relative overflow-hidden bg-gradient-to-br from-[#dde8d8] to-[#c8dcc0]">
          <Image
            src="/janne.jpg"
            alt="Janne"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-24 max-w-2xl mx-auto border-t border-foreground/10">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-5">
          Your business only works because you&apos;re personally holding it together.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-5">
          If you step away, things fall apart — and you know it.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
          Your days get eaten by the operational work that shouldn&apos;t need you —
          chasing things, managing tools, keeping all the moving parts in line.
          Meanwhile, the work you actually want to be doing waits.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-4 max-w-xl">
          What changes in 3 steps.
        </h2>
        <p className="text-foreground/55 mb-16 max-w-xl">
          I look at your whole operational setup — not just one tool or one process —
          and find where the time is going.
        </p>
        <Timeline />
      </section>

      {/* Guarantee */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-foreground/10">
        <div className="bg-accent/10 rounded-3xl px-10 py-14 md:px-16 text-center">
          <p className="font-serif text-3xl md:text-4xl mb-4">The guarantee.</p>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            Your evenings back by month 3 — or get your money back. No fine print.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-3">What people say.</h2>
        <p className="text-sm text-foreground/40 mb-12">From Janne&apos;s workshop &amp; teaching work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name }) => (
            <div
              key={name}
              className="bg-foreground/4 rounded-2xl p-8 flex flex-col gap-6"
            >
              <p className="text-foreground/75 leading-relaxed text-base italic font-serif">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="text-sm text-foreground/40 font-sans">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="px-6 py-16 max-w-4xl mx-auto border-t border-foreground/10">
        <h2 className="font-serif text-2xl mb-8 text-foreground/70">
          See how it works.
        </h2>
        <div className="rounded-3xl bg-foreground/5 aspect-video flex flex-col items-center justify-center gap-4 border border-foreground/8">
          <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center text-white text-lg hover:opacity-90 transition-opacity cursor-pointer">
            ▶
          </div>
          <p className="text-foreground/35 text-sm">Add your intro video here</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl aspect-square max-w-sm w-full mx-auto relative overflow-hidden bg-gradient-to-br from-[#dde8d8] to-[#c8dcc0]">
            <Image
              src="/janne2.jpg"
              alt="Janne working by the pool"
              fill
              className="object-cover object-center"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Hi, I&apos;m Janne.
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-4">
              I step into your business, look at how your operations actually work,
              and build the systems that make the chaos disappear — so you can
              focus on what you actually built this for.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-4">
              I only work with businesses I&apos;m genuinely behind. If your work
              helps people or the planet, we&apos;re probably a good fit.
            </p>
            <p className="font-serif italic text-foreground/55 text-base leading-relaxed mb-6">
              (I also get unreasonably excited about finding a smarter way to do
              something that used to take three hours — must be the Dutchy inside.)
            </p>
            <p className="text-sm text-foreground/45">
              Based between Europe and Southeast Asia. Fully remote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 max-w-2xl mx-auto border-t border-foreground/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Let&apos;s talk.
        </h2>
        <p className="text-lg text-foreground/70 mb-10">
          Free 30-minute call. We look at what&apos;s eating your time and whether
          I can fix it. No pitch — just a conversation.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Schedule a free call →
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-5xl mx-auto border-t border-foreground/10 flex items-center justify-between">
        <span className="text-accent font-medium">🌱 Janne</span>
        <p className="text-sm text-foreground/40">jmtiktak@gmail.com</p>
      </footer>
    </main>
  );
}
