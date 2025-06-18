import { Award, Trophy, Star, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Awards = () => {
  const awardsData = [
    {
      title: "2022 National Scholarship",
      organization: "Ministry of Education of the People's Republic of China",
      year: "2022",
      type: "Academic Excellence",
      description: "Prestigious national scholarship awarded for outstanding academic performance and achievements in data science studies.",
      significance: "Top-tier national recognition for academic excellence",
      icon: Trophy
    },
    {
      title: "American Mathematical Contest in Modeling - Successful Participant",
      organization: "COMAP (Consortium for Mathematics and Its Applications)",
      year: "2023",
      type: "Research Competition",
      description: "Achieved Successful Participant distinction in the internationally recognized mathematical modeling competition.",
      significance: "International recognition for mathematical modeling skills",
      icon: Award
    },
    {
      title: "Outstanding Graduates of 2024",
      organization: "Huainan Normal University",
      year: "2024",
      type: "Graduation Honor",
      description: "Recognized as one of the outstanding graduates for exceptional academic performance and contributions to the university.",
      significance: "University-level recognition for overall excellence",
      icon: Star
    }
  ]

  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Honors & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and outstanding achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => {
            const IconComponent = award.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 space-y-6">
                  {/* Icon and Year */}
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-semibold">{award.year}</span>
                    </div>
                  </div>

                  {/* Award Title */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {award.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      {award.organization}
                    </p>
                  </div>

                  {/* Type Badge */}
                  <Badge variant="outline" className="w-fit">
                    {award.type}
                  </Badge>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>

                  {/* Significance */}
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground italic">
                      {award.significance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Recognition Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Additional Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Software Copyright</h4>
                    <p className="text-sm text-muted-foreground">
                      Registration No. 2023SR0560104 for Ink Painting Style Transfer System
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Research Publication</h4>
                    <p className="text-sm text-muted-foreground">
                      Published paper in IJCA, New York, USA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards

