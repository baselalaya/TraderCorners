import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle, Award, Zap, Globe, Users } from "lucide-react";

const securityFeatures = [
  {
    title: "Bank-Level Encryption",
    description: "256-bit SSL encryption protects all your data and transactions",
    icon: Lock,
    color: "from-blue-900 to-blue-800"
  },
  {
    title: "Regulatory Compliance",
    description: "Fully licensed and regulated by top financial authorities worldwide",
    icon: Award,
    color: "from-blue-800 to-blue-700"
  },
  {
    title: "Two-Factor Authentication",
    description: "Advanced 2FA security ensures only you can access your account",
    icon: Shield,
    color: "from-blue-700 to-blue-600"
  },
  {
    title: "Real-Time Monitoring",
    description: "24/7 fraud detection and suspicious activity monitoring",
    icon: Eye,
    color: "from-blue-600 to-blue-500"
  },
];

const trustMetrics = [
  {
    icon: Users,
    value: "500K+",
    label: "Trusted Traders",
    description: "Active users worldwide"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries Served",
    description: "Global regulatory compliance"
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Guaranteed availability"
  },
  {
    icon: CheckCircle,
    value: "$2.5B+",
    label: "Funds Protected",
    description: "Client assets secured"
  }
];

export default function SecuritySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      
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
            🔒 Maximum Security
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Security & Trust
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Your funds and data are protected by industry-leading security measures and regulatory compliance
          </motion.p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm opacity-60" />
              </motion.div>
            );
          })}
        </div>

        {/* Trust Metrics Section */}
        <motion.div 
          className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold mb-4 text-foreground">
              Trusted by Traders Worldwide
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to security and transparency has earned the trust of hundreds of thousands of traders globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <div className="font-display text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {metric.value}
                  </div>
                  <div className="text-muted-foreground font-semibold mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    {metric.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Shield className="text-primary" size={16} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Lock className="text-primary" size={16} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary" size={16} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">FCA Regulated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}