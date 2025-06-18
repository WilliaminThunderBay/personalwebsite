import { useState, useEffect, useRef } from 'react'
import { Code, ExternalLink, Calendar, Award, Github, Star, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import mlVisualization from '../assets/ml-visualization.jpg'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [animatedCards, setAnimatedCards] = useState(new Set())
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCardHover = (projectIndex) => {
    setHoveredProject(projectIndex)
    setAnimatedCards(prev => new Set([...prev, projectIndex]))
  }

  const projectsData = [
    {
      title: "Style Transfer System of Ink Painting Based on Convolutional Neural Network",
      period: "Apr 2022 - May 2024",
      type: "Provincial Approval Project",
      description: "Developed an innovative ink painting style transfer system using deep learning techniques. Successfully applied for software copyright protection.",
      technologies: ["Computer Vision", "Convolutional Neural Networks", "Deep Learning", "Python", "TensorFlow"],
      achievements: [
        "Obtained software copyright (Registration No. 2023SR0560104)",
        "Provincial approval project under Anhui Innovation Program",
        "Implemented advanced neural style transfer algorithms"
      ],
      links: [
        { type: "Copyright", url: "#", label: "Software Copyright", icon: Award }
      ],
      status: "completed",
      impact: "High"
    },
    {
      title: "American Mathematical Contest in Modeling",
      period: "Nov 2022 - Jun 2023",
      type: "Research Publication",
      description: "Participated in the prestigious mathematical modeling contest and achieved Successful Participant distinction. Published research paper in international journal.",
      technologies: ["Mathematical Modeling", "Data Analysis", "Statistical Methods", "Research Writing"],
      achievements: [
        "Awarded Successful Participant distinction",
        "Published paper in IJCA, New York, USA",
        "Demonstrated advanced problem-solving skills"
      ],
      links: [
        { type: "Paper", url: "https://www.researchsquare.com/article/rs-4015563/v1", label: "Research Paper", icon: ExternalLink }
      ],
      status: "published",
      impact: "Medium"
    },
    {
      title: "Machine Learning Models for Ontario Electricity Market Prediction",
      period: "Jun 2023 - Sep 2023",
      type: "Research Project",
      supervisor: "Prof. LI Qiang",
      description: "Developed comprehensive machine learning models to forecast Ontario energy consumption and electricity market prices, optimizing smart grid efficiency and sustainability.",
      technologies: ["Machine Learning", "Time Series Analysis", "Python", "Scikit-learn", "Data Visualization"],
      achievements: [
        "Built predictive models for electricity market prices",
        "Analyzed historical data and influencing factors",
        "Provided optimization suggestions for smart grid efficiency",
        "Contributed to sustainable energy research"
      ],
      links: [
        { type: "Research", url: "#", label: "Project Details", icon: Github }
      ],
      status: "completed",
      impact: "High"
    },
    {
      title: "Machine Learning Models for Ontario Electricity Demand and Price Prediction",
      period: "Jun 2025",
      type: "Ongoing Research",
      description: "Advanced research project focusing on predicting electricity demand and pricing patterns using state-of-the-art machine learning techniques.",
      technologies: ["Advanced ML", "Predictive Analytics", "Time Series Forecasting", "Python", "Deep Learning"],
      achievements: [
        "Developing next-generation prediction models",
        "Implementing advanced forecasting algorithms",
        "Contributing to energy market research"
      ],
      links: [],
      status: "ongoing",
      impact: "High"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'ongoing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'published': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getImpactIcon = (impact) => {
    switch (impact) {
      case 'High': return <Zap className="h-4 w-4 text-red-500" />
      case 'Medium': return <Star className="h-4 w-4 text-yellow-500" />
      default: return <Star className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 transition-transform duration-300">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my research projects and technical achievements.
          </p>
        </div>

        {/* Projects Background Image */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative group cursor-pointer">
            <img 
              src={mlVisualization} 
              alt="Machine Learning Data Visualization" 
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 dark:bg-slate-900/90 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-lg font-semibold">Machine Learning Visualization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer group ${
                hoveredProject === index ? 'scale-105 ring-2 ring-primary/50' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                height: 'fit-content'
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-primary/10 rounded-lg transition-all duration-300 ${
                    hoveredProject === index ? 'scale-110 rotate-12 bg-primary/20' : ''
                  }`}>
                    <Code className={`h-6 w-6 text-primary ${
                      hoveredProject === index ? 'animate-pulse' : ''
                    }`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.type}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {getImpactIcon(project.impact)}
                        <span className="text-xs text-muted-foreground">{project.impact} Impact</span>
                      </div>
                    </div>
                    {project.supervisor && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Supervisor: {project.supervisor}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className={`transition-all duration-300 hover:scale-110 cursor-pointer ${
                          animatedCards.has(index) ? 'animate-pulse' : ''
                        }`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className={`text-muted-foreground flex items-start gap-2 text-sm transition-all duration-300 hover:text-foreground hover:translate-x-2 ${
                          animatedCards.has(index) ? 'animate-fadeInLeft' : ''
                        }`}
                        style={{ animationDelay: `${achIndex * 150}ms` }}
                      >
                        <Award className="h-3 w-3 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="h-3 w-3" />
                        {link.label}
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project statistics */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Projects Completed</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">1</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Software Copyright</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Research Papers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Technologies Used</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Projects

