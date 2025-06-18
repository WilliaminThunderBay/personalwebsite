import { GraduationCap, Award, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import universityStudy from '../assets/university-study.jpg'

const Education = () => {
  const educationData = [
    {
      school: "Lakehead University, Canada",
      degree: "Master of Computer Science",
      period: "Sep 2024 - Present",
      gpa: "87/100",
      type: "Course based",
      courses: ["Computer Vision", "Natural Language Processing", "Data Science", "Programming Language", "Graduate Seminar", "Research Methodology"],
      highlight: "Current Studies"
    },
    {
      school: "Huafan University, Taiwan",
      degree: "Exchange Programme",
      department: "Smart Life Technology Department",
      period: "Sep 2023 - Jan 2024",
      gpa: "95/100",
      courses: ["Android Development", "Machine Learning", "Artificial Intelligence", "Web Programming"],
      highlight: "Exchange Student"
    },
    {
      school: "Huainan Normal University, China",
      degree: "Bachelor of Data Science and Big Data Technology",
      period: "Sep 2020 - July 2024",
      gpa: "87/100",
      courses: ["Programming in Python", "Operating System", "Data Structure", "Computer Network", "Hadoop Big Data Technology", "Database Principle and Application", "Unstructured Database", "Data Mining"],
      highlight: "Outstanding Graduates of 2024",
      award: "2022 National Scholarship by the Ministry of Education of the People's Republic of China"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey across multiple countries and institutions.
          </p>
        </div>

        {/* Education Background Image */}
        <div className="mb-12">
          <img 
            src={universityStudy} 
            alt="University Students Studying" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {edu.school}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {edu.degree}
                        </p>
                        {edu.department && (
                          <p className="text-muted-foreground">
                            {edu.department}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Awards */}
                    {edu.award && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Award className="h-4 w-4" />
                        <span className="font-medium">{edu.award}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">GPA</div>
                      <div className="text-2xl font-bold text-primary">{edu.gpa}</div>
                      {edu.type && (
                        <div className="text-sm text-muted-foreground">({edu.type})</div>
                      )}
                    </div>

                    <Badge variant="outline" className="w-fit">
                      {edu.highlight}
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

export default Education

