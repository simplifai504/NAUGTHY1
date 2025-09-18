export function Roadmap() {
  const items = [
    { title: "Day 1", text: "First jacuzzi stream." },
    { title: "Week 1", text: "Daily shows with rotating models." },
    { title: "Month 1", text: "Collabs with other streamers." },
    { title: "Phase 2", text: "Explore building a curated app." },
  ]

  return (
    <section id="roadmap" className="py-20 bg-[var(--bg-3)]/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-300">Roadmap</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-black/40 rounded-xl border border-purple-700/60 p-6 backdrop-blur-md">
              <span className="block text-xl font-bold text-pink-400 mb-2">{it.title}</span>
              <p className="text-pink-200/90 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
