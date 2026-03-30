/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'publications', label: 'Publications' },
];

const generateBlob = () => {
  const r = () => Math.floor(Math.random() * 40) + 30; // Random percentage between 30% and 70%
  return `${r()}% ${r()}% ${r()}% ${r()}% / ${r()}% ${r()}% ${r()}% ${r()}%`;
};

export default function App() {
  const [blobShape, setBlobShape] = useState('40% 60% 70% 30% / 40% 50% 60% 50%');

  useEffect(() => {
    setBlobShape(generateBlob());
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full"
        style={{
          background:
            'linear-gradient(to bottom, #000000 0px, #000000 max(calc(100svh - 400px), 350px), #F4F4F0 max(calc(100svh - 300px), 450px), #F4F4F0 100%)',
        }}
      >
        <div className="flex flex-col px-8 py-8 md:px-12 md:py-12 max-w-3xl mx-auto min-h-screen">
          <header className="flex-grow flex flex-col justify-start pt-16 pb-12">
            <h1 className="animate-fade-up font-serif text-[12vw] sm:text-[64px] md:text-[84px] leading-[1.1] tracking-tight text-paper opacity-0">
              hello, <br className="block md:hidden" />
              my name is / <br />
              <span className="italic">Kirill</span>
            </h1>
          </header>

          <div className="w-full border-t border-ink mb-0"></div>

          <nav className="flex flex-col w-full">
            {sections.slice(1).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group relative flex items-center justify-end py-6 md:py-8 px-4 md:px-8 border-b border-ink/20 hover:text-paper hover:border-ink transition-all duration-500"
                onMouseEnter={(e) => {
                  const bg = e.currentTarget.querySelector<HTMLElement>('.blob-bg');
                  if (bg) bg.style.borderRadius = generateBlob();
                }}
                onMouseLeave={(e) => {
                  const bg = e.currentTarget.querySelector<HTMLElement>('.blob-bg');
                  if (bg) bg.style.borderRadius = generateBlob();
                }}
              >
                <div
                  className="blob-bg absolute inset-2 md:inset-3 bg-ink opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-0"
                  style={{ borderRadius: '20px' }}
                ></div>
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-serif italic tracking-wide text-right">
                    {section.label}
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-paper px-8 py-12 md:py-20 md:px-12 max-w-3xl mx-auto">
        <header className="w-full flex justify-end items-center mb-12">
          <span className="font-serif italic text-[#737373] text-sm">02 / About</span>
        </header>

        <div
          className="w-48 md:w-64 aspect-[4/5] relative mb-16 overflow-hidden transition-all duration-1000 ease-in-out"
          style={{ borderRadius: blobShape, transform: 'translateZ(0)' }}
          onMouseEnter={() => setBlobShape(generateBlob())}
          onMouseLeave={() => setBlobShape(generateBlob())}
        >
          <img
            src="/images/compressed_portrait.webp"
            alt="Kirill Denisov"
            className="w-full h-full object-cover grayscale contrast-125 brightness-100 hover:scale-110 transition-transform duration-1000 ease-in-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-[48px] md:text-[64px] leading-[0.9] tracking-tight">Kirill Denisov.</h2>
          <article className="max-w-2xl flex flex-col gap-6">
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:leading-[0.8] first-letter:pr-2 first-letter:pt-1 first-letter:text-ink font-serif text-[18px] md:text-[20px] leading-relaxed">
              Longevity researcher and PhD Candidate in Translational AI.
            </p>
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:leading-[0.8] first-letter:pr-2 first-letter:pt-1 first-letter:text-ink font-serif text-[18px] md:text-[20px] leading-relaxed">
              Currently working on ML based biomarkers for aging, mental health and cognition at Jan Gruber lab.
            </p>
          </article>

          <div className="w-full border-t border-ink pt-8 mt-4">
            <h3 className="font-sans text-[11px] tracking-[0.2em] text-[#737373] mb-8 flex items-center gap-2">
              <Briefcase className="w-3 h-3" />
              Selected Experience
            </h3>
            <ul className="flex flex-col gap-8">
              {[
                {
                  title: 'Research Associate, NUS Medicine',
                  period: '2026—Present',
                  current: true,
                  description:
                    'Translational AI research focusing on ML-based biomarkers for aging, mental health, and cognition.',
                },
                {
                  title: 'Senior Researcher, Gero',
                  period: '2020—2026',
                  description:
                    'Led research initiatives in aging and longevity, utilizing machine learning to discover thermodynamic control variables and epigenetic clocks.',
                },
                {
                  title: 'Undergraduate Researcher, RAS',
                  period: '2018—2020',
                  description:
                    'Participated in foundational research projects at the Russian Academy of Sciences during undergraduate studies.',
                },
              ].map((exp, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className={`${exp.current ? 'text-primary' : 'text-ink'} text-lg leading-none mt-1`}>—</span>
                  <div className="flex flex-col w-full gap-1">
                    <span className="font-bold text-[16px] md:text-[18px]">{exp.title}</span>
                    <span className="text-[14px] text-[#737373] mb-1">{exp.period}</span>
                    {exp.description && (
                      <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/80">{exp.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full border-t border-ink pt-8 mt-12">
            <h3 className="font-sans text-[11px] tracking-[0.2em] text-[#737373] mb-8 flex items-center gap-2">
              <GraduationCap className="w-3 h-3" />
              Education
            </h3>
            <ul className="flex flex-col gap-8">
              {[
                {
                  title: 'PhD Candidate in Translational AI, NUS',
                  period: '2026—2030',
                  description:
                    'National University of Singapore. Focusing on ML-based biomarkers for aging and mental health.',
                },
                {
                  title: 'MS in Bioinformatics, MSU',
                  period: '2017—2023',
                  description: 'Lomonosov Moscow State University. Specialized in Bioengineering and Bioinformatics.',
                },
              ].map((edu, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-ink text-lg leading-none mt-1">—</span>
                  <div className="flex flex-col w-full gap-1">
                    <span className="font-bold text-[16px] md:text-[18px]">{edu.title}</span>
                    <span className="text-[14px] text-[#737373] mb-1">{edu.period}</span>
                    {edu.description && (
                      <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/80">{edu.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-paper px-8 py-12 md:py-20 md:px-12 max-w-3xl mx-auto flex flex-col items-start"
      >
        <h2 className="font-serif italic text-[64px] md:text-[84px] leading-[0.9] tracking-tight mb-12 md:mb-24">
          Connect.
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 w-full mb-16 md:mb-32">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.2em] text-[#737373] uppercase font-sans font-semibold">
              Professional
            </span>
            <a
              href="https://www.linkedin.com/in/kirilldenisov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-[32px] md:text-[40px] uppercase border-b border-ink/30 pb-1 hover:border-ink transition-colors w-fit leading-none"
            >
              LINKEDIN
            </a>
          </div>
          <div className="flex flex-col gap-2 mt-16">
            <span className="text-[10px] tracking-[0.2em] text-[#737373] uppercase font-sans font-semibold">
              Thought
            </span>
            <a
              href="https://x.com/kirilledition"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-[32px] md:text-[40px] border-b border-ink/30 pb-1 hover:border-ink transition-colors w-fit leading-none"
            >
              X.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.2em] text-[#737373] uppercase font-sans font-semibold">
              Academic
            </span>
            <a
              href="https://scholar.google.com/citations?hl=en&user=bU3x6fkAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-[32px] md:text-[40px] border-b border-ink/30 pb-1 hover:border-ink transition-colors w-fit leading-none"
            >
              Scholar
            </a>
          </div>
          <div className="flex flex-col gap-2 mt-16">
            <span className="text-[10px] tracking-[0.2em] text-[#737373] uppercase font-sans font-semibold">Code</span>
            <a
              href="https://github.com/kirilldenisov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-[32px] md:text-[40px] uppercase border-b border-ink/30 pb-1 hover:border-ink transition-colors w-fit leading-none"
            >
              GITHUB
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.2em] text-[#737373] uppercase font-sans font-semibold">
              Correspondence
            </span>
            <a
              href="mailto:kirill.denisov700@gmail.com"
              className="font-serif text-[32px] md:text-[40px] uppercase border-b border-ink/30 pb-1 hover:border-ink transition-colors w-fit leading-none"
            >
              EMAIL
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <a
            href="#"
            className="font-sans font-bold text-[32px] md:text-[48px] uppercase tracking-tight border-b-4 border-ink pb-2 hover:opacity-70 transition-opacity leading-none"
          >
            BOOK A CALL
          </a>
          <span className="text-[10px] tracking-[0.2em] text-[#737373] uppercase font-sans font-semibold">
            Consultation availability limited
          </span>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="bg-paper px-8 py-12 md:py-20 md:px-12 max-w-3xl mx-auto">
        <h2 className="font-serif text-[36px] md:text-[48px] text-ink leading-none mb-12 tracking-tight">
          Publications.
        </h2>
        <div className="flex flex-col border-t border-ink">
          {[
            {
              year: '2025',
              title:
                'AI-Driven Identification of Exceptionally Efficacious Polypharmacological Compounds That Extend the Lifespan of Caenorhabditis elegans',
              authors: (
                <>
                  Konstantin Avchaciov, Khalyd J. Clay, <span className="font-bold">Kirill A. Denisov</span>, Olga
                  Burmistrova, Michael Petrascheck, Peter O. Fedichev
                </>
              ),
              journal: 'Aging Cell',
              doi: '10.1111/acel.70060',
            },
            {
              year: '2025',
              title: 'LinAge2: providing actionable insights and benchmarking with epigenetic clocks',
              authors: (
                <>
                  Sheng Fong, <span className="font-bold">Kirill A. Denisov</span>, Anastasiia A. Nefedova, Brian K.
                  Kennedy, Jan Gruber
                </>
              ),
              journal: 'npj Aging',
              doi: '10.1038/s41514-025-00221-4',
            },
            {
              year: '2024',
              title:
                'Discovery of Thermodynamic Control Variables that Independently Regulate Healthspan and Maximum Lifespan',
              authors: (
                <>
                  <span className="font-bold">Kirill A. Denisov</span>, Jan Gruber, Peter O. Fedichev
                </>
              ),
              journal: 'bioRxiv',
              doi: '10.1101/2024.12.01.626230',
            },
            {
              year: '2024',
              title: 'Aging Clocks, Entropy, and the Challenge of Age Reversal',
              authors: (
                <>
                  Andrei E. Tarkhov, <span className="font-bold">Kirill A. Denisov</span>, Peter O. Fedichev
                </>
              ),
              journal: 'Aging Biology',
              doi: '10.59368/agingbio.20240031',
            },
          ].map((pub, i) => (
            <a
              key={i}
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-start min-h-[100px] border-b border-ink/20 py-8 px-4 md:px-8 transition-all duration-500 hover:text-paper hover:border-ink"
              onMouseEnter={(e) => {
                const bg = e.currentTarget.querySelector<HTMLElement>('.blob-bg');
                if (bg) bg.style.borderRadius = generateBlob();
              }}
              onMouseLeave={(e) => {
                const bg = e.currentTarget.querySelector<HTMLElement>('.blob-bg');
                if (bg) bg.style.borderRadius = generateBlob();
              }}
            >
              <div
                className="blob-bg absolute inset-2 md:inset-3 bg-ink opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-0"
                style={{ borderRadius: '20px' }}
              ></div>
              <div className="relative z-10 w-1/5 shrink-0 pr-4 pt-1">
                <p className="font-sans text-[12px] md:text-[14px] text-ink/50 tracking-wider group-hover:text-paper/70 transition-colors duration-500">
                  {pub.year}
                </p>
              </div>
              <div className="relative z-10 w-3/5 pr-4 flex flex-col gap-3">
                <p className="font-serif text-[20px] md:text-[24px] leading-tight">{pub.title}</p>
                <p className="font-sans text-[13px] md:text-[15px] text-ink/70 leading-snug group-hover:text-paper/90 transition-colors duration-500">
                  {pub.authors}
                </p>
              </div>
              <div className="relative z-10 w-1/5 shrink-0 text-right pt-1">
                <p className="font-serif text-[13px] md:text-[15px] tracking-wider italic text-ink/70 group-hover:text-paper/70 transition-colors duration-500">
                  {pub.journal}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
