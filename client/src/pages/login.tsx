import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://my.tradercorners.com/en/login";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      <SEO page="login" />
      <Header />
      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
          <Card className="backdrop-blur-xl bg-card/60 border border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Log in to your account</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground">
                  Log In
                </Button>
                <div className="flex items-center justify-between text-sm">
                  <a href="https://my.tradercorners.com/en/login" className="text-primary hover:underline">Forgot password?</a>
                  <span className="text-muted-foreground">Don’t have an account? <a href="https://my.tradercorners.com/en/register/account-types" className="text-primary hover:underline">Sign up</a></span>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
