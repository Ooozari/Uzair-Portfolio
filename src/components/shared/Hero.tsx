import React from "react";
import Image from "next/image";
import {
  Pakistan,
  Github,
  GoogleGmail,
  LinkedinIcon,
  FileDownload,
} from "@/svgs/Icons";
import { Heading, Paragraph } from "../ui/typography";
import data from "@/data/data.json";
import { Button } from "../ui/button";
import { SocialIcon } from "@/components/shared";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-[20px] py-[100px] overflow-hidden bg-[#f4f7fb] dark:bg-[#1e1e2e]">
      {/* Blobs */}
      <div className="absolute inset-0 z-1">
  {/* Single Formal Blob */}
  <div
    className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2
         w-full max-w-[250px] md:max-w-[300px] 
             h-full max-h-[250px] md:max-h-[300px]
         bg-gradient-to-r from-gray-300 via-blue-200 to-indigo-300
         rounded-full blur-3xl opacity-60 animate-pulse"
  />
</div>


      {/* Hero content */}
      <div className="w-full max-w-[640px] flex flex-col relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 border-input rounded-full bg-blue-500/10 border-2 p-1 mr-4 pointer-events-none">
            <Image
              src="/pp.png"
              alt="Uzair Asif"
              width={64}
              height={64}
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <div>
            <Heading level="md" className="font-bold text-light text-start">
              {data.hero.name}
            </Heading>
            <div className="flex items-center gap-1">
              <Paragraph
                size="md"
                className="text-light-muted font-medium flex items-center gap-1"
              >
                {data.hero.location} <Pakistan />
              </Paragraph>
            </div>
          </div>
        </div>

        <Heading
          level="h1"
          className="text-light font-extrabold mb-2 text-start"
        >
          <span className="text-primary [text-shadow:1px_1px_0_rgba(249,115,22,0.8),-1px_-1px_0_rgba(249,115,22,0.8)] dark:[text-shadow:1px_1px_0_rgba(249,115,22,1),-1px_-1px_0_rgba(249,115,22,1)]">
            {data.hero.role}
          </span>{" "}
          Developer
        </Heading>

        <Paragraph size="xl" className="text-light-muted mb-6 text-start">
          {data.hero.tagline}
        </Paragraph>

        <div className="flex gap-3 items-center">
          <a href="/resume.pdf" download>
            <Button className="flex items-center">
              <span>
                <FileDownload size="12" className="text-light" />
              </span>
              Resume
            </Button>
          </a>
          <div className="flex gap-1 items-center">
            <SocialIcon href={data.contact.github}>
              <Github size={24} className="shake-on-hover text-light" />
            </SocialIcon>
            <SocialIcon href={data.contact.linkedin}>
              <LinkedinIcon size={24} className="shake-on-hover" />
            </SocialIcon>
            <SocialIcon href={data.contact.email}>
              <GoogleGmail size={24} className="shake-on-hover" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
