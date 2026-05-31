import homeImg from "../asset4/home.png";
import aboutImg from "../asset4/about.png";
import projectsImg from "../asset4/projects.png";
import contactImg from "../asset4/contact.png";
import middleImg from "../asset4/middle.png";

const fishLinks = [
  {
    href: "#home",
    label: "Home",
    src: homeImg,
    className: "fish-home left-[25%] top-[20%] w-[clamp(12rem,24vw,20rem)] -rotate-90",
    from: "-120vw",
  },
  {
    href: "#about",
    label: "About",
    src: aboutImg,
    className: "fish-about left-[79%] top-[19%] w-[clamp(15rem,30vw,25rem)] rotate-3",
    from: "120vw",
  },
  {
    href: "#projects",
    label: "Projects",
    src: projectsImg,
    className: "fish-projects left-[18%] top-[17%] w-[clamp(20rem,27vw,35rem)] -rotate-3",
    from: "120vw",
  },
  {
    href: "#contact",
    label: "Contact",
    src: contactImg,
    className: "fish-contact left-[80%] top-[76%] w-[clamp(20rem,30vw,25rem)] rotate-2",
    from: "-120vw",
  },
];

export default function FishMenu() {
  return (
    <div className="fish-menu absolute inset-0 z-10 overflow-hidden">
      <img
        src={middleImg}
        alt="Roma's Archive"
        className="home-archive-logo"
      />
      
      {fishLinks.map((fish, index) => (
        <a
          key={fish.href}
          href={fish.href}
          aria-label={fish.label}
          style={{
            "--fish-delay": `${1.35 + index * 0.35}s`,
            "--fish-start-x": fish.from,
          }}
          className={`fish-link float-fish transition duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${fish.className}`}
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
