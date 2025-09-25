import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, Users, Award, Clock, TrendingUp, BarChart3, PieChart, Check } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";

const courses = [
  {
    id: "beginner",
    title: "Trading Fundamentals",
    description: "Master the basics of financial markets and trading",
    level: "Beginner",
    duration: "4-6 hours",
    modules: 8,
    image: "/api/placeholder/400/250",
    topics: [
      "Introduction to Financial Markets",
      "Understanding Forex Trading",
      "Basic Chart Reading",
      "Risk Management Basics",
      "Types of Trading Orders",
      "Economic Indicators",
      "Trading Psychology",
      "Platform Navigation"
    ],
    color: "from-muted to-secondary"
  },
  {
    id: "intermediate",
    title: "Technical Analysis Mastery",
    description: "Learn advanced chart patterns and technical indicators",
    level: "Intermediate",
    duration: "8-10 hours",
    modules: 12,
    image: "/api/placeholder/400/250",
    topics: [
      "Advanced Chart Patterns",
      "Technical Indicators",
      "Support and Resistance",
      "Trend Analysis",
      "Fibonacci Retracements",
      "Volume Analysis",
      "Multiple Timeframe Analysis",
      "Trading Strategies",
      "Backtesting Methods",
      "Market Structure",
      "Price Action Trading",
      "Risk-Reward Ratios"
    ],
    color: "from-primary to-accent"
  },
  {
    id: "advanced",
    title: "Professional Trading Strategies",
    description: "Advanced strategies used by professional traders",
    level: "Advanced",
    duration: "12-15 hours",
    modules: 16,
    image: "/api/placeholder/400/250",
    topics: [
      "Algorithmic Trading",
      "Quantitative Analysis",
      "Portfolio Management",
      "Advanced Risk Management",
      "Correlation Analysis",
      "Options Trading",
      "Swing Trading Strategies",
      "Scalping Techniques",
      "News Trading",
      "Market Making",
      "Hedge Fund Strategies",
      "Performance Analytics",
      "Tax Optimization",
      "Psychology of Professional Trading",
      "Building Trading Systems",
      "Institutional Trading Methods"
    ],
    color: "from-secondary to-primary"
  }
];

const resources = [
  {
    icon: BookOpen,
    title: "E-Books & Guides",
    description: "Comprehensive guides covering all aspects of trading",
    count: "50+ Resources"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video lessons from trading experts",
    count: "200+ Videos"
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Daily market insights and technical analysis",
    count: "Daily Updates"
  },
  {
    icon: Users,
    title: "Webinars",
    description: "Live sessions with professional traders",
    count: "Weekly Events"
  }
];

const achievements = [
  { icon: Award, label: "Best Education Platform 2024" },
  { icon: Users, label: "100,000+ Students Trained" },
  { icon: TrendingUp, label: "95% Success Rate" },
  { icon: Clock, label: "24/7 Learning Support" }
];

export default function EducationPage() {
  return (
    <>
      <SEO page="about" />
      <Header />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6">
                Trading Education
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Master Trading with
                <span className="text-primary block">Expert Education</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From beginner basics to advanced strategies, our comprehensive education platform will transform you into a confident trader.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">{achievement.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured courses designed to take you from beginner to expert trader
            </p>
          </div>

          <div className="grid gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Course Image */}
                  <div className={`bg-gradient-to-br ${course.color} p-8 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <BookOpen className="w-20 h-20 mx-auto mb-4" />
                      <div className="text-2xl font-bold mb-2">{course.level}</div>
                      <div className="text-white/90">{course.modules} Modules</div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                          <Badge variant="secondary">{course.level}</Badge>
                        </div>
                        <p className="text-muted-foreground text-lg mb-4">{course.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.modules} Modules</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Topics Grid */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-foreground mb-4">What You'll Learn</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-primary hover:bg-primary/90">
                        Start Course
                      </Button>
                      <Button variant="outline">
                        View Curriculum
                      </Button>
                      <Button variant="ghost">
                        Preview Lessons
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Additional Learning Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expand your knowledge with our comprehensive library of trading resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="text-sm font-semibold text-primary">{resource.count}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Start Learning Today with Free Resources
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get started with our collection of free educational materials designed to give you a solid foundation in trading.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  { title: "Trading Basics eBook", description: "Complete guide to getting started" },
                  { title: "Market Analysis Videos", description: "Weekly technical analysis sessions" },
                  { title: "Economic Calendar", description: "Stay updated with market events" },
                  { title: "Trading Glossary", description: "Learn essential trading terminology" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Access Free Resources
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: PieChart, label: "Portfolio Analysis" },
                      { icon: TrendingUp, label: "Market Trends" },
                      { icon: BarChart3, label: "Technical Analysis" },
                      { icon: Users, label: "Community Support" }
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <IconComponent className="text-primary" size={24} />
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Begin Your Trading Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful traders who started their journey with our education platform
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button 
                  className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Free Course</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Explore All Courses</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Free Learning Path</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Certification Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
