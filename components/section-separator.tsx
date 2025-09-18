export function SectionSeparator({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-14 my-6 ${className}`} aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent blur-[1.5px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <div className="w-[70%] max-w-4xl h-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,150,0.25),transparent_60%)]" />
      </div>
    </div>
  )
}
