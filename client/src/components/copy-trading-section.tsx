import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const traders = [
  {
    name: "Alex Chen",
    specialty: "Forex Specialist",
    roi: "+24.8%",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    color: "text-primary",
  },
  {
    name: "Sarah Johnson",
    specialty: "Crypto Expert",
    roi: "+31.2%",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba942fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    color: "text-secondary",
  },
  {
    name: "Marcus Williams",
    specialty: "Commodities Pro",
    roi: "+18.6%",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    color: "text-yellow-400",
  },
];

export default function CopyTradingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Copy Trading</h2>
          <p className="text-xl text-muted-foreground">Follow and copy successful traders automatically</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {traders.map((trader, index) => (
            <motion.div
              key={trader.name}
              className="neumorphic rounded-2xl p-6 glow-hover scroll-reveal text-center group card-tilt"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative mb-4">
                <img 
                  src={trader.image} 
                  alt={trader.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background pulse-glow"></div>
              </div>
              <h3 className="font-space text-xl font-bold mb-2">{trader.name}</h3>
              <p className="text-muted-foreground mb-4 text-balance">{trader.specialty}</p>
              <div className="mb-6 p-4 neumorphic rounded-xl">
                <div className={`text-2xl font-bold mb-1 ${trader.color}`}>{trader.roi}</div>
                <div className="text-sm text-muted-foreground">ROI (12 months)</div>
              </div>
              <Button className="w-full btn-primary text-primary-foreground hover:shadow-lg glow-hover">
                Copy Strategy
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
