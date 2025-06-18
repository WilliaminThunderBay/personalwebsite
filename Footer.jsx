import { useState, useEffect } from 'react'
import { ArrowUp, Heart, Sparkles, Code, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🚀' },
    { name: 'Vite', icon: '⚡' }
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating code symbols */}
        {['<>', '{}', '[]', '()', '/>', '&&', '||', '=>'].map((symbol, i) => (
          <div
            key={symbol}
            className="absolute text-white/5 font-mono text-2xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main footer content */}
        <div className="text-center space-y-8">
          {/* Profile section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-blue-400 animate-spin" />
              <h3 className="text-2xl font-bold hover:scale-105 transition-transform duration-300">
                William (Junjun) Hu
              </h3>
              <Sparkles className="h-6 w-6 text-purple-400 animate-spin" style={{ animationDirection: 'reverse' }} />
            </div>
            
            <p className="text-slate-300 max-w-md mx-auto hover:text-white transition-colors duration-300">
              Data Scientist & Machine Learning Engineer passionate about innovation and problem-solving.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-300">
            <a 
              href="mailto:jhu29@lakeheadu.ca" 
              className="hover:text-blue-400 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
            >
              <span className="group-hover:animate-pulse">📧</span>
              jhu29@lakeheadu.ca
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:+18073578514" 
              className="hover:text-green-400 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
            >
              <span className="group-hover:animate-pulse">📞</span>
              +1-807-357-8514
            </a>
            <span className="hidden sm:block">•</span>
            <span className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
              <span>📍</span>
              Thunder Bay, ON, Canada
            </span>
          </div>

          {/* Tech stack */}
          <div className="space-y-4">
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              <Code className="h-4 w-4" />
              Built with
            </p>
            <div className="flex items-center justify-center gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg group-hover:animate-bounce">{tech.icon}</span>
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-slate-400 text-sm flex items-center gap-2">
                © {currentYear} William (Junjun) Hu. All rights reserved.
              </p>

              {/* Made with love */}
              <p className="text-slate-400 text-sm flex items-center gap-2 group">
                Made with 
                <Heart className="h-4 w-4 text-red-500 group-hover:animate-pulse" /> 
                and 
                <Coffee className="h-4 w-4 text-yellow-600 group-hover:animate-bounce" />
                using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 animate-bounce" />
      </Button>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
    </footer>
  )
}

export default Footer

