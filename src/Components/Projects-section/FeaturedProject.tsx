function FeaturedProject() {
  return (
    <div className="w-full py-10">
      <div className="w-full mb-10 px-14 border-b-[1px] pb-16 border-zinc-700 ">
        <h1 className='font-["Neue_Montreal"] text-8xl traking-tight'>
          Featured Project
        </h1>
      </div>
      <div className="cards w-full px-14 flex gap-10">
        <div className="card-container w-1/2 ">
          <span className=" py-12 font-['Neue_Montreal']"> First Project</span>
          <div className="card-component mt-10 h-[75vh] ">
            <div className="card h-full w-full bg-zinc-100 flex items-center justify-center  overflow-hidden  rounded-xl">
              <img src="src\assets\eyeBg.jpg" alt="Project" />
            </div>
          </div>
        </div>
        <div className="card-container w-1/2 ">
          <span className=" py-12 font-['Neue_Montreal']"> First Project</span>
          <div className="card-component mt-10 h-[75vh] ">
            <div className="card h-full w-full bg-zinc-100 flex items-center justify-center  overflow-hidden  rounded-xl">
              <img src="src\assets\eyeBg.jpg" alt="Project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
