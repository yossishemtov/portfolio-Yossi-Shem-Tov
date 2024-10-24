import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* סעיף ה-About עם מרווח תחתון */}
      <section className="mb-4"> {/* הפחתת המרווח בין About ל-Work Experience */}
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-4 lg:max-w-3xl">{personalDetails.about}</p>
      </section>

      {/* סעיף ה-Work Experience עם מרווח תחתון */}
      <section className="mb-4"> {/* הפחתת המרווח בין Work Experience ל-Education */}
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration, Description }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              description={Description}  // Added description here
            />
          ))
        )}
      </section>

      {/* סעיף ה-Education עם מרווח תחתון */}
      <section className="mb-4"> {/* הפחתת המרווח לפני הסעיף האחרון */}
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration, Description }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              description={Description}  // Added description here
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
