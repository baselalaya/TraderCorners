export async function fetcher<T = any>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`Request failed: ${res.status} ${res.statusText}`);
    (err as any).status = res.status;
    (err as any).body = text;
    throw err;
  }
  return res.json() as Promise<T>;
}

export default fetcher;

