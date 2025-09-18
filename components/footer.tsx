export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-12 px-4 bg-black border-t border-purple-900/40 text-center">
      <p className="text-pink-200 mb-3">Entertainment only. No explicit adult content.</p>
      <p className="text-pink-200 mb-3">© The Naughty Show {year}. All Rights Reserved.</p>
      <div className="flex justify-center gap-4 text-pink-300 text-sm">
        <a href="#howto" className="hover:text-pink-400">Buy Token</a>
        <span>|</span>
        <a href="https://t.me/yourCommunity" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Community</a>
      </div>
    </footer>
  )
}
