import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <main className="flex-1 w-full max-w-6xl mt-16 px-4 text-center">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <Image
                src="/UW_formula_pp.jpg" // replace with your actual image path
                alt="Bara's Picture"
                width={200}
                height={200}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-4">Hi, my name is Bara</h1>
              <p className="text-xl">
                I'm a computer engineer interested in machine learning, artificial intelligence, and building innovative solutions using modern technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Work and Projects Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to Bara's Portfolio</h2>
          <p className="text-xl mb-8">Professional Projects, Experience, and More</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/professional_work_image.jpg" // replace with actual image path
                alt="Professional Work"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">Professional Work</h3>
              <p className="text-lg mb-4">
                Explore my work experiences, contributions, and insights gained from working in the field.
              </p>
              <a href="/experience" className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                View Experience
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/projects_image.jpg" // replace with actual image path
                alt="Projects"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">Projects</h3>
              <p className="text-lg mb-4">
                Discover the projects I've worked on, from personal to collaborative initiatives.
              </p>
              <a href="/projects" className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                Explore Projects
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
