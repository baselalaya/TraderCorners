import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+41 44 707 83 88",
    description: "Available 24/7 for urgent trading support",
    href: "tel:+41447078388"
  },
  {
    icon: Mail,
    title: "Email Support", 
    details: "info@tradercorners.com",
    description: "General inquiries and account support",
    href: "mailto:info@tradercorners.com"
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: "Comoros, Anjouan",
    description: "Our headquarters and main operations",
    href: "#"
  },
  {
    icon: Clock,
    title: "Trading Hours",
    details: "24/5 Market Hours",
    description: "Monday 00:00 - Friday 23:59 GMT",
    href: "#"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
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
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Get In Touch
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Contact
                  <span className="text-primary block">Trader Corners</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Ready to start your trading journey? Our expert team is here to help you every step of the way.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="h-full backdrop-blur-sm bg-card/50 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="text-primary font-semibold">{item.details}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="backdrop-blur-sm bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl">Send us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this about?"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            placeholder="Tell us more about your inquiry..."
                            required
                          />
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            type="submit" 
                            className={`w-full ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : ''}`}
                            size="lg"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            {isSubmitted ? 'Message Sent!' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <Card className="backdrop-blur-sm bg-primary/5 border border-primary/20 hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-primary">Why Choose Trader Corners?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                        <div>
                          <h4 className="font-semibold">24/7 Support</h4>
                          <p className="text-sm text-muted-foreground">Round-the-clock assistance for all your trading needs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Expert Guidance</h4>
                          <p className="text-sm text-muted-foreground">Professional traders and account managers ready to help</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Regulated & Secure</h4>
                          <p className="text-sm text-muted-foreground">Fully regulated with advanced security measures</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-sm bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>Frequently Asked</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">How quickly will I get a response?</h4>
                        <p className="text-sm text-muted-foreground">We typically respond to all inquiries within 24 hours during business days.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Can I call for urgent issues?</h4>
                        <p className="text-sm text-muted-foreground">Yes! Our phone support is available 24/7 for urgent trading-related matters.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Do you offer live chat support?</h4>
                        <p className="text-sm text-muted-foreground">Live chat is available on our trading platform for registered users.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
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
                  Ready to Start Trading?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of traders who trust Trader Corners for their financial success
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.button 
                    className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Open Live Account</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                  
                  <motion.button 
                    className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Try Demo Account</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
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