import { Button } from "@/components/ui/button";
import { Smartphone, Bell, Fingerprint } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileAppSection() {
  const features = [
    {
      icon: Smartphone,
      text: "Real-time market data and charts",
    },
    {
      icon: Bell,
      text: "Push notifications for market alerts",
    },
    {
      icon: Fingerprint,
      text: "Biometric security login",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="scroll-reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Trade On The Go</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take your trading anywhere with our award-winning mobile app. Full functionality, 
              real-time data, and seamless execution in your pocket.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="text-primary flex-shrink-0" size={24} />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cta-button cta-secondary flex items-center justify-center space-x-3" aria-label="Download Trader Corners app from App Store">
                <FaApple className="text-white" size={24} />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="cta-button cta-secondary flex items-center justify-center space-x-3" aria-label="Download Trader Corners app from Google Play Store">
                <FaGooglePlay className="text-white" size={24} />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
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
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mobile trading app interface" 
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
