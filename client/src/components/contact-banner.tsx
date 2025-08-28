import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+41 44 707 83 88",
    description: "24/7 Trading Support",
    href: "tel:+41447078388",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@tradercorners.com",
    description: "Get a response within 24h",
    href: "mailto:info@tradercorners.com",
    color: "from-green-500 to-green-600"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Comoros, Anjouan",
    description: "Our headquarters",
    href: "#",
    color: "from-purple-500 to-purple-600"
  }
];

export default function ContactBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 inline mr-2" />
            Contact Us
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Get Expert
            <span className="text-primary block">Trading Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our professional team is ready to assist you with trading questions, account setup, and platform support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                className="group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <div className="text-primary font-semibold text-lg mb-2">{item.details}</div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Available 24/7</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
              Our global support team ensures you're never alone in your trading journey. Get instant help whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="tel:+41447078388">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}