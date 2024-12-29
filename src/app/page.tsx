/* eslint-disable @next/next/no-img-element */
import { appStrings } from "./appStrings";
import { JobExperience } from "./components/JobExperience";
import CloudBackground from "./CloudBackground";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#e5849c] font-nunito">
      <CloudBackground />
      <div className="flex items-center justify-center">
        <div className="h-4/5 w-4/5 glass p-2 absolute top-20">
          <div className="w-full h-full border md:flex max-sm:bg-red max-md:overflow-y-scroll">
            <div className="w-1/3 flex flex-col justify-center items-center max-md:w-full max-md:mb-5 border">
              <img
                src="/profile-blush.jpg"
                alt="profile"
                className="h-[250px] w-[160px] object-cover border rounded-full"
              />

              <div className="mt-3 text-white">
                <p className="hover:text-2xl">About</p>
                <p>Software Experience</p>
                <p>Professional Projects</p>
                <p>Personal Projects</p>
                <p>Secret Page</p>
              </div>
            </div>
            <div className="w-2/3 max-md:w-full border overflow-y-scroll">
              <div className="p-5 flex flex-col">
                <p className="text-green text-3xl text-style">I'm Michelle.</p>
                <p>{appStrings.about}</p>
              </div>
              <div className="h-[17px] bg-white" />

              <div className="p-5">
                <p className="font-nunito text-3xl text-style">
                  Software Experience
                </p>
                <JobExperience
                  startDate="Jan 2024"
                  endDate="Present"
                  jobTitle="Frontend Software Engineer"
                  company="Powell's City of Books"
                  jobDuties={[
                    "Owned UX, UI, and accessibility improvements for Powell’s new e-commerce site",
                    "Collaborated with a newly-formed engineering team to establish development guidelines and define design/UX standards for MVP.",
                    "Engaged in in pair programming, pull request reviews, and ticket creation to ensure efficient, high-quality development.",
                    "Led Storybook integration for responsive, atomic design, serving as primary owner to drive consistent component use across the platform.",
                  ]}
                  skills={[
                    "Vue",
                    "TypeScript",
                    "Storybook",
                    "Tailwind",
                    "Vuetify",
                    "Node",
                    "Nuxt",
                  ]}
                />
                <JobExperience
                  startDate="Mar 2023"
                  endDate="Oct 2023"
                  jobTitle="Career Break"
                  company=""
                  jobDuties={[
                    "Personal sabbatical in order to devote time to personal and professional goals, as well as further improve as a developer. Add info about AI app here",
                  ]}
                  skills={["TypeScript", "OpenAI", "Vue", "Tailwind"]}
                />
                <JobExperience
                  startDate="May 2021"
                  endDate="March 2023"
                  jobTitle="Software Engineer"
                  company="Olio Apps"
                  jobDuties={[
                    "Independently completed the frontend for two React Native mobile apps, including the barometric pressure app designed for EarPlanes products",
                    "Led three-person team for Solar Redline, the “Yelp of solar panel installation”, managing ticket creation and workflow",
                    "Played a key role in the frontend development of a carbon reduction software platform, Carbon Title, via technical design, sprint planning, ticket creation, and project board management",
                    "Specialized in atomic design and trained new team members in the concept of Storybook-driven development",
                    "Worked closely with clients to perform manual and automated testing, fix bugs, and respond to feedback",
                  ]}
                  skills={[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Material UI",
                    "Bootstrap",
                    "Firebase",
                    "Node",
                    "GraphQL",
                    "Figma",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
