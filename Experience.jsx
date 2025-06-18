import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Experience = () => {
  const experienceData = [
    {
      title: "Research Assistant",
      company: "Lakehead University",
      location: "Thunder Bay, ON, Canada",
      period: "June 2025 - Present",
      type: "Current Position",
      description: [
        "Conducting advanced research in machine learning and data science",
        "Collaborating with faculty on cutting-edge projects",
        "Contributing to academic publications and research initiatives"
      ],
      skills: ["Research", "Machine Learning", "Data Analysis"]
    },
    {
      title: "Research Assistant",
      company: "Huainan Normal University",
      location: "Huainan, China",
      period: "Nov 2021 - May 2023",
      type: "Research",
      description: [
        "Analyzed over 1000 pieces of educational data using Pearson correlation, partial correlation, and multiple-linear regression",
        "Participated in or organized workshops/conferences related to statistics, taxation, public administration, etc.",
        "Developed data analysis methodologies for educational research"
      ],
      skills: ["Statistical Analysis", "Data Mining", "Research Methodology", "Conference Organization"]
    },
    {
      title: "Software Engineer Intern",
      company: "iFLYTEK",
      location: "Anhui Province, China",
      period: "2022 - 2023",
      type: "Internship",
      description: [
        "Developed data interfaces using GP database SQL functions and contributed to enterprise big data projects",
        "Drafted and reviewed requirement documents, coordinated release schedules, and managed workflow tracking",
        "Collaborated with cross-functional teams on enterprise software solutions"
      ],
      skills: ["SQL", "Database Management", "Project Management", "Enterprise Software"]
    },
    {
      title: "Research Assistant - Data Mining on Education",
      company: "Department of Data Science",
      location: "Huainan, China",
      period: "Apr 2023 - Jul 2023",
      supervisor: "Prof. LI Qiang",
      type: "Research Project",
      description: [
        "Created test questions for students to be tested, collected their test scores and labeled the data, and finally grouped students according to their scores",
        "Analyzed the collected data and provided suggestions for improving teaching quality",
        "Developed data collection and analysis frameworks for educational assessment"
      ],
      skills: ["Data Collection", "Educational Data Mining", "Statistical Analysis", "Quality Assessment"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in research, development, and data science.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-3 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        {exp.supervisor && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Supervisor: {exp.supervisor}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Skills Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

