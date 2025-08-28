import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Platforms from "@/pages/platforms";
import Accounts from "@/pages/accounts";
import Education from "@/pages/education";
import Contact from "@/pages/contact";
import Products from "@/pages/products";
import About from "@/pages/about";
import DesignSystem from "@/pages/design-system";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platforms" component={Platforms} />
      <Route path="/accounts" component={Accounts} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/design-system" component={DesignSystem} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div>
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
