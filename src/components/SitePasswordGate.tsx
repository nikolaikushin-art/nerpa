import { FormEvent, useState } from "react";

const SITE_PASSWORD = "Nerpa369!";
const STORAGE_KEY = "nerpa-site-access";

export function SitePasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "1",
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  function submit(event: FormEvent) {
    event.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      return;
    }
    setError(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-xl border border-border bg-card px-8 py-10 shadow-2xl"
      >
        <p className="text-xs tracking-[0.28em] uppercase text-primary">NERPA</p>
        <h1 className="mt-3 text-2xl font-semibold">This site is private</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the password to view every page.
        </p>
        <label className="mt-8 block text-sm" htmlFor="site-password">
          Password
        </label>
        <input
          id="site-password"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError(false);
          }}
          className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
        />
        {error && (
          <p className="mt-3 text-sm text-destructive" role="alert">
            Incorrect password.
          </p>
        )}
        <button
          type="submit"
          className="mt-6 h-11 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
