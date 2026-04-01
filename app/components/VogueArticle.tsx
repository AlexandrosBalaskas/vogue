"use client";
import Image from "next/image";
import { Link as LinkIcon, Menu, Search } from "lucide-react";
import { DemoOverlay } from "./DemoOverlay";
import { useState } from "react";

type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      height: number;
    };

const article: {
  section: string;
  title: string;
  author: string;
  date: string;
  heroImage: string;
  content: ArticleBlock[];
} = {
  section: "FILM & TV",
  title: "Jo Nesbø and his detective have finally got the series they deserve",
  author: "ANJA STANKOVIC",
  date: "March 31, 2026",
  heroImage: "/hero.jpg",
  content: [
    {
      type: "paragraph",
      text: `Lately, I have been thinking a lot about what power means today, and who actually holds it. Reduced to its simplest form, power today comes from knowledge, information, but above all from the ability to hold someone’s attention. That is why the media, in any format, still shape the world we live in. And yet, there are also those who neither seek attention nor chase it, contemporary gods of attention who keep us locked in the same focus for years, without any need to adapt to the rhythm of the moment. A classmate of mine wrote her entire final thesis about him, I have the feeling my boyfriend vanished off the face of the earth every time he picked up one of his novels, and my family home has for years looked like a little shrine, all of his books lined up in order, from the first to the last. When he came to Belgrade last year for one of the crime fiction conventions, the city reacted as if we had gone back to the 1980s, and the shock of a global rock star arriving stirred up the entire social scene. And yes, in case it is not clear by now, I finally have a perfectly valid reason to reopen the story of Jo Nesbø.

For years now, Norwegian writer Jo Nesbø has intrigued us, unsettled us, and kept us awake at night. The series about the controversial detective Harry Hole lies at the heart of Nesbø’s aesthetic and breaks down all the prejudices and taboos of today’s crime novel. Harry Hole is a dark, complicated, at times off-putting kind of man, with a very specific way of thinking and solving cases. His mind, operating somewhere between instinct, experience, and an obsessive analysis of the killer’s psyche, gives him an edge and positions him as the best detective in Oslo’s Homicide Division.`,
    },
    {
      type: "image",
      src: "/inline-1.jpg",
      alt: "Scene from the series",
      caption: "Photo: Netflix",
      height: 208,
    },
    {
      type: "paragraph",
      text: `A few years ago, the attempt to bring his novel The Snowman to the big screen did not leave the impression we had hoped for. Now, news of Netflix’s adaptation Jo Nesbø’s Detective Hole has, as always when beloved literary characters are involved, sparked a mix of excitement and skepticism among loyal fans. Everyone who had spent years building their own version of Harry in their head wondered what he would look like once he finally had a face. The answer comes in the form of Tobias Santelmann. And it is incredibly satisfying, raw, sexy, a little lost in his own world, disheveled, and carrying an energy that balances between self-destruction and charisma, what more can a woman ask for?

From the very first shots and the accident during a police chase in which one officer loses his life because of Harry’s reckless drunk driving, it is clear that directors Øystein Karlsen and Anna Zackrisson, with Nesbø himself watchfully involved as screenwriter, pull us straight into a vortex of darkness, guilt, redemption, and addiction.`,
    },
    {
      type: "image",
      src: "/inline-2.jpg",
      alt: "Another scene",
      caption: "Photo: Netflix",
      height: 208,
    },
    {
      type: "paragraph",
      text: `In the manner of classic Norwegian noir, this crime story with elements of horror, based on the book The Devil’s Star, does not allow us to blink as scenes of red diamonds and pentagrams, ritual murders, and images we cannot ignore even if we tried flash before us. That entire rush of adrenaline is accompanied by one of the better soundtracks to come out under the Netflix banner, music created by Nick Cave and Warren Ellis.

When the story shifts to the present day, five years after the accident, everything seems calm. Harry is sober, happy, and in love with his Rakel Fauke (Pia Tjelta). Oleg is still a boy, longing for a father figure. Harry introduces him to the Ramones, chases away his fears, understands him, and the two bring out the best in each other. And just when everything seems to be in place, beautiful Elen, Harry’s colleague and one of the few people he loves and respects, dies under suspicious circumstances while on duty. That is when the curtain falls. Hole returns to all of his vices, pushes everyone away, and remains alone at rock bottom, unable to work or pull himself out of his darkness.`,
    },
    {
      type: "image",
      src: "/inline-3.jpg",
      alt: "Another scene",
      caption: "Photo: Netflix",
      height: 208,
    },
    {
      type: "paragraph",
      text: `Parallel to his physical and emotional unraveling, a serial killer leaves behind a string of ritualistic, religiously motivated murders that provoke and confuse the police. Harry balances between his addiction and his passion for solving difficult cases as he pieces together the killer’s profile. At the same time, his hated rival and colleague Tom Waaler is breathing down his neck and digging into fresh wounds: from Elen, to his collapse into alcoholism, to his breakup with Rakel and growing distance from Oleg, all the way to losing his job and the last hope that work might once again pull him back to the surface.

Tom is a story unto himself. In one moment he is creepy, slimy, a negative presence, and in the next he is deeply emotional, carrying his own grief and unhappy story. In a world that divides nothing into black and white, he is simply one of those people who know how to swim in every kind of water. The cold and magnetic Joel Kinnaman was absolutely the only possible choice. The casting in this series really is top notch.

The story leaves us little room for anything other than enjoying Harry’s obsessive fight against evil, together with the familiar team of eccentric and unmistakably original associates: from Beate Lønn, the policewoman with a gift for identifying criminals, to the loyal Øystein Eikeland, his childhood friend, all the way to Ståle Aune, the unusual psychiatrist who is the only one who knows how to shake Harry up and set him back on the right path.

We follow their journey through the underground, the streets, and the skyscrapers of mysterious, modern Oslo, accompanied by the intense and unsettling music of Nick Cave, PJ Harvey, the Ramones, and Iggy Pop, but also by Warren Ellis’s tender, emotional instrumental passages. With a phenomenal cliffhanger ending, and without overthinking it, I hope this is only one in a series of seasons in which we will continue following our favorite detective.`,
    },
  ],
};

function VogueLogo() {
  return (
    <div className="vogue-logo" aria-label="Vogue logo">
      VOGUE
    </div>
  );
}

function TopBar({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#ffffff]">
      <div className="mx-auto flex h-[54px] w-full items-center justify-between px-[10px]">
        <VogueLogo />

        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            aria-label="Search"
            className="icon-button"
            onClick={(e) => {
              e.preventDefault();
              onOpenDemo();
            }}
          >
            <Search size={17} strokeWidth={1.9} />
          </button>

          <button
            type="button"
            className="subscribe-button"
            onClick={(e) => {
              e.preventDefault();
              onOpenDemo();
            }}
          >
            SUBSCRIBE
          </button>

          <button
            type="button"
            aria-label="Menu"
            className="icon-button"
            onClick={(e) => {
              e.preventDefault();
              onOpenDemo();
            }}
          >
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
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#e9edf3] text-black">
      <TopBar onOpenDemo={() => setDemoOpen(true)} />

      <div className="mx-auto w-full bg-white">
        <article>
          <section className="border-b border-black/10 px-[18px] pt-[28px] text-center">
            <p className="article-kicker">FILM & TV</p>

            <h1 className="article-title">{article.title}</h1>

            <p className="article-author">{article.author}</p>

            <p className="article-date">{article.date}</p>
          </section>

          <div className="hero-video-wrapper">
            <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/jo-nesbo.mp4" type="video/mp4" />
            </video>
          </div>

          <section className="article-content-section">
            {article.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <div key={index} className="article-body">
                    {block.text.split("\n\n").map((para, i) => (
                      <p style={{ marginBottom: "1rem" }} key={i}>
                        {para}
                      </p>
                    ))}
                  </div>
                );
              }

              return (
                <figure key={index} className="article-figure">
                  <div
                    className="article-inline-image-wrap"
                    style={{ height: `${block.height}px` }}
                  >
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="396px"
                      className="article-inline-image"
                    />
                  </div>
                  <figcaption className="article-caption">
                    {block.caption}
                  </figcaption>
                </figure>
              );
            })}
          </section>
        </article>
      </div>

      <FloatingLinkButton />
      <section className="article-extras">
        <section className="newsletter-box">
          <h2 className="newsletter-title">Signup for our newsletter!</h2>
          <p className="newsletter-subtitle">
            Be the first to get the latest news about fashion, design and
            culture
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email Address"
              className="newsletter-input"
            />
            <button
              type="submit"
              className="newsletter-button"
              onClick={(e) => {
                e.preventDefault();
                setDemoOpen(true);
              }}
            >
              SUBSCRIBE
            </button>
          </form>

          <p className="newsletter-legal">
            By signing up you agree to our User Agreement, our Privacy Policy
            &amp; Cookie Statement to receive marketing and account-related
            emails
          </p>
        </section>

        <section className="recommends-section">
          <div className="recommends-divider" />
          <h2 className="recommends-title">EDITOR’S RECOMMENDS</h2>
          <div className="recommends-divider" />

          <div className="recommends-grid">
            {[
              {
                image: "/rec-1.jpg",
                category: "FILM & TV",
                title:
                  "La Grazia proves Sorrentino can still surprise us - and it's his most romantic film yet",
                author: "TARA DUKIĆ",
              },
              {
                image: "/rec-2.jpg",
                category: "FILM & TV",
                title: "The best new releases streaming in April",
                author: "TARA DUKIĆ",
              },
              {
                image: "/rec-3.jpg",
                category: "FILM & TV",
                title:
                  "The finale of Love Story managed to preserve a beautiful memory despite the tragedy",
                author: "ANJA STANKOVIĆ",
              },
              {
                image: "/rec-4.jpg",
                category: "FILM & TV",
                title:
                  "Love Perfect Strangers? You’ll love the director’s latest",
                author: "TARA DUKIĆ",
              },
            ].map((item, index) => (
              <article key={index} className="recommend-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="recommend-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setDemoOpen(true);
                  }}
                />
                <p className="recommend-category">{item.category}</p>
                <h3 className="recommend-headline">{item.title}</h3>
                <p className="recommend-author">{item.author}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer-logo">VOGUE</div>
          <p className="site-footer-text">
            The latest fashion news, beauty coverage, fashion and design week
            updates, celebrity style and culture reviews on Vogueadria.com
          </p>

          <div className="site-footer-line" />

          <div
            className="site-footer-socials"
            onClick={(e) => {
              e.preventDefault();
              setDemoOpen(true);
            }}
          >
            <span>f</span>
            <span>◎</span>
            <span>♪</span>
          </div>

          <button
            type="button"
            className="site-footer-brand-button"
            onClick={(e) => {
              e.preventDefault();
              setDemoOpen(true);
            }}
          >
            VOGUE
          </button>

          <p className="site-footer-legal">
            © 2026 Condé Nast. All rights reserved. Use of this site constitutes
            acceptance of our User Agreement and Privacy Policy and Cookie
            Statement and Your California Privacy Rights. Vogue may earn a
            portion of sales from products that are purchased through our site
            as part of our Affiliate Partnerships with retailers. The material
            on this site may not be reproduced, distributed, transmitted, cached
            or otherwise used, except with the prior written permission of Condé
            Nast. Ad Choices
          </p>
        </footer>
        <DemoOverlay open={demoOpen} />
      </section>
    </main>
  );
}
