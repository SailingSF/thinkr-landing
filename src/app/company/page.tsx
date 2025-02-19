import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

const companyMission: Section = {
  id: "mission",
  title: "Our Mission",
  content: "thinkr wants to empower entrepreneurs to focus on their passion by automating e-commerce operations with intelligent AI agents that deliver insights, drive decisions, and do the heavy lifting—while keeping humans firmly in control."
};

const teamMembers: TeamMember[] = [
  {
    name: "Eduardo Samayoa",
    title: "CoFounder and CEO",
    description: "Passionate about innovation, product design, and creating impactful user experiences that solve real problems. He's particularly driven by leveraging technology to improve business efficiency and shows deep interest in entrepreneurship, having founded simplo and taken leadership roles in startups where he can shape both product vision and company culture.",
    image: "/team/edu.png"
  },
  {
    name: "Max Abouchar",
    title: "CoFounder and CTO",
    description: "As an AI Builder and Product Leader, Max applies the benefits of AI to enable humans to do what they're best at. With experience as a technical product manager leading product development in aerospace, data, and finance, Max combines his technical experience in order to build things that people want. After hacking and building AI agents, he identified a gap in current AI tools and agents to interact with and give the control back to humans.",
    image: "/team/max.png"
  }
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Mission Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {companyMission.title}
            </h2>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              {companyMission.content}
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Founders
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-600 mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-justify">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
