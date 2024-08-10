"use client";
import { useState } from "react";
import { CustomNavbar } from "@/components/navbar";
import Link from "next/link";

export default function RoastPage() {
  const [linkedinLink, setLinkedinLink] = useState("");
  const [selectedTone, setSelectedTone] = useState("Professional");

  const tones = [
    "Professional",
    "Humorous",
    "Critical",
    "Friendly",
    "Sarcastic",
  ];

  return (
    <div className="relative bg-white overflow-x-hidden min-h-screen">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10">
        <CustomNavbar />

        <main className="container mx-auto px-6 md:px-12 pt-20">
          <div className="min-h-screen flex flex-col items-center justify-center py-20">
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl font-bold tracking-tighter text-[#343a40] transition-transform duration-500 ease-in-out hover:scale-105">
                Roast Your LinkedIn Profile
              </h1>
              <p className="max-w-[800px] text-[#495057] md:text-2xl transition-opacity duration-500 ease-in-out hover:opacity-90">
                Enter your LinkedIn profile link and select the tone for the
                roast.
              </p>
            </div>

            <div className="w-full lg:w-2/3 max-w-xl mt-12">
              <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-lg font-medium text-[#343a40] mb-2"
                  >
                    LinkedIn Profile Link
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    value={linkedinLink}
                    onChange={(e) => setLinkedinLink(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] transition duration-300"
                    placeholder="Paste your LinkedIn profile link here"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tone"
                    className="block text-lg font-medium text-[#343a40] mb-2"
                  >
                    Select Roast Tone
                  </label>
                  <select
                    id="tone"
                    value={selectedTone}
                    onChange={(e) => setSelectedTone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] transition duration-300"
                  >
                    {tones.map((tone) => (
                      <option
                        className="py-2 items-center ml-9"
                        key={tone}
                        value={tone}
                      >
                        {tone}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-[#ff6b6b] px-6 text-lg font-medium text-white shadow-lg transition-colors duration-300 ease-in-out hover:bg-[#ff4b4b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] focus-visible:ring-opacity-50"
                  >
                    Start Roasting
                  </button>
                </div>
              </form>
            </div>
          </div>
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
