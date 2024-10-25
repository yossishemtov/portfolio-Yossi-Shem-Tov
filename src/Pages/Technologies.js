import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    python,
    java,
    typescript,
    linux,
    csharp,
    c,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        {/* כותרת בלבן */}
        <h1 className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-white py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={c} title="c" alt="c" />
        <img src={python} title="Python" alt="Python" />
        <img src={java} title="Java" alt="Java" />
        <img src={typescript} title="TypeScript" alt="TypeScript" />
        <img src={csharp} title="cshatp" alt="csharp" />
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={redux} title="Redux" alt="Redux" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={sass} title="SASS" alt="SASS" />
        <img src={linux} title="Linux" alt="Linux" />
      </section>
      <section>
        {/* כותרת בלבן */}
        <h1 className="text-2xl pt-2 text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 pt-2">
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="GitHub" alt="GitHub" />
        <img src={npm} title="NPM" alt="NPM" />
      </section>
    </main>
  );
}

export default Technologies;
