import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { mountQuotesRoutes } from "./routes/quotes";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for market data and other trading platform features
  
  // Healthcheck
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, status: "healthy", timestamp: Date.now() });
  });
  
  // Mock market data endpoint
  app.get("/api/markets/:type", (req, res) => {
    const { type } = req.params;
    
    const marketData = {
      forex: [
        {
          symbol: "EUR/USD",
          icon: "€/$",
          price: "1.0842",
          change: "-0.8%",
          isPositive: false,
          volume: "$2.1B",
        },
        {
          symbol: "GBP/USD",
          icon: "£/$",
          price: "1.2745",
          change: "+0.3%",
          isPositive: true,
          volume: "$1.8B",
        },
      ],
      crypto: [
        {
          symbol: "BTC/USD",
          icon: "₿",
          price: "$42,851.20",
          change: "+2.4%",
          isPositive: true,
          volume: "$18.2B",
        },
        {
          symbol: "ETH/USD",
          icon: "Ξ",
          price: "$2,651.80",
          change: "+3.1%",
          isPositive: true,
          volume: "$12.1B",
        },
      ],
      commodities: [
        {
          symbol: "GOLD",
          icon: "Au",
          price: "$2,048.30",
          change: "+1.2%",
          isPositive: true,
          volume: "$4.1B",
        },
        {
          symbol: "SILVER",
          icon: "Ag",
          price: "$24.85",
          change: "+0.8%",
          isPositive: true,
          volume: "$890M",
        },
      ],
    };

    if (type && marketData[type as keyof typeof marketData]) {
      res.json(marketData[type as keyof typeof marketData]);
    } else {
      res.status(404).json({ error: "Market type not found" });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Mock subscription logic
    res.json({ success: true, message: "Successfully subscribed to newsletter" });
  });

  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body || {};
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    try {
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.office365.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER || "info@tradercorners.com",
          pass: process.env.SMTP_PASS || "",
        },
      });

      const adminAddress = process.env.CONTACT_RECEIVER || "info@tradercorners.com";

      await transport.sendMail({
        from: `"Trader Corners Website" <${process.env.SMTP_USER || "info@tradercorners.com"}>`,
        to: adminAddress,
        subject: subject && String(subject).trim().length > 0
          ? `Contact Form: ${subject}`
          : "New Contact Form Submission",
        replyTo: email,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          subject ? `Subject: ${subject}` : "",
          "",
          "Message:",
          message,
        ].filter(Boolean).join("\n"),
      });

      res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      console.error("Error sending contact email", err);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  const httpServer = createServer(app);
  // Mount quotes HTTP + WS
  mountQuotesRoutes(app, httpServer);
  return httpServer;
}
