import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-black">

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mt-6">Projects</h1>
        <p className="text-xl mt-4">Here are some of the projects I&apos;ve worked on:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-4 shadow-md">
            <Image src="/project1.jpg" alt="Project 1" width={300} height={200} />
            <h3 className="text-2xl mt-4">Project 1</h3>
            <p className="text-lg mt-2">Description of your first project.</p>
          </div>
          
          <div className="bg-white p-4 shadow-md">
            <Image src="/project2.jpg" alt="Project 2" width={300} height={200} />
            <h3 className="text-2xl mt-4">Project 2</h3>
            <p className="text-lg mt-2">Description of your second project.</p>
          </div>
          
          <div className="bg-white p-4 shadow-md">
            <Image src="/project3.jpg" alt="Project 3" width={300} height={200} />
            <h3 className="text-2xl mt-4">Project 3</h3>
            <p className="text-lg mt-2">Description of your third project.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
