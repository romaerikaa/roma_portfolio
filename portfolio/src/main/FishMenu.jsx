import homeImg from "../asset4/home.png";
import aboutImg from "../asset4/about.png";
import projectsImg from "../asset4/projects.png";
import contactImg from "../asset4/contact.png";

const fishLinks = [
  {
    href: "#home",
    label: "Home",
    src: homeImg,
    className: "left-[35%] top-[25%] w-[clamp(20rem,16vw,13rem)] rotate-[-90deg]",
    from: "-120vw",
  },
  {
    href: "#about",
    label: "About",
    src: aboutImg,
    className: "left-[65%] top-[40%] w-[clamp(25rem,16vw,13rem)]",
    from: "120vw",
  },
  {
    href: "#projects",
    label: "Projects",
    src: projectsImg,
    className: "left-[95%] top-[65%] w-[clamp(25rem,16vw,13rem)]",
    from: "120vw",
  },
  {
    href: "#contact",
    label: "Contact",
    src: contactImg,
    className: "left-[65%] top-[100%] w-[clamp(25rem,18vw,15rem)]",
    from: "-120vw",
  },
];

export default function FishMenu() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">

      
      {fishLinks.map((fish, index) => (
        <a
          key={fish.href}
          href={fish.href}
          aria-label={fish.label}
          style={{
            "--fish-delay": `${index * 0.50}s`,
            "--fish-start-x": fish.from,
          }}
          className={`absolute float-fish -translate-x-1/2 -translate-y-1/2 transition duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white  ${fish.className}`}
        >
          <img
            src={fish.src}
            alt={fish.label}
            className="
                    fish-swim-in
                    block
                    h-auto
                    w-full

                    transition-all
                    duration-300

                    scale-100
                    hover:scale-110

                    drop-shadow-[0_0_18px_rgba(0,255,255,0.45)]
                    hover:drop-shadow-[0_0_40px_rgba(0,255,255,0.95)]

                    brightness-110
                    contrast-110
                    saturate-150
                    "
          />
        </a>
      ))}
    </div>
  );
}
