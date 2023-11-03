import ContactForm from "@/components/homepage/ContactFormSection"
import FeatureSection from "@/components/homepage/FeatureSection"
import HomePageBanner from "@/components/homepage/HomeBanner"
import TestimonialSection from "@/components/homepage/Testimonial"

export const metadata = {
  title: "Home : Task Manager",
  description: "Home page"
}

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <FeatureSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  )
}
