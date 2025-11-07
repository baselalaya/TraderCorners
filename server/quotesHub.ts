import type { WebSocket } from "ws";
import type { TDNormalized } from "./tdClient";

export class QuotesHub {
  private clients = new Set<WebSocket>();
  private latest = new Map<string, TDNormalized>();

  addClient(ws: WebSocket) {
    this.clients.add(ws);
    ws.on("close", () => this.removeClient(ws));
  }

  removeClient(ws: WebSocket) {
    this.clients.delete(ws);
  }

  broadcast(items: TDNormalized[]) {
    for (const it of items) this.latest.set(it.symbol, it);
    const payload = JSON.stringify({ items: this.getLatestArray() });
    for (const c of this.clients) {
      try { c.send(payload); } catch {}
    }
  }

  getLatestArray(): TDNormalized[] {
    return Array.from(this.latest.values());
  }
}

export const quotesHub = new QuotesHub();

