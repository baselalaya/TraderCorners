import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp,
  Target,
  Zap,
  CheckCircle
} from "lucide-react";

export default function About() {
  const companyStats = [
    { value: "500K+", label: "Active Traders", icon: Users },
    { value: "150+", label: "Countries Served", icon: Globe },
    { value: "24/7", label: "Market Access", icon: TrendingUp },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pioneering cutting-edge technology to deliver the best trading experience",
      icon: Zap
    },
    {
      title: "Trust & Security",
      description: "Maintaining the highest standards of security and regulatory compliance",
      icon: Shield
    },
    {
      title: "Global Reach",
      description: "Providing worldwide access to global markets without geographical limitations",
      icon: Globe
    },
    {
      title: "Client Success",
      description: "Dedicated to empowering our clients with the tools and support they need to succeed",
      icon: Target
    }
  ];



  return (
    <>
      <SEO page="about" />
      <Header />
      <div className="min-h-screen pt-20">
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
                  <Building2 className="w-4 h-4 inline mr-2" />
                  About Us
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  The Professional's Gateway
                  <span className="text-primary block">to Global Markets</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  At Trader Corners, we believe opportunity shouldn't be limited by geography. We've built a global infrastructure that empowers traders worldwide to connect to the world's most liquid markets with ease.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {companyStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To democratize access to global financial markets by providing professional-grade trading technology, 
                  transparent pricing, and exceptional service to traders worldwide. We strive to break down barriers 
                  and empower individuals to achieve their financial goals through intelligent trading solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Global market access without borders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Professional-grade trading technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Transparent and competitive pricing</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-xl bg-card/30 border border-border/30 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Target className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed">
                      To become the world's most trusted and innovative trading platform, where traders of all levels 
                      can access global markets with confidence, backed by cutting-edge technology and unwavering commitment 
                      to their success.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do at Trader Corners
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full backdrop-blur-xl bg-card/30 border border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Milestones that shaped Trader Corners into a global trading partner.</p>
            </motion.div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-border" />
              {[
                { year: "2019", text: "Founded with a vision to democratize access to global markets." },
                { year: "2021", text: "Launched multi-asset connectivity and professional-grade platforms." },
                { year: "2023", text: "Scaled to 150+ countries with 99.9% platform uptime." },
              ].map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative grid md:grid-cols-2 gap-6 py-6 ${i % 2 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`${i % 2 ? 'md:col-start-2' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/60 border border-border text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {t.year}
                    </div>
                    <p className="mt-3 text-foreground">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* CTA Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center text-muted-foreground">
              Registered Address: HAMCHAKO, MUTSAMUDU, ANGOUAN, UNION OF COMOROS
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary/5 via-card/50 to-secondary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Join Our Global Community</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Become part of our growing community of successful traders. Experience the difference of professional-grade trading technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://my.tradercorners.com/en/register/account-types" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    Start Your Journey
                  </Button></a>
                  <a href="/contact"><Button variant="outline" size="lg">
                    Contact Our Team
                  </Button></a>
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
