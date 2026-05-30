import contactbg from "../asset4/contactbg.jpg";

const contactDetails = [
  {
    label: "Email",
    value: "romaerikaa@gmail.com",
    href: "mailto:romaerikaa@gmail.com",
    icon: "@",
  },
  {
    label: "Phone",
    value: "0909-445-9873",
    href: "tel:09094459873",
    icon: "#",
  },
  {
    label: "Location",
    value: "Valenzuela City, Philippines",
    href: null,
    icon: "*",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="absolute inset-0 bg-cyan-950/20"></div>
      <div className="absolute left-10 top-24 h-32 w-32 rounded-full border border-cyan-200/25 bg-white/10 blur-sm"></div>
      <div className="absolute bottom-20 right-10 h-44 w-44 rounded-full border border-cyan-100/20 bg-cyan-200/10 blur-sm"></div>

      <div className="relative z-10 grid w-full max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="scroll-reveal reveal-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/80">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Let's Work Together
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/82">
            Have a project idea, question, or collaboration in mind? Send me a
            message and I'll get back to you.
          </p>

        </div>

        <div className="scroll-reveal reveal-right rounded-3xl border border-cyan-100/35 bg-white/14 p-5 shadow-[0_0_40px_rgba(0,255,255,0.2)] backdrop-blur-md md:p-7">
          <div className="grid gap-4">
            {contactDetails.map((item, index) => (
              <div
                key={item.label}
                style={{ "--reveal-delay": `${index * 0.08}s` }}
                className="scroll-reveal reveal-soft group rounded-2xl border border-cyan-100/25 bg-white/14 p-5 shadow-[0_0_18px_rgba(0,255,255,0.1)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-100/60 hover:bg-white/22 hover:shadow-[0_0_30px_rgba(0,255,255,0.28)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan-100/35 bg-cyan-100/15 text-xl font-bold text-cyan-50 shadow-[0_0_18px_rgba(0,255,255,0.18)] transition group-hover:scale-105 group-hover:bg-cyan-100/25">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/85">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block break-words text-xl font-semibold text-white transition hover:text-cyan-100"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-xl font-semibold text-white">
                        {item.value}
                      </p>
                    )}

                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/55 transition group-hover:text-cyan-100">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
