import Image from "next/image";
import Link from "next/link"; // Import Link component

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      <main className="flex-1 w-full max-w-4xl mt-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Projects I've Worked On</h1>
        <p className="text-lg mb-8">*Click the project to use the demo*</p>

        {/* Centered Project Card */}
        <div className="flex justify-center">
          <Link href="/projects/imagecls">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <Image src="/imagecls.png" alt="Project 1" width={300} height={200} className="rounded-lg" />
              <h3 className="text-2xl mt-4 font-bold">Image Classification</h3>
              <p className="text-lg mt-2 text-gray-700">Using Machine Learning to classify images</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
