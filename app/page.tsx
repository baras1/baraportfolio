import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black font-sans">
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <Image src="/UW_formula_pp.jpg" alt="Profile Photo" width={200} height={200} className="rounded-full" />
        <h1 className="text-4xl font-bold mt-6">Hello, I&apos;m Bara</h1>
        <p className="text-xl mt-4">A software engineer with a passion for building machine learning models</p>
      </main>
    </div>
  );
}
