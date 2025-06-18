import { Code, Database, Wrench, Monitor, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 90 },
        { name: "R", level: 85 },
        { name: "MATLAB", level: 75 }
      ]
    },
    {
      category: "Data Science & ML Libraries",
      icon: Database,
      skills: [
        { name: "NumPy", level: 95 },
        { name: "Pandas", level: 95 },
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 85 },
        { name: "PyTorch", level: 80 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "PyCharm", level: 85 },
        { name: "Eclipse", level: 75 }
      ]
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      category: "Operating Systems",
      icon: Monitor,
      skills: [
        { name: "Linux", level: 85 },
        { name: "Windows", level: 90 },
        { name: "macOS", level: 80 }
      ]
    }
  ]

  const getSkillColor = (level) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 80) return "bg-blue-500"
    if (level >= 70) return "bg-yellow-500"
    return "bg-gray-500"
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise across various domains of data science and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Skills as Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
              "Data Mining", "Statistical Analysis", "Predictive Analytics", "Time Series Analysis",
              "Research Methodology", "Academic Writing", "Project Management", "Team Collaboration",
              "Problem Solving", "Critical Thinking", "Innovation", "Continuous Learning"
            ].map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

