import { useState } from "react";
import projectsbg from "../asset4/projectsbg.jpg";

const projects = [
  {
    number: "Project 1",
    type: "Website",
    title: "Roma's Blog",
    description: "A personal blog website with a creative visual layout.",
    href: "/project/roma-blog/Alapar_blog.html",
    image: "/project/roma-blog/preview.png",
    featured: true,
  },
  {
    number: "Project 2",
    type: "Website",
    title: "CVC Plaza Events Venue",
    description: "An events venue website with pages for amenities, venues, and contact details.",
    href: "/project/cvc-website/v03.html",
    image: "/project/cvc-website/front2.jpg",
    wide: true,
  },
  {
    number: "Project 3",
    type: "Website",
    title: "Music Gallery",
    description: "A gallery-style website for browsing music albums.",
    href: "/project/music-gallery/Gallery.html",
    image: "/project/music-gallery/p2.png",
    compact: true,
  },
  {
    number: "Project 4",
    type: "Website",
    title: "Music Store",
    description: "A music store website with product-style presentation.",
    href: "/project/store-music/WEBSITE.html",
    image: "/project/store-music/p3.png",
    compact: true,
  },
  {
    number: "Project 5",
    type: "Mixed Media",
    title: "Mixed Media Video",
    description: "A video-based mixed media project.",
    href: "/project/mixedmedia/mixed.mp4",
    image: "/project/mixedmedia/prevmedia.png",
  },
  {
    number: "Project 6",
    type: "Multimedia",
    title: "Multimedia Artwork",
    description: "A visual multimedia piece created with image editing tools.",
    href: "/project/photoshop/edit1.png",
    preview: "/project/photoshop/edit1.png",
    images: [
      {
        src: "/project/photoshop/edit1.png",
        href: "/project/photoshop/edit1.png",
      },
      {
        src: "/project/photoshop/edit2.png",
        href: "/project/photoshop/edit2.png",
      },
    ],
  },
  {
    number: "Project 7",
    type: "Game Assets",
    title: "Game Assets",
    description: "A collection of game asset designs.",
    preview: "/project/game-assets/asset1.jpg",
    gallery: [
      "/project/game-assets/asset1.jpg",
      "/project/game-assets/asset2.jpg",
      "/project/game-assets/asset3.jpg",
      "/project/game-assets/asset4.jpg",
      "/project/game-assets/asset5.jpg",
    ],
  },
];

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [
    romaBlog,
    cvcProject,
    musicGallery,
    musicStore,
    mixedMedia,
    multimedia,
    gameAssets,
  ] = projects;

  const cardClass =
    "scroll-reveal reveal-up group overflow-hidden rounded-2xl border border-cyan-200/35 bg-black/45 text-white shadow-[0_0_24px_rgba(0,255,255,0.14)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:bg-black/35 hover:shadow-[0_0_34px_rgba(0,255,255,0.3)]";

  const renderProjectLink = (project) => (
    <button
      key={project.number}
      type="button"
      onClick={() => setActiveProject(project)}
      className={`${cardClass} grid text-left sm:grid-cols-[0.95fr_1.05fr]`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-video h-full w-full object-cover brightness-100 saturate-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      <div className="flex min-h-[190px] flex-col justify-center p-5 md:p-6">
        <h2 className="text-2xl font-bold leading-tight">{project.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
          {project.description}
        </p>
        
      </div>
    </button>
  );

  const renderImageProject = (project) => (
    <button
      key={project.number}
      type="button"
      onClick={() =>
        setActiveGallery({
          ...project,
          gallery: project.images.map((image) => image.src),
        })
      }
      className={`${cardClass} text-left`}
    >
      <div className="overflow-hidden">
        <img
          src={project.preview}
          alt={`${project.title} preview`}
          className="aspect-video h-full w-full object-cover brightness-100 saturate-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      <div className="p-5 md:p-6">
        <h2 className="text-2xl font-bold leading-tight">{project.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
          {project.description}
        </p>
        
      </div>
    </button>
  );

  const renderGalleryProject = (project) => (
    <button
      key={project.number}
      type="button"
      onClick={() => setActiveGallery(project)}
      className={`${cardClass} text-left`}
    >
      <div className="overflow-hidden">
        <img
          src={project.preview}
          alt={`${project.title} preview`}
          className="aspect-video h-full w-full object-cover brightness-100 saturate-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      <div className="p-5 md:p-6">
        <h2 className="text-2xl font-bold leading-tight">{project.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
          {project.description}
        </p>
       
      </div>
    </button>
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-black bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{ backgroundImage: `url(${projectsbg})` }}
    >
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="absolute inset-0 bg-cyan-950/20"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="scroll-reveal reveal-left mb-10 max-w-3xl">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Websites, mixed media, and multimedia work.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-3xl border border-cyan-200/25 bg-white/10 p-4 backdrop-blur-md md:p-5">
            
            <div className="grid gap-5">
              {renderProjectLink(romaBlog)}
              {renderProjectLink(cvcProject)}
              {renderProjectLink(musicGallery)}
              {renderProjectLink(musicStore)}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-200/25 bg-white/10 p-4 backdrop-blur-md md:p-5">
            
            <div className="grid gap-5">
            {renderProjectLink(mixedMedia)}
            {renderImageProject(multimedia)}
            {renderGalleryProject(gameAssets)}
            </div>
          </div>
        </div>
      </div>

      {activeGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyan-950/10 px-4 py-8 backdrop-blur-sm">
          <div className="max-h-full w-full max-w-6xl overflow-y-auto rounded-3xl border border-cyan-100/45 bg-white/12 p-5 text-white shadow-[0_0_45px_rgba(0,255,255,0.25)] backdrop-blur-md md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">{activeGallery.title}</h2>
                
              </div>

              <button
                type="button"
                onClick={() => setActiveGallery(null)}
                className="rounded-full border border-cyan-100/50 bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 shadow-[0_0_20px_rgba(0,255,255,0.18)] backdrop-blur-md transition hover:bg-white/30"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeGallery.gallery.map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() =>
                    setActiveImage({
                      src: image,
                      title: `${activeGallery.title} ${imageIndex + 1}`,
                    })
                  }
                  className="group overflow-hidden rounded-2xl border border-cyan-100/35 bg-white/16 p-2 shadow-[0_0_18px_rgba(0,255,255,0.12)] backdrop-blur-sm transition hover:border-cyan-100 hover:bg-white/24"
                >
                  <img
                    src={image}
                    alt={`${activeGallery.title} ${imageIndex + 1}`}
                    className="aspect-video w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-cyan-950/10 px-4 py-8 backdrop-blur-sm">
          <div className="flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-cyan-100/45 bg-white/12 text-white shadow-[0_0_45px_rgba(0,255,255,0.25)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 border-b border-cyan-100/25 bg-white/10 p-4 backdrop-blur-sm md:p-5">
              <h2 className="text-xl font-bold">{activeImage.title}</h2>

              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="rounded-full border border-cyan-100/50 bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 shadow-[0_0_20px_rgba(0,255,255,0.18)] backdrop-blur-md transition hover:bg-white/30"
              >
                Back
              </button>
            </div>

            <div className="max-h-[78vh] bg-white/8 p-3">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="mx-auto max-h-[74vh] w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyan-950/10 px-4 py-8 backdrop-blur-sm">
          <div className="flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-cyan-100/45 bg-white/12 text-white shadow-[0_0_50px_rgba(0,255,255,0.28)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 border-b border-cyan-100/25 bg-white/10 p-4 backdrop-blur-sm md:p-5">
              <div>
                <h2 className="text-2xl font-bold">{activeProject.title}</h2>
                <p className="mt-1 text-sm text-white/80">
                  {activeProject.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-full border border-cyan-100/50 bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 shadow-[0_0_20px_rgba(0,255,255,0.18)] backdrop-blur-md transition hover:bg-white/30"
              >
                Back
              </button>
            </div>

            <div className="h-[75vh] bg-white/8 p-2">
              {activeProject.href.endsWith(".mp4") ? (
                <video
                  src={activeProject.href}
                  controls
                  className="h-full w-full rounded-2xl bg-black/40 object-contain"
                />
              ) : (
                <iframe
                  src={activeProject.href}
                  title={activeProject.title}
                  className="h-full w-full rounded-2xl bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
