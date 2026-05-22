export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Engineering
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Find the{" "}
          <span className="text-[#58a6ff]">Perfect Temperature</span>
          {" "}for Your AI Prompts
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing. Run your prompts across temperature values 0.1–2.0, measure consistency, creativity, and accuracy, and get data-driven recommendations instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Optimizing — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { label: "Temperature Steps", value: "19" },
            { label: "Metrics Tracked", value: "3" },
            { label: "Avg Time Saved", value: "4h" }
          ].map((s) => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-3xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Paste Your Prompt", desc: "Enter any prompt you want to optimize and set your evaluation criteria." },
            { step: "02", title: "Run Temperature Tests", desc: "We fire your prompt across 19 temperature values using the OpenAI API and collect outputs." },
            { step: "03", title: "Get Recommendations", desc: "Interactive charts show consistency, creativity, and accuracy scores so you pick the winner." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm mb-3">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt tests",
              "All 19 temperature steps",
              "Consistency, creativity & accuracy metrics",
              "Interactive performance charts",
              "Export results as CSV",
              "OpenAI API key — bring your own"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need my own OpenAI API key?",
              a: "Yes. You bring your own OpenAI API key. This keeps your data private and gives you full control over usage costs."
            },
            {
              q: "Which temperature range does it test?",
              a: "We test 19 values from 0.1 to 2.0 in 0.1 increments, covering the full spectrum from deterministic to highly creative outputs."
            },
            {
              q: "How are consistency and creativity measured?",
              a: "Consistency is measured by semantic similarity across repeated runs. Creativity is scored by lexical diversity and novelty. Accuracy uses your custom evaluation criteria."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-[#8b949e] text-sm border-t border-[#21262d]">
        © {new Date().getFullYear()} AI Prompt Temperature Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
