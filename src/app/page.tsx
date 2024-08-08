"use client";
import { FlameIcon } from "@/components/flameicon";
import LottieAnimation from "@/components/lottiePeople";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Fixed background gradient layers */}
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 overflow-y-auto h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <FlameIcon className="h-6 w-6 text-[#ff6b6b]" />
            <span className="sr-only">Resume Roaster</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#495057] transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              How it Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#495057] transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#495057] transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#495057] transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </header>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-9 justify-evenly items-center">
              <div className="text-center lg:text-left space-y-6 animate-fade-in">
                <Title />
              </div>
              <div className="w-full lg:w-auto">
                <LottieAnimation />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-[#495057]">&copy; 2024 Resume Roaster. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#495057]" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#495057]" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

const Title = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#343a40] transition-transform duration-500 ease-in-out hover:scale-105">
        Roast Your Resume
      </h1>
      <p className="max-w-[700px] text-[#495057] md:text-xl transition-opacity duration-500 ease-in-out hover:opacity-90">
        Get a hilarious and honest review of your resume from our team of
        professional resume roasters.
      </p>
      <Link
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors duration-300 ease-in-out hover:bg-[#ff4b4b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b]"
        prefetch={false}
      >
        Start Roasting
      </Link>
    </>
  );
};
