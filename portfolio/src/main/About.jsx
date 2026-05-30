
import { useState } from "react";
import aboutBg from "../asset4/aboutbg.jpg";
import romapic from "../asset4/romapic.jpg";
import pic1 from "../asset4/pic1.jpg";
import pic2 from "../asset4/pic2.png";
import pic3 from "../asset4/pic3.png";
import pic4 from "../asset4/pic4.png";
import pic5 from "../asset4/pic5.png";
import pic6 from "../asset4/pic6.svg";
import pic7 from "../asset4/pic7.webp";
import pic8 from "../asset4/pic8.webp";
import pic9 from "../asset4/pic9.png";
import pic10 from "../asset4/pic10.png";
export default function About() {
  const [showCv, setShowCv] = useState(false);
  const skillPics = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-black bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-cyan-950/15"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div className="scroll-reveal reveal-left mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-cyan-200/45 bg-white/18 p-3 shadow-[0_0_40px_rgba(0,255,255,0.25)] backdrop-blur-md">
            <img
              src={romapic}
              alt="Roma Erika"
              className="aspect-square w-full rounded-2xl object-cover object-[center_5%]"
            />

            <div className="mt-3 rounded-2xl border border-cyan-100/30 bg-white/18 px-5 py-4 text-center shadow-[0_0_18px_rgba(0,255,255,0.12)] backdrop-blur-md">
              
              <h2 className="mt-1 text-2xl font-bold text-white">
                Roma Erika Alapar
              </h2>
            </div>
          </div>
        </div>

        <div className="scroll-reveal reveal-right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/80">
            About Me
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Designing simple ideas into clean digital experiences.
          </h1>

          <div className="mt-6 rounded-3xl border border-cyan-200/35 bg-white/18 p-6 shadow-[0_0_35px_rgba(0,255,255,0.18)] backdrop-blur-md md:p-8">
            <p className="text-lg leading-relaxed text-white/90">
              Hi, I'm Roma Erika, an Information Technology student who enjoys
              creating simple, creative, and visually appealing designs. This
              website is my personal archive of projects, school works, and
              experiments as I keep learning and building.
            </p>

            <button
              type="button"
              onClick={() => setShowCv(true)}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-100/55 bg-white/22 px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-50 shadow-[0_0_24px_rgba(0,255,255,0.22)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-white/32 hover:shadow-[0_0_36px_rgba(0,255,255,0.38)]"
            >
          
              View CV
            </button>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Creative Toolkit
            </p>

            <div className="toolkit-grid grid grid-cols-2 gap-5 sm:grid-cols-5 xl:grid-cols-10">
              {skillPics.map((pic, index) => (
                <img
                  key={index}
                  src={pic}
                  alt=""
                  style={{ "--reveal-delay": `${index * 0.06}s` }}
                  className="toolkit-icon scroll-reveal reveal-soft aspect-square w-full min-w-0 rounded-2xl border border-cyan-200/40 bg-white/20 object-contain p-2 shadow-[0_0_20px_rgba(0,255,255,0.14)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-100 hover:bg-white/25 hover:shadow-[0_0_30px_rgba(0,255,255,0.42)]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCv && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyan-950/10 px-4 py-8 backdrop-blur-sm">
          <div className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cyan-100/45 bg-white/12 text-white shadow-[0_0_45px_rgba(0,255,255,0.25)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 border-b border-cyan-100/25 bg-white/10 p-4 backdrop-blur-sm md:p-5">
              
              <button
                type="button"
                onClick={() => setShowCv(false)}
                className="rounded-full border border-cyan-100/50 bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 shadow-[0_0_20px_rgba(0,255,255,0.18)] backdrop-blur-md transition hover:bg-white/30"
              >
                Back
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto bg-white/8 p-3">
              <img
                src="/project/resume/cv.png"
                alt="Roma Erika Alapar CV"
                className="mx-auto w-full max-w-3xl rounded-2xl object-contain shadow-[0_0_28px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
