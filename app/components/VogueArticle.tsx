import Image from "next/image";
import { Link as LinkIcon, Menu, Search } from "lucide-react";

const article = {
  section: "FILM & TV",
  title: "Jo Nesbø and his detective have finally got the series they deserve",
  author: "ANJA STANKOVIC",
  date: "March 31, 2026",
  heroImage: "/hero.jpg",
  inlineImage: "/inline.jpg",
  caption: "Photo: Netflix",
  body: [
    `For years now, Norwegian writer Jo Nesbø has intrigued us, unsettled us, and kept us awake at night. The series about the controversial detective Harry Hole lies at the heart of Nesbø’s aesthetic and breaks down all the prejudices and taboos of today’s crime novel. Harry Hole is a dark, complicated, at times off-putting kind of man, with a very specific way of thinking and solving cases. His mind, operating somewhere between instinct, experience, and an obsessive analysis of the killer’s psyche, gives him an edge and positions him as the best detective in Oslo’s Homicide Division.`,
    `A few years ago, the attempt to bring his novel The Snowman to the big screen did not leave the impression fans had hoped for. But with this new television adaptation, the atmosphere, tension, and psychological depth of Nesbø’s universe finally feel intact.`,
  ],
};

function VogueLogo() {
  return (
    <div className="vogue-logo" aria-label="Vogue logo">
      VOGUE
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f3f4f7]">
      <div className="mx-auto flex h-[54px] w-full max-w-[396px] items-center justify-between px-[10px]">
        <VogueLogo />

        <div className="flex items-center gap-[8px]">
          <button type="button" aria-label="Search" className="icon-button">
            <Search size={17} strokeWidth={1.9} />
          </button>

          <button type="button" className="subscribe-button">
            SUBSCRIBE
          </button>

          <button type="button" aria-label="Menu" className="icon-button">
            <Menu size={23} strokeWidth={1.9} />
          </button>
        </div>
      </div>
    </header>
  );
}

function FloatingLinkButton() {
  return (
    <button
      type="button"
      aria-label="Floating action"
      className="floating-link-button"
    >
      <LinkIcon size={18} strokeWidth={2} />
    </button>
  );
}

export function VogueArticle() {
  return (
    <main className="min-h-screen bg-[#e9edf3] text-black">
      <TopBar />

      <div className="mx-auto w-full max-w-[396px] bg-white">
        <article>
          <section className="border-b border-black/10 px-[18px] pt-[28px] text-center">
            <p className="article-kicker">FILM & TV</p>

            <h1 className="article-title">{article.title}</h1>

            <p className="article-author">{article.author}</p>

            <p className="article-date">{article.date}</p>
          </section>

          <div className="relative h-[342px] w-full overflow-hidden">
            <Image
              src={article.heroImage}
              alt="Article lead"
              fill
              priority
              sizes="396px"
              className="object-cover"
            />
          </div>

          <section className="px-[12px] pb-16 pt-7">
            <div className="article-body">
              {article.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <figure className="mt-8">
              <div className="relative h-[208px] w-full overflow-hidden">
                <Image
                  src={article.inlineImage}
                  alt="Inline article visual"
                  fill
                  sizes="396px"
                  className="object-cover"
                />
              </div>
              <figcaption className="article-caption">
                {article.caption}
              </figcaption>
            </figure>
          </section>
        </article>
      </div>

      <FloatingLinkButton />
    </main>
  );
}
