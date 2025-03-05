import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex gap-6 items-center justify-center sticky">
        <Link href="/">Home</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl font-bold">
          Hi, I&apos;m Max
          <span className="text-4xl font-bold text-red-600">.</span>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
