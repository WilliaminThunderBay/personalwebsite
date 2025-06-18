import { useState, useEffect } from 'react'
import { ArrowDown, Download, Mail, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dataScientistWork from '../assets/data-scientist-work.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // 创建下载动画效果
    const button = document.querySelector('.download-btn')
    if (button) {
      button.classList.add('animate-bounce')
      setTimeout(() => {
        button.classList.remove('animate-bounce')
      }, 1000)
    }
    // 这里可以添加实际的下载逻辑
    console.log('Downloading resume...')
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.01}%`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.005}%`,
            bottom: `${mousePosition.y * 0.005}%`,
            transition: 'all 0.5s ease-out',
            animationDelay: '1s'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary animate-spin" />
                <span className="text-primary font-medium">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                <span className="inline-block hover:scale-105 transition-transform duration-200">William</span>
                <span className="block text-primary hover:scale-105 transition-transform duration-200 hover:text-blue-600">
                  (Junjun) Hu
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-xl md:text-2xl text-muted-foreground typewriter">
                  Data Scientist & Machine Learning Engineer
                </p>
              </div>
            </div>
            
            <p className={`text-lg text-muted-foreground max-w-lg transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Passionate about leveraging machine learning and data science to solve real-world problems. 
              Specializing in computer vision, natural language processing, and predictive analytics.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                size="lg" 
                className="group download-btn hover:scale-105 transition-all duration-200 hover:shadow-lg"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToAbout}
                className="group hover:scale-105 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Learn More
              </Button>
            </div>

            {/* Contact Info */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group">
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                <span>+1-807-357-8514</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group">
                <Mail className="h-4 w-4 group-hover:animate-pulse" />
                <span>jhu29@lakeheadu.ca</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative">
                <img 
                  src={dataScientistWork} 
                  alt="Data Scientist at Work" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating elements with enhanced animations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce hover:animate-spin transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                ML
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse hover:animate-ping transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                AI
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-75" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        .typewriter {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: currentColor }
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}

export default Hero

