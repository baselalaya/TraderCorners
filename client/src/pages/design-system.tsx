import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  TrendingUp, 
  Monitor, 
  BookOpen, 
  Users, 
  Shield, 
  Zap, 
  Star,
  Check,
  Download,
  Globe,
  BarChart3,
  PieChart,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const colorPalette = [
  { name: "Primary", value: "#ef0f12", css: "bg-primary", description: "Main brand color - Red" },
  { name: "Secondary", value: "#e61117", css: "bg-secondary", description: "Darker red variant" },
  { name: "Accent", value: "#ff3d3d", css: "bg-accent", description: "Light red accent" },
  { name: "Background", value: "#FAFAFA", css: "bg-background", description: "Main background" },
  { name: "Foreground", value: "#0A0A0B", css: "bg-foreground", description: "Primary text" },
  { name: "Muted", value: "#F1F5F9", css: "bg-muted", description: "Subtle background" },
  { name: "Border", value: "#E2E8F0", css: "bg-border", description: "Border color" }
];

const typography = [
  { name: "Display Large", class: "text-6xl font-display font-bold", sample: "Trading Platform" },
  { name: "Display Medium", class: "text-4xl font-display font-bold", sample: "Premium Experience" },
  { name: "Heading 1", class: "text-3xl font-bold", sample: "Section Heading" },
  { name: "Heading 2", class: "text-2xl font-bold", sample: "Subsection Title" },
  { name: "Heading 3", class: "text-xl font-semibold", sample: "Card Title" },
  { name: "Body Large", class: "text-lg", sample: "Large body text for important content" },
  { name: "Body", class: "text-base", sample: "Regular body text for general content" },
  { name: "Body Small", class: "text-sm", sample: "Small text for captions and labels" },
  { name: "Caption", class: "text-xs text-muted-foreground", sample: "Fine print and metadata" }
];

const buttonVariants = [
  { variant: "default", label: "Primary Button" },
  { variant: "secondary", label: "Secondary Button" },
  { variant: "outline", label: "Outline Button" },
  { variant: "ghost", label: "Ghost Button" },
  { variant: "destructive", label: "Destructive Button" }
];

const iconSet = [
  { icon: TrendingUp, name: "TrendingUp" },
  { icon: Monitor, name: "Monitor" },
  { icon: BookOpen, name: "BookOpen" },
  { icon: Users, name: "Users" },
  { icon: Shield, name: "Shield" },
  { icon: Zap, name: "Zap" },
  { icon: Star, name: "Star" },
  { icon: Check, name: "Check" },
  { icon: Download, name: "Download" },
  { icon: Globe, name: "Globe" },
  { icon: BarChart3, name: "BarChart3" },
  { icon: PieChart, name: "PieChart" },
  { icon: Mail, name: "Mail" },
  { icon: Phone, name: "Phone" }
];

export default function DesignSystemPage() {
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
                  Design System
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Trader Corners
                  <span className="text-primary block">Design System</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A comprehensive guide to our design language, components, and visual identity for the premium trading platform.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Color Palette</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Our brand colors create a premium and trustworthy experience with the distinctive red theme.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={color.name}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-full h-20 rounded-xl mb-4 ${color.css}`}></div>
                  <h3 className="font-semibold text-foreground mb-2">{color.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{color.description}</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded font-mono">{color.value}</code>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Typography</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Our typography system ensures clear hierarchy and excellent readability across all devices.
              </p>
            </motion.div>

            <div className="space-y-8">
              {typography.map((type, index) => (
                <motion.div
                  key={type.name}
                  className="bg-white border border-border rounded-2xl p-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-1/4">
                      <h3 className="font-semibold text-foreground mb-2">{type.name}</h3>
                      <code className="text-xs bg-muted px-2 py-1 rounded font-mono">{type.class}</code>
                    </div>
                    <div className="lg:w-3/4">
                      <div className={type.class}>{type.sample}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Buttons</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Button components with different variants and sizes for various use cases.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Button Variants */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  {buttonVariants.map((btn, index) => (
                    <motion.div
                      key={btn.variant}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button variant={btn.variant as any}>{btn.label}</Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small Button</Button>
                  <Button size="default">Default Button</Button>
                  <Button size="lg">Large Button</Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">CTA Button Pattern</h3>
                <div className="bg-primary p-8 rounded-2xl">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                      Primary CTA
                    </Button>
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold">
                      Secondary CTA
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Components</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Reusable UI components that maintain consistency across the platform.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {/* Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Cards</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Card</CardTitle>
                      <CardDescription>Simple card with header and content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Card content goes here with relevant information.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="text-primary" size={20} />
                        <CardTitle>Feature Card</CardTitle>
                      </div>
                      <CardDescription>Card with icon and accent styling</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Enhanced card with visual emphasis.</p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0">
                      <Badge className="bg-primary">Popular</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>Badge Card</CardTitle>
                      <CardDescription>Card with status badge</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Card with promotional badge.</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Badges</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default Badge</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </motion.div>

              {/* Forms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Form Elements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter password" />
                    </div>
                    <Button className="w-full">Submit Form</Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Icons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Icons</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Lucide React icons used throughout the platform for consistency and clarity.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {iconSet.map((iconItem, index) => {
                const IconComponent = iconItem.icon;
                return (
                  <motion.div
                    key={iconItem.name}
                    className="text-center p-4 border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <IconComponent className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground">{iconItem.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Motion Patterns */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Animation Patterns</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Consistent motion design that enhances user experience without overwhelming.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-2xl border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold mb-2">Hover Lift</h3>
                <p className="text-sm text-muted-foreground">Cards lift on hover</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl border border-border text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold mb-2">Scale on Hover</h3>
                <p className="text-sm text-muted-foreground">Buttons scale interaction</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl border border-border text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-semibold mb-2">Slide In</h3>
                <p className="text-sm text-muted-foreground">Content slides into view</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Brand Guidelines</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Key principles that guide our design decisions and maintain brand consistency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Design Principles</h3>
                <div className="space-y-4">
                  {[
                    { title: "Premium Feel", description: "Every element should convey trust and sophistication" },
                    { title: "Mobile First", description: "Design for mobile devices, then enhance for desktop" },
                    { title: "Performance", description: "Optimize animations and interactions for all devices" },
                    { title: "Accessibility", description: "Ensure high contrast and keyboard navigation" }
                  ].map((principle, index) => (
                    <motion.div
                      key={principle.title}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{principle.title}</h4>
                        <p className="text-sm text-muted-foreground">{principle.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Usage Guidelines</h3>
                <div className="space-y-4">
                  {[
                    { title: "Consistent Spacing", description: "Use 4px, 8px, 16px, 24px, 32px spacing scale" },
                    { title: "Brand Colors", description: "Always use the defined red theme for primary actions" },
                    { title: "Typography Scale", description: "Maintain hierarchical consistency across pages" },
                    { title: "Animation Timing", description: "Keep animations under 300ms for interactions" }
                  ].map((guideline, index) => (
                    <motion.div
                      key={guideline.title}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-3"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">{guideline.title}</h4>
                        <p className="text-sm text-muted-foreground">{guideline.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}