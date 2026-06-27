"use client";

import { useEffect, useRef, useState } from "react";
import {
  HeroSection,
  QuickCategoriesSection,
  FeaturedPropertiesSection,
  SearchByLocationSection,
  NewProjectsSection,
  SellWithUsSection,
  WhyChooseUsSection,
  FeaturedAgentsSection,
  BlogSection,
  FinalCtaSection,
} from "@/components/pages/home";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <AnimatedSection>
        <QuickCategoriesSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FeaturedPropertiesSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <SearchByLocationSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <NewProjectsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <SellWithUsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <WhyChooseUsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FeaturedAgentsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <BlogSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FinalCtaSection />
      </AnimatedSection>
    </>
  );
}
