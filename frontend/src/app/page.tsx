import Link from "next/link"
import { DM_Sans, Syne } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
})

const FEATURES = [
  {
    title: "Import from YouTube",
    description: "Paste a link and pull in source video metadata. Downloads run in the background until your project is ready.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    title: "Clip & edit",
    description: "Trim highlights, add styled captions with 166 fonts, and search stock assets from Pexels and Pixabay.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Publish everywhere",
    description: "Export clips and publish to YouTube Shorts and Instagram Reels when your content is ready.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className={`${dmSans.className} min-h-screen bg-[#faf8ff] text-[#191b23]`}>
      <header className="border-b border-[#e8eaf3] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-1 bg-[#2563eb]" />
            <span className={`${syne.className} text-2xl font-extrabold tracking-tight`}>
              CLIP<span className="text-[#2563eb]">AI</span>
            </span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#434655] transition-colors hover:text-[#191b23]"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-[#2563eb] px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-px hover:shadow-md"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.07]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
            }}
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-[#2563eb]/20 bg-[#2563eb]/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
              AI-powered video repurposing
            </p>
            <h1 className={`${syne.className} mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#191b23] md:text-6xl`}>
              Turn long videos into{" "}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                viral shorts
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#434655]">
              Import YouTube content, cut clips in a visual editor, style captions, and publish to social — all in one workflow.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg bg-[#2563eb] px-8 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:shadow-lg"
              >
                Start for free
              </Link>
              <Link
                href="/login"
                className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg border border-[#c3c6d7] bg-white px-8 text-sm font-semibold text-[#191b23] transition-all hover:border-[#2563eb]/40 hover:shadow-sm"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e8eaf3] bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className={`${syne.className} text-3xl font-bold text-[#191b23]`}>
                Everything you need to repurpose video
              </h2>
              <p className="mt-3 text-[#434655]">
                From import to publish — built for creators and teams.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-[#e8eaf3] bg-[#faf8ff] p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#2563eb]/10 p-3 text-[#2563eb]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#191b23]">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#434655]">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#2563eb]/20 bg-gradient-to-br from-[#2563eb] to-[#7c3aed] p-10 text-center text-white shadow-xl">
            <h2 className={`${syne.className} mb-3 text-3xl font-bold`}>Ready to create your first project?</h2>
            <p className="mb-8 text-white/85">
              Sign up in seconds and import your first YouTube video today.
            </p>
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-[#2563eb] transition-all hover:-translate-y-px hover:shadow-lg"
            >
              Create free account
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e8eaf3] px-6 py-8 text-center text-sm text-[#737686]">
        © {new Date().getFullYear()} ClipAI. Professional video editing, simplified.
      </footer>
    </div>
  )
}
