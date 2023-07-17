import Image from 'next/image';

type Props = {
  title: string;
  backgroundImg: string;
  tech: string;
};

const ProjectItem = ({ title, backgroundImg, tech }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] aspect-video">
      <Image
        src={backgroundImg}
        alt="project image"
        fill
        className="rounded-xl group-hover:opacity-10 object-cover !static"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
