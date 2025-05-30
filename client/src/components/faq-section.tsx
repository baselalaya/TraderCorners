import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const faqData = [
  {
    question: "How do I get started with trading?",
    answer: "Getting started is easy! Simply create your account, complete the verification process, make your first deposit, and you'll have access to our full trading platform. We also offer demo accounts to practice with virtual funds.",
  },
  {
    question: "What are the minimum deposit requirements?",
    answer: "Our minimum deposit varies by account type. Standard accounts start at $100, while our premium accounts require $1,000. We support multiple payment methods including bank transfers, credit cards, and digital wallets.",
  },
  {
    question: "Is my money safe with Trader Corners?",
    answer: "Absolutely. We use bank-level encryption, segregated client accounts, and are regulated by top-tier financial authorities. Your funds are protected by investor compensation schemes and our comprehensive insurance policies.",
  },
  {
    question: "What trading platforms do you offer?",
    answer: "We offer MetaTrader 4, our proprietary web platform, and award-winning mobile apps for iOS and Android. All platforms feature real-time data, advanced charting tools, and seamless execution.",
  },
  {
    question: "Do you offer educational resources?",
    answer: "Yes! We provide comprehensive educational materials including video tutorials, trading courses, market analysis, webinars, and a dedicated learning center. Our expert analysts also share daily market insights.",
  },
  {
    question: "What are your trading fees?",
    answer: "We offer competitive spreads starting from 0.1 pips with no hidden fees. Our transparent pricing structure includes details on spreads, commissions, and overnight financing rates, all available in your account dashboard.",
  },
];

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "24/7 instant support",
    action: "Start Chat"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with an expert",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed help",
    action: "Send Email"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      
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
            Got Questions?
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Everything you need to know about trading with us. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-border/30 rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      className="w-full text-left flex justify-between items-center p-6 font-semibold hover:bg-card/50 transition-all duration-300 group"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-display text-lg group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                          <ChevronDown 
                            className={`transition-transform duration-300 text-primary ${
                              openIndex === index ? 'rotate-180' : ''
                            }`}
                            size={16}
                          />
                        </div>
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-muted-foreground leading-relaxed bg-muted/10">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Support Options */}
          <div className="space-y-6">
            <motion.div 
              className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Need More Help?</h3>
                <p className="text-sm text-muted-foreground">Our support team is here to assist you</p>
              </div>

              <div className="space-y-4">
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.button
                      key={option.title}
                      className="w-full p-4 bg-card/50 border border-border/30 rounded-xl hover:bg-card/70 hover:border-primary/30 transition-all duration-300 group text-left"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-white" size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {option.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {option.description}
                          </div>
                        </div>
                        <div className="text-xs font-medium text-primary">
                          {option.action}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div 
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-lg font-bold mb-2 text-foreground">Still have questions?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch with our expert support team
              </p>
              <motion.button 
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}