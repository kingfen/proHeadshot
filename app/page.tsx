import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://replicate.com/catacolabs/headshot-pics"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Used over{" "}
          <span className="text-blue-600">15 thousand</span>
          {" "}times and counting
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Professional headshot pics{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture of your face and instantly get a Professional Headshot. 
          Join thousands of happy customers and get your next LinkedIn photo today!
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Get your Headshot
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Face</h3>
                <Image
                  alt="Original photo of a persons face"
                  src="/rafa-original.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={300}
                  height={300}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Headshot</h3>
                <Image
                  alt="Generated headshot pic"
                  width={300}
                  height={300}
                  src="/rafa-generated.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <p className="mx-auto mt-6 mb-6 max-w-xl text-lg text-slate-100 leading-7">
          Support my work with a donation!
      </p>
      <div className="flex justify-center space-x-4 mb-2">
        <Link href="https://buymeacoffee.com/lucataco" target="_blank">
        <Image
          width="200"
          height="100"
          src="/bmac.png"
          alt="Buy me a Coffee"
        />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
