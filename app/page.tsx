import Image from "next/image";
import { Timeline } from "./components/Timeline";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Me4I9T7NBe9xr8snXg2RgEj5tbbXRpPhKxMD7ztKvSgZVSUD6E2kaH8CWZFDnYOEAc2Bc-TiQ";

const LINKEDIN_URL = "https://www.linkedin.com/in/janne-t-64698013b";
const EMAIL = "jmtiktak@gmail.com";

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
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="#contact" className="sm:hidden bg-accent text-white text-sm px-4 py-2 rounded-full">
            Book a call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-foreground mb-6">
            Take back your time.
          </h1>
          <p className="text-base md:text-lg text-foreground/70 mb-3">
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

        {/* Hero photo — laptop by the pool */}
        <div className="rounded-3xl aspect-[3/4] w-full relative overflow-hidden bg-gradient-to-br from-[#dde8d8] to-[#c8dcc0]">
          <Image
            src="/janne2.jpg"
            alt="Janne working by the pool"
            fill
            className="object-cover object-center"
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
            Your evenings back by step 3 — or get your money back. No fine print.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-3">What people say.</h2>
        <p className="text-sm text-foreground/40 mb-12">From Janne&apos;s workshop &amp; teaching work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name }) => (
            <div key={name} className="bg-foreground/4 rounded-2xl p-8 flex flex-col gap-6">
              <p className="text-foreground/75 leading-relaxed text-base italic font-serif">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="text-sm text-foreground/40 font-sans">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Add intro video here when recorded */}

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About photo — portrait */}
          <div className="rounded-3xl aspect-square max-w-sm w-full mx-auto relative overflow-hidden bg-gradient-to-br from-[#dde8d8] to-[#c8dcc0]">
            <Image
              src="/janne.jpg"
              alt="Janne"
              fill
              className="object-cover object-top"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Hi, I&apos;m Janne.</h2>
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
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Let&apos;s talk.</h2>
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

        {/* Social links */}
        <div className="border-t border-foreground/10 mt-16 pt-8 flex items-center gap-5">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="text-foreground/20">·</span>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-5xl mx-auto border-t border-foreground/10 flex items-center justify-between">
        <span className="text-accent font-medium">🌱 Janne</span>
        <p className="text-sm text-foreground/40">{EMAIL}</p>
      </footer>
    </main>
  );
}
