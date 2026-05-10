import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Titan Athletics" },
      { name: "description", content: "Get in touch with the Titan Athletics team. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Get in touch</p>
          <h1 className="font-display text-6xl md:text-8xl leading-none mb-12">TALK TO A <span className="text-primary text-glow-electric">TITAN</span></h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              {[
                { Icon: Mail, t: "Email", v: "support@titanathletics.com", s: "We reply in <24h" },
                { Icon: Phone, t: "Phone", v: "+1 (800) 845-8266", s: "Mon-Fri 8am-8pm EST" },
                { Icon: MapPin, t: "HQ", v: "247 Performance Ave, Brooklyn NY", s: "Visits by appointment" },
                { Icon: MessageSquare, t: "Live chat", v: "Open in-app", s: "Instant athlete support" },
              ].map(({ Icon, t, v, s }) => (
                <div key={t} className="glass rounded-2xl p-6 hover:border-primary/40 transition">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t}</p>
                  <p className="font-semibold mt-1">{v}</p>
                  <p className="text-xs text-foreground/60 mt-1">{s}</p>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="lg:col-span-2 glass-strong rounded-2xl p-8 space-y-5"
            >
              <h2 className="font-display text-3xl tracking-wider mb-2">SEND US A MESSAGE</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" required />
                <Field label="Last name" required />
              </div>
              <Field label="Email" type="email" required />
              <Field label="Subject" required />
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                <textarea required rows={6} className="mt-1 w-full bg-titan-gray/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              </label>
              <button
                type="submit"
                disabled={sent}
                className="bg-primary text-primary-foreground font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:scale-[1.02] transition flex items-center gap-2 disabled:opacity-70"
              >
                {sent ? <><Check className="h-4 w-4" /> Message sent</> : <><Send className="h-4 w-4" /> Send message</>}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input {...rest} className="mt-1 w-full bg-titan-gray/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" />
    </label>
  );
}
