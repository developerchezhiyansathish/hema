import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiOutlineArrowLeft,
  HiOutlinePhotograph,
  HiOutlinePlay,
  HiOutlineSparkles,
} from "react-icons/hi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { caseStudies } from "../../content/portfolio";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Case Study | Hemapriya Ramesh",
    };
  }

  return {
    title: `${study.client} Case Study | Hemapriya Ramesh`,
    description: study.headline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20 bg-surface-container-lowest">
        <section className="px-6 md:px-10 lg:px-20 py-10 md:py-16">
          <div className="max-w-[1440px] mx-auto">
            <Link
              href="/#work"
              className="inline-flex items-center gap-3 font-navigation-label text-[10px] text-outline uppercase hover:text-primary-container transition-colors duration-300"
            >
              <HiOutlineArrowLeft className="text-lg" aria-hidden="true" />
              Back to case studies
            </Link>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-stretch">
              <div className="bg-linen p-7 md:p-10 lg:p-12 flex flex-col justify-between fine-stone-border">
                <div className="space-y-6">
                  <p className="font-navigation-label text-navigation-label text-primary-container uppercase">
                    {study.category}
                  </p>
                  <h1 className="font-section-title text-[44px] md:text-[64px] lg:text-[76px] leading-[0.98] text-on-surface">
                    {study.client}
                  </h1>
                  <p className="font-body-main text-[18px] leading-[1.8] text-on-surface-variant">
                    {study.headline}
                  </p>
                </div>

                <div className="mt-10 space-y-3 border-t border-fine-stone pt-6">
                  {study.highlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <HiOutlineSparkles
                        className="mt-1 shrink-0 text-primary-container"
                        aria-hidden="true"
                      />
                      <p className="font-body-caption text-[14px] leading-[1.6] text-on-surface">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[420px] md:min-h-[640px] overflow-hidden fine-stone-border">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 border border-inverse-primary/40 bg-on-surface/55 p-5 backdrop-blur-sm">
                  <p className="font-navigation-label text-[10px] text-inverse-primary uppercase">
                    Outcome
                  </p>
                  <p className="mt-2 font-body-main text-[16px] leading-[1.7] text-inverse-on-surface">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-20 py-14 md:py-20 bg-ivory">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-10 lg:gap-20">
            <div className="space-y-5">
              <p className="font-navigation-label text-navigation-label text-primary-container uppercase">
                Case Study Detail
              </p>
              <h2 className="font-section-title text-3xl md:text-5xl leading-tight text-on-surface">
                Strategy, execution, and important highlights.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="font-body-main text-[17px] leading-[1.9] text-on-surface-variant">
                {study.detail}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.highlights.map((highlight, i) => (
                  <div
                    key={highlight}
                    className="relative overflow-hidden border border-fine-stone bg-surface-container-lowest p-6"
                  >
                    <span className="font-section-title text-5xl italic text-primary-container/20 absolute right-4 top-2">
                      0{i + 1}
                    </span>
                    <HiOutlineSparkles
                      className="text-xl text-primary-container"
                      aria-hidden="true"
                    />
                    <p className="mt-5 font-body-main text-[16px] leading-[1.65] font-semibold text-on-surface">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-20 py-14 md:py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <p className="font-navigation-label text-navigation-label text-primary-container uppercase">
                  Project Breakdown
                </p>
                <h2 className="mt-4 font-section-title text-3xl md:text-5xl text-on-surface">
                  Campaign touchpoints
                </h2>
              </div>
              <p className="font-body-main text-[15px] leading-[1.8] text-outline md:max-w-[420px]">
                Each touchpoint is framed by its role in the campaign system,
                from launch storytelling to performance-led social content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {study.projects.map((project, i) => (
                <article
                  key={project.title}
                  className="group min-h-[250px] border border-fine-stone bg-surface-container-lowest p-6 md:p-7 flex flex-col justify-between transition-colors duration-300 hover:bg-soft-linen"
                >
                  <div className="flex items-start justify-between gap-5">
                    <p className="font-navigation-label text-[10px] text-primary-container uppercase">
                      {project.focus}
                    </p>
                    <span className="font-section-title text-3xl italic text-outline-variant group-hover:text-primary-container transition-colors duration-300">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-section-title text-2xl leading-tight text-on-surface">
                      {project.title}
                    </h3>
                    <p className="font-body-caption text-[14px] leading-[1.7] text-on-surface-variant">
                      {project.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-20 py-14 md:py-20 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto space-y-10">
            <div className="flex items-center gap-4">
              <HiOutlinePhotograph
                className="text-2xl text-primary-container"
                aria-hidden="true"
              />
              <div>
                <p className="font-navigation-label text-navigation-label text-primary-container uppercase">
                  Image Gallery
                </p>
                <h2 className="mt-2 font-section-title text-3xl md:text-5xl text-on-surface">
                  Visual assets
                </h2>
              </div>
            </div>

            <div className="columns-1 md:columns-2 xl:columns-3 gap-5 md:gap-6">
              {study.gallery.map((image, i) => (
                <figure
                  key={image.src}
                  className="mb-5 md:mb-6 break-inside-avoid fine-stone-border bg-linen overflow-hidden"
                >
                  <div
                    className={`relative ${
                      i % 3 === 0 ? "h-[460px]" : i % 3 === 1 ? "h-[340px]" : "h-[400px]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt ?? study.client}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="p-5 font-body-caption text-[13px] leading-[1.6] text-outline">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>

        {study.videos.length > 0 && (
          <section className="px-6 md:px-10 lg:px-20 py-14 md:py-20 bg-on-surface text-inverse-on-surface">
            <div className="max-w-[1440px] mx-auto space-y-10">
              <div className="flex items-center gap-4">
                <HiOutlinePlay
                  className="text-2xl text-inverse-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-navigation-label text-navigation-label text-inverse-primary uppercase">
                    Video Gallery
                  </p>
                  <h2 className="mt-2 font-section-title text-3xl md:text-5xl">
                    Motion content
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                {study.videos.map((video) => (
                  <figure
                    key={video.src}
                    className="border border-inverse-primary/25 bg-inverse-surface overflow-hidden"
                  >
                    <video
                      src={video.src}
                      className="aspect-[4/5] w-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                    />
                    {video.caption && (
                      <figcaption className="p-5 font-body-caption text-[13px] leading-[1.6] text-inverse-on-surface/75">
                        {video.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
