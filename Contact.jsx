import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, MessageCircle, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Add submission animation
    const button = e.target.querySelector('button[type="submit"]')
    if (button) {
      button.classList.add('animate-pulse')
    }

    try {
      // 构建邮件内容
      const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `

      // 使用 mailto 链接发送邮件
      const mailtoLink = `mailto:jhu29@lakeheadu.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
      
      // 打开默认邮件客户端
      window.location.href = mailtoLink

      // 显示成功消息
      setSubmitStatus('success')
      
      // 重置表单
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      if (button) {
        button.classList.remove('animate-pulse')
      }
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: ['jhu29@lakeheadu.ca', 'hw96458@gmail.com'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      action: () => window.location.href = 'mailto:jhu29@lakeheadu.ca'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1-807-357-8514',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      action: () => window.location.href = 'tel:+18073578514'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Thunder Bay, ON, Canada',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      action: () => window.open('https://maps.google.com/?q=Thunder+Bay+ON+Canada', '_blank')
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white',
      action: () => console.log('GitHub profile')
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white',
      action: () => console.log('LinkedIn profile')
    },
    {
      icon: Mail,
      label: 'Email',
      color: 'hover:bg-red-500 hover:text-white',
      action: () => window.location.href = 'mailto:jhu29@lakeheadu.ca'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating message icons */}
        {[...Array(8)].map((_, i) => (
          <MessageCircle
            key={i}
            className="absolute text-primary/10 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            size={16 + Math.random() * 16}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-spin" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground hover:scale-105 transition-transform duration-300">
              Get In Touch
            </h2>
            <Sparkles className="h-6 w-6 text-primary animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 hover:text-primary transition-colors duration-300">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
                    onClick={info.action}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${info.bgColor} rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                          <info.icon className={`h-6 w-6 ${info.color} group-hover:animate-pulse`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h4>
                          {Array.isArray(info.content) ? (
                            <div className="space-y-1">
                              {info.content.map((item, idx) => (
                                <p key={idx} className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                  {item}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={social.label}
                    variant="outline" 
                    size="icon" 
                    className={`transition-all duration-300 hover:scale-110 ${social.color} ${
                      hoveredSocial === index ? 'animate-bounce' : ''
                    }`}
                    onClick={social.action}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 hover:text-primary transition-colors duration-300">
                  Send Me a Message
                </h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <Alert className="mb-6 border-green-200 bg-green-50 text-green-800 animate-fadeIn">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your default email client should open with the message pre-filled. If it doesn't open automatically, please copy the information and send it manually to jhu29@lakeheadu.ca
                    </AlertDescription>
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert className="mb-6 border-red-200 bg-red-50 text-red-800 animate-fadeIn">
                    <AlertDescription>
                      There was an error opening your email client. Please send your message directly to jhu29@lakeheadu.ca
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        className={`transition-all duration-300 ${
                          focusedField === 'firstName' ? 'ring-2 ring-primary/50 scale-105' : ''
                        }`}
                        required
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        className={`transition-all duration-300 ${
                          focusedField === 'lastName' ? 'ring-2 ring-primary/50 scale-105' : ''
                        }`}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`transition-all duration-300 ${
                        focusedField === 'email' ? 'ring-2 ring-primary/50 scale-105' : ''
                      }`}
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`transition-all duration-300 ${
                        focusedField === 'subject' ? 'ring-2 ring-primary/50 scale-105' : ''
                      }`}
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`transition-all duration-300 ${
                        focusedField === 'message' ? 'ring-2 ring-primary/50 scale-105' : ''
                      }`}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-2 group hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                    disabled={isSubmitting}
                  >
                    <Send className={`h-4 w-4 group-hover:animate-bounce ${isSubmitting ? 'animate-spin' : ''}`} />
                    {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    This will open your default email client with the message pre-filled.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick stats */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Available for Contact</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">&lt;24h</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Response Time</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Professional</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Contact

