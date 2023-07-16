import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg="/assets/projects/property.jpg"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg="/assets/projects/crypto.jpg"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg="/assets/projects/netflix.jpg"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg="/assets/projects/twitch.jpg"
            tech="React JS"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
