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

export default function Page() {
  return (
    <>
      <HeroSection />
      <QuickCategoriesSection />
      <FeaturedPropertiesSection />
      <SearchByLocationSection />
      <NewProjectsSection />
      <SellWithUsSection />
      <WhyChooseUsSection />
      <FeaturedAgentsSection />
      <BlogSection />
      <FinalCtaSection />
    </>
  );
}
