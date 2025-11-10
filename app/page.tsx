import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main>
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>

        <p>
        <Link href="/instrument" className="mt-4 text-blue-500 underline">
          Go to Instruments Page
        </Link>
        </p>

        <p>
        <Link href="/login" className="mt-4 text-blue-500 underline">
          Go to Login Page
        </Link>
        </p>
      </main>
    </div>
  );
}
