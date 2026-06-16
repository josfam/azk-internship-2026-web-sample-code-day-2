import { useState } from "react";

export const Homepage = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState<null | { name: string; reversed: string }>(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = (import.meta as any).env?.VITE_API_BASE || "http://localhost:8000";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/users/reverse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (res.ok) setGreeting({ name: data.name, reversed: data.reversed });
      else setGreeting(null);
    } catch (err) {
      setGreeting(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="section-px pt-(--nav-top-space-larger)">
        <form onSubmit={submit} className="flex items-center gap-4">
          <label className="whitespace-nowrap">Name</label>
          <input
            className="border rounded px-4 py-2 flex-1"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "..." : "SUBMIT"}
          </button>
        </form>

        <hr className="my-6" />

        {greeting ? (
          <div className="text-center">
            <p className="text-body-large">Hello, {greeting.name}.</p>
            <p className="text-body-large">Your name backwards is "{greeting.reversed}"</p>
          </div>
        ) : (
          <p className="text-body-large text-center">Enter your name and submit to see it reversed.</p>
        )}
      </section>
    </main>
  );
};
