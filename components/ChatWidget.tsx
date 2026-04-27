"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Step = "closed" | "email" | "chat" | "sent";

export function ChatWidget() {
  const [step, setStep] = useState<Step>("closed");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const open = step !== "closed";

  const toggle = useCallback(() => {
    setStep((s) => (s === "closed" ? "email" : "closed"));
  }, []);

  useEffect(() => {
    if (step === "email") inputRef.current?.focus();
    if (step === "chat") textareaRef.current?.focus();
  }, [step]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        const btn = document.getElementById("chat-toggle-btn");
        if (btn && btn.contains(e.target as Node)) return;
        setStep("closed");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setStep("closed");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Email invalide");
      return;
    }
    setError("");
    setStep("chat");
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), message: message.trim() }),
      });
      if (!res.ok) throw new Error();
      setStep("sent");
      setMessage("");
    } catch {
      setError("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setSending(false);
    }
  };

  const resetChat = () => {
    setStep("chat");
    setMessage("");
    setError("");
  };

  return (
    <>
      {/* FAB button */}
      <button
        id="chat-toggle-btn"
        onClick={toggle}
        aria-label="Ouvrir le chat"
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
          open
            ? "rotate-0 bg-gray-900 hover:bg-gray-800"
            : "bg-emerald-600 hover:bg-emerald-500 hover:scale-110"
        } text-white`}
      >
        {open ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-24 right-5 z-50 w-[340px] origin-bottom-right transition-all duration-300 ${
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 translate-y-4"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-300/40">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">NexGear Support</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-gray-400">Généralement répond en &lt;1h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            {/* Email step */}
            {step === "email" && (
              <div>
                <div className="mb-4 rounded-xl bg-gray-50 p-3.5">
                  <p className="text-sm leading-relaxed text-gray-700">
                    Bonjour ! 👋 Comment pouvons-nous vous aider ? Entrez votre email pour commencer.
                  </p>
                </div>
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <div>
                    <input
                      ref={inputRef}
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                    />
                    {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500"
                  >
                    Continuer
                  </button>
                </form>
              </div>
            )}

            {/* Chat step */}
            {step === "chat" && (
              <div>
                <div className="mb-3 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                  <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                  <span className="truncate text-xs text-gray-500">{email}</span>
                  <button onClick={() => setStep("email")} className="ml-auto text-xs text-emerald-600 hover:underline">Modifier</button>
                </div>
                <form onSubmit={handleSend} className="space-y-3">
                  <textarea
                    ref={textareaRef}
                    rows={4}
                    placeholder="Décrivez votre question ou problème..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                  />
                  {error && <p className="text-xs text-red-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending || !message.trim()}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sending ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Envoi...
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Envoyer
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Sent step */}
            {step === "sent" && (
              <div className="py-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold text-gray-900">Message envoyé !</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                  Nous vous répondrons à <strong className="text-gray-700">{email}</strong> dans les plus brefs délais.
                </p>
                <button
                  onClick={resetChat}
                  className="mt-5 rounded-xl border border-gray-200 px-5 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Envoyer un autre message
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-5 py-2.5">
            <p className="text-center text-[10px] text-gray-400">
              Propulsé par <span className="font-semibold text-gray-500">NexGear</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
