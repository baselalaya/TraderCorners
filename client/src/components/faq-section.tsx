import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How do I open an account?",
    answer: "Opening an account is quick and easy. Simply click \"Start Trading,\" complete our online application with your basic information, verify your identity with a valid ID, and make your first deposit to start trading.",
  },
  {
    question: "Is my capital safe?",
    answer: "Absolutely. We are fully regulated by top-tier financial authorities and maintain segregated client accounts. Your funds are protected by our Protection Fund up to €20,000 per client, and we use military-grade encryption for all transactions.",
  },
  {
    question: "How can I track my trades?",
    answer: "Our advanced trading platforms provide real-time trade monitoring, detailed performance analytics, and comprehensive reporting. You can track all your positions, P&L, and trading history through our web platform or mobile app.",
  },
  {
    question: "What products can I trade?",
    answer: "We offer a comprehensive range of trading instruments including 50+ Forex pairs, major cryptocurrencies (Bitcoin, Ethereum, etc.), precious metals (Gold, Silver), energy commodities (Oil, Gas), and stock indices CFDs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about trading with us</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="neumorphic rounded-2xl p-8 scroll-reveal">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-border pb-4 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full text-left flex justify-between items-center py-4 font-semibold hover:text-primary transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
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
                        <div className="py-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
