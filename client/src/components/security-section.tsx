import { Shield, Lock, Award, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: Shield,
    title: "Protection Fund",
    description: "Up to €20,000 coverage per client",
  },
  {
    icon: Lock,
    title: "Cold Storage",
    description: "Offline crypto asset protection",
  },
  {
    icon: Award,
    title: "Tier-1 Licensed",
    description: "Regulated by top authorities",
  },
  {
    icon: UserCheck,
    title: "Data Protection",
    description: "Military-grade encryption",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Security & Trust</h2>
          <p className="text-xl text-muted-foreground">
            Your funds and data are protected by industry-leading security
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="scroll-reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="neumorphic rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto mb-4 glow-animation">
                      <feature.icon className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-space text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="scroll-reveal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Digital security and financial protection" 
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
