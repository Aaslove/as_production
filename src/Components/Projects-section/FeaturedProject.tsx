import RightCard from "./RightCard"
import LeftCard from "./LeftCard"
function FeaturedProject() {
  return (
    <div id="projects" className="w-full py-10">
      <div className="w-full mb-10 px-14 border-b-[1px] pb-16 border-zinc-700 ">
        <h1 className='font-["Neue_Montreal"] text-8xl traking-tight'>
          Featured Project
        </h1>
      </div>
      <div className="flex flex-col gap-20">
        <div className="cards w-full px-14 flex gap-10">
          <LeftCard project="First" src="projectsVideo\Lady.mp4" />
          <RightCard project="Second" src="projectsVideo\miniVlog.mp4" />
        </div>
        <div className="cards w-full px-14 flex gap-10">
          <LeftCard project="Thired" src="projectsVideo\ParadiseDhoni.mp4" />
          <RightCard project="Fourth" src="projectsVideo\mrunalthakur.mp4" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
