import { useState, useEffect, useRef } from 'react'
import { MapPin, Mail, Phone, Globe, Heart, Code, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import aiMlTech from '../assets/ai-ml-tech.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
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

  const infoCards = [
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      content: 'Thunder Bay, ON, Canada',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      content: ['jhu29@lakeheadu.ca', 'hw96458@gmail.com'],
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone',
      content: '+1-807-357-8514',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 'languages',
      icon: Globe,
      title: 'Languages',
      content: 'English (Fluent), Chinese (Native)',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ]

  const skills = [
    { icon: Brain, label: 'AI Research', delay: '0s' },
    { icon: Code, label: 'Programming', delay: '0.2s' },
    { icon: Heart, label: 'Problem Solving', delay: '0.4s' }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated data scientist and machine learning engineer with a passion for innovation and problem-solving.
          </p>
          
          {/* Animated skill icons */}
          <div className="flex justify-center gap-8 mt-8">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className={`flex flex-col items-center transition-all duration-500 hover:scale-110 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: skill.delay }}
              >
                <div className="p-3 bg-primary/10 rounded-full mb-2 hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <span className="text-sm text-muted-foreground">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text and Image */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <img 
                src={aiMlTech} 
                alt="AI and Machine Learning Technology" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 dark:bg-slate-900/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-sm font-medium">AI & ML Technology</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                I am currently pursuing a Master's degree in Computer Science at Lakehead University, Canada, 
                with a focus on machine learning and data science. My academic journey has taken me across 
                multiple countries, including an exchange program in Taiwan and my undergraduate studies in China.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                With hands-on experience in developing machine learning models, conducting research, and 
                working on real-world projects, I bring a unique blend of theoretical knowledge and practical 
                skills. My expertise spans computer vision, natural language processing, and predictive analytics.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                I have published research papers, developed software with copyright protection, and received 
                prestigious scholarships for academic excellence. I'm passionate about using technology to 
                solve complex problems and make a positive impact.
              </p>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className={`space-y-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {infoCards.map((card, index) => (
              <Card 
                key={card.id}
                className={`transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                  hoveredCard === card.id ? 'ring-2 ring-primary/50' : ''
                }`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${card.bgColor} rounded-lg transition-all duration-300 ${
                      hoveredCard === card.id ? 'scale-110 rotate-12' : ''
                    }`}>
                      <card.icon className={`h-6 w-6 ${card.color} ${
                        hoveredCard === card.id ? 'animate-pulse' : ''
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 hover:text-primary transition-colors duration-200">
                        {card.title}
                      </h3>
                      {Array.isArray(card.content) ? (
                        <div className="space-y-1">
                          {card.content.map((item, idx) => (
                            <p key={idx} className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                              {item}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          {card.content}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun facts section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Countries Studied</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Research Projects</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">87%</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Average GPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

