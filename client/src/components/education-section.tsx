import { Button } from "@/components/ui/button";
import { Video, Calendar, Newspaper, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    icon: Video,
    title: "Trading Videos",
    description: "Step-by-step tutorials from beginner to advanced",
    color: "bg-red-500/20",
    iconColor: "text-red-400",
    action: "Watch Now",
  },
  {
    icon: Calendar,
    title: "Webinars",
    description: "Live sessions with market experts",
    color: "bg-blue-500/20",
    iconColor: "text-blue-400",
    action: "Join Live",
  },
  {
    icon: Newspaper,
    title: "Market News",
    description: "Daily analysis and market updates",
    color: "bg-green-500/20",
    iconColor: "text-green-400",
    action: "Read Now",
  },
  {
    icon: BookOpen,
    title: "eBooks",
    description: "Comprehensive trading guides and strategies",
    color: "bg-purple-500/20",
    iconColor: "text-purple-400",
    action: "Download",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Education Hub</h2>
          <p className="text-xl text-muted-foreground">
            Master the markets with our comprehensive learning resources
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="neumorphic rounded-2xl p-6 text-center glow-hover scroll-reveal group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <resource.icon className={resource.iconColor} size={32} />
              </div>
              <h3 className="font-space text-xl font-bold mb-3">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <button className="text-primary hover:text-foreground transition-colors font-medium">
                {resource.action} <ArrowRight className="inline ml-1" size={16} />
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12 scroll-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-cyber text-primary-foreground hover:shadow-lg px-8 py-4"
          >
            <GraduationCap className="mr-2" size={20} />
            Explore Learning Center
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
