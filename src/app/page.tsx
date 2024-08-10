"use client";
import { FlameIcon } from "@/components/flameicon";
import LottieAnimation from "@/components/lottiePeople";
import { CustomNavbar } from "@/components/navbar";
import Link from "next/link";
import { Element, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

export default function HomePage() {
  useEffect(() => {
    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          scroll.scrollTo(targetElement.offsetTop, {
            duration: 800,
            smooth: "easeInOutQuart",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) =>
      link.addEventListener("click", smoothScroll as unknown as EventListener)
    );

    return () =>
      links.forEach((link) =>
        link.removeEventListener(
          "click",
          smoothScroll as unknown as EventListener
        )
      );
  }, []);

  return (
    <div className="relative bg-white overflow-x-hidden min-h-screen">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10">
        <CustomNavbar />

        <main className="container mx-auto px-6 md:px-12 pt-20">
          <Element name="hero" className="min-h-screen flex items-center py-20">
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row gap-12 justify-evenly items-center">
                <div className="text-center lg:text-left space-y-8 animate-fade-in">
                  <Title />
                </div>
                <div className="w-full lg:w-2/3 max-w-xl">
                  <LottieAnimation />
                </div>
              </div>
            </AnimatedSection>
          </Element>

          <Element
            name="howItWorks"
            className="min-h-screen flex items-center py-20"
          >
            <AnimatedSection>
              <HowItWorks />
            </AnimatedSection>
          </Element>

          <Element
            name="pricing"
            className="min-h-screen flex justify-center items-center py-20"
          >
            <AnimatedSection>
              <Pricing />
            </AnimatedSection>
          </Element>
        </main>

        <footer className="py-8 mt-20 border-t bg-white">
          <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-base text-[#495057] mb-4 sm:mb-0">
              &copy; 2024 Resume Roaster. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link
                href="#"
                className="text-base hover:underline underline-offset-4 text-[#495057]"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-base hover:underline underline-offset-4 text-[#495057]"
                prefetch={false}
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-[#343a40] transition-transform duration-500 ease-in-out hover:scale-105">
        Roast Your LinkedIn
      </h1>
      <p className="max-w-[800px] text-[#495057] md:text-2xl transition-opacity duration-500 ease-in-out hover:opacity-90">
        Ready for a LinkedIn reality check? Let us roast your profile to
        perfection.
      </p>
      <Link
        href={"/home"}
        className="inline-flex h-12 items-center justify-center rounded-md bg-[#ff6b6b] px-10 text-lg font-medium text-white shadow transition-colors duration-300 ease-in-out hover:bg-[#ff4b4b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b]"
      >
        Start Roasting
      </Link>
    </>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-bold text-center mb-14">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="bg-[#ff6b6b] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold">1</span>
          </div>
          <h3 className="text-2xl font-semibold mb-5">Connect LinkedIn</h3>
          <p className="text-[#495057] text-lg">
            Simply connect your LinkedIn profile to our service.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-[#ff6b6b] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold">2</span>
          </div>
          <h3 className="text-2xl font-semibold mb-5">AI Analysis</h3>
          <p className="text-[#495057] text-lg">
            Our AI-powered system analyzes your LinkedIn profile for roasting
            potential.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-[#ff6b6b] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold">3</span>
          </div>
          <h3 className="text-2xl font-semibold mb-5">Get Roasted</h3>
          <p className="text-[#495057] text-lg">
            Receive a hilarious and honest review of your LinkedIn profile.
          </p>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-bold text-center mb-14">Pricing</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <PricingCard
          title="Basic Roast"
          description="Perfect for a quick roast to get you started."
          price="$ Free"
          features={[
            "AI-powered profile analysis",
            "Humor-filled feedback",
            "1 revision",
          ]}
        />
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  description,
  price,
  features,
  isPremium,
}: any) => {
  return (
    <div
      className={`bg-white shadow-gray-100  rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-200`}
    >
      <div
        className={`p-8 
             bg-gradient-to-br text-black
             bg-gray-100`}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg opacity-90 mb-4">{description}</p>
        <p className="text-4xl font-bold">{price}</p>
      </div>
      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={"/home"}
          className={`w-full inline-flex h-12 items-center justify-center rounded-xl  
              bg-red-500 text-white hover:bg-gray-700
           px-8 text-lg font-medium shadow transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff6b6b]`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
