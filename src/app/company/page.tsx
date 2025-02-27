import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/company/HeroSection'
import WorkImage from '@/components/company/WorkImage'
import VisionSection from '@/components/company/VisionSection'
import TeamSection from '@/components/company/TeamSection'

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  social: {
    twitter: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Eduardo Samayoa",
    title: "Co-Founder & CEO",
    description: "Passionate about innovation, product design, and creating impactful user experiences that solve real problems. He's particularly driven by leveraging technology to improve business efficiency and shows deep interest in entrepreneurship, having founded simplo and taken leadership roles in startups where he can shape both product vision and company culture.",
    image: "/team/edu.png",
    social: {
      twitter: "https://x.com/eduardo_samayoa",
      linkedin: "https://www.linkedin.com/in/edu-samayoa1/"
    }
  },
  {
    name: "Max Abouchar",
    title: "Co-Founder & CTO",
    description: "As an AI Builder and Product Leader, Max applies the benefits of AI to enable humans to do what they're best at. With experience as a technical product manager leading product development in aerospace, data, and finance, Max combines his technical experience in order to build things that people want. After hacking and building AI agents, he identified a gap in current AI tools and agents to interact with and give the control back to humans.",
    image: "/team/max.png",
    social: {
      twitter: "https://x.com/goodinvesting1",
      linkedin: "https://www.linkedin.com/in/maxabouchar/"
    }
  }
];



export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection 
          title="Freeing up business owners valuable time to focus on their passion."
          subtitle="Empower e-commerce entrepreneurs with advanced AI agents that deliver insights, drive decisions, and do the heavy day-to-day lifting."
        />
        
        {/* Work Image Section */}
        <WorkImage 
          imageSrc="/company-cafe-sf.webp" 
          altText="Person working at a standing desk"
        />
        
        {/* Vision Section */}
        <VisionSection
          title="We're building the future of e-commerce operations: intelligent, autonomous, and deeply human-centered."
          description={{
            paragraph1: "We believe entrepreneurs should focus on creating exceptional products and experiences, not drowning in day-to-day tasks across multiple platforms.",
            paragraph2: "Through intelligent AI implementation, we're democratizing access to operational excellence for merchants of all sizes."
          }}
          imageSrc="/vertical-laptop-2.png"
          imageAlt="Computer screen showing dashboard"
        />
        
        {/* Team Section */}
        <TeamSection
          title="Get to know the people that get it all done."
          teamMembers={teamMembers}
        />

      </main>
      <Footer />
    </>
  )
}
