import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, TrendingUp, Users, GraduationCap, PlayCircle, FileText, Video, Award } from "lucide-react";

const resources = [
  {
    title: "Trading Courses",
    description: "Comprehensive courses from beginner to advanced trading strategies",
    icon: BookOpen,
    color: "from-blue-900 to-blue-800",
    action: "Start Learning",
    stats: "50+ Courses"
  },
  {
    title: "Market Analysis",
    description: "Daily market insights and technical analysis from expert traders",
    icon: TrendingUp,
    color: "from-blue-800 to-blue-700",
    action: "View Analysis",
    stats: "Daily Updates"
  },
  {
    title: "Trading Community",
    description: "Connect with traders worldwide and share strategies",
    icon: Users,
    color: "from-blue-700 to-blue-600",
    action: "Join Community",
    stats: "10K+ Members"
  },
  {
    title: "Live Webinars",
    description: "Interactive sessions with professional trading experts",
    icon: Video,
    color: "from-blue-600 to-blue-500",
    action: "Register Now",
    stats: "Weekly Sessions"
  },
];

const learningPaths = [
  {
    title: "Beginner's Journey",
    description: "Start your trading career with foundational knowledge",
    icon: PlayCircle,
    duration: "4 weeks",
    modules: 12
  },
  {
    title: "Advanced Strategies",
    description: "Master complex trading techniques and risk management",
    icon: Award,
    duration: "8 weeks", 
    modules: 24
  },
  {
    title: "Market Psychology",
    description: "Understand the psychological aspects of successful trading",
    icon: FileText,
    duration: "6 weeks",
    modules: 18
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/10" />
      <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            📚 Learn & Grow
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Education Hub
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Master the markets with our comprehensive learning resources and expert-led training programs
          </motion.p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <motion.div
                key={resource.title}
                className="group relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {resource.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="text-xs text-primary font-semibold mb-6 bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {resource.stats}
                  </div>
                  
                  {/* CTA */}
                  <motion.button 
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {resource.action}
                      <ArrowRight className="ml-1" size={14} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm opacity-60" />
              </motion.div>
            );
          })}
        </div>

        {/* Learning Paths Section */}
        <motion.div 
          className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold mb-4 text-foreground">
              Structured Learning Paths
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow our carefully designed curricula to build expertise step by step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => {
              const IconComponent = path.icon;
              return (
                <motion.div
                  key={path.title}
                  className="bg-card/50 border border-border/30 rounded-2xl p-6 hover:bg-card/70 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground">{path.title}</h4>
                      <p className="text-xs text-muted-foreground">{path.duration} • {path.modules} modules</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center">
              <GraduationCap className="mr-2" size={20} />
              Explore Learning Center
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}