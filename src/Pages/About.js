import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
     
      <section className="mb-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-dark-heading dark:text-light-heading">
          About Me
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-content py-4 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>

      <section className="mb-4"> 
        <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-dark-heading dark:text-light-heading">
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
              description={Description}  
            />
          ))
        )}
      </section>

      <section className="mb-4"> 
        <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-dark-heading dark:text-light-heading pt-10">
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
              description={Description}  
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
