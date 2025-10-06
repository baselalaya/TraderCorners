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
import TermsOfService from "@/pages/terms-of-service";
import PrivacyPolicy from "@/pages/privacy-policy";
import RiskDisclosure from "@/pages/risk-disclosure";
import ClientAgreement from "@/pages/client-agreement";
import DesignSystem from "@/pages/design-system";
import EconomicCalendarPage from "@/pages/economic-calendar";
import FxCalculatorPage from "@/pages/fx-calculator";
import NotFound from "@/pages/not-found";
import Markets from "@/pages/markets";
import MarketsForex from "@/pages/markets-forex";
import MarketsCrypto from "@/pages/markets-crypto";
import MarketsStocks from "@/pages/markets-stocks";
import MarketsCommodities from "@/pages/markets-commodities";
import LoginPage from "@/pages/login";
// import SignupPage from "@/pages/signup";
import ResetPasswordPage from "@/pages/reset-password";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platforms" component={Platforms} />
      <Route path="/accounts" component={Accounts} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/markets" component={Markets} />
      <Route path="/markets/forex" component={MarketsForex} />
      <Route path="/markets/crypto" component={MarketsCrypto} />
      <Route path="/markets/stocks" component={MarketsStocks} />
      <Route path="/markets/commodities" component={MarketsCommodities} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={() => {
        if (typeof window !== 'undefined') {
          window.location.replace('https://my.tradercorners.com/en/register/account-types');
        }
        return null;
      }} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <Route path="/economic-calendar" component={EconomicCalendarPage} />
      <Route path="/fx-calculator" component={FxCalculatorPage} />
      <Route path="/about" component={About} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/risk-disclosure" component={RiskDisclosure} />
      <Route path="/client-agreement" component={ClientAgreement} />
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
