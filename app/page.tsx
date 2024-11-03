import prisma from '@/lib/db'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Théo Poette | Links & Social Media',
  description: 'Connect with Théo Poette and discover all my professional work, social media profiles, and latest projects in one place.',
  keywords: 'Théo Poette, portfolio, links, social media, professional network',
  openGraph: {
    title: 'Théo Poette | Links & Social Media',
    description: 'Connect with Théo Poette and discover all his professional work, social media profiles, and latest projects in one place.',
    images: [
      {
        url: '/v2.jpg',
        width: 128,
        height: 128,
        alt: 'Théo Poette Profile Photo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Théo Poette | Links & Social Media',
    description: 'Connect with Théo Poette and discover all my professional work, social media profiles, and latest projects in one place.',
    images: ['/v2.jpg'],
  },
}

export const revalidate = 3600

export default async function LinkTree() {
  const links = await prisma.link.findMany({
    orderBy: {
      id: 'asc',
    }
  });

  return (
    <main className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        <div className="flex flex-col items-center justify-center p-4 h-full">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
            <header className="flex flex-col items-center space-y-4">
              <Image
                src="/v2.jpg"
                alt="Théo Poette Profile Photo"
                width={128}
                height={128}
                className="rounded-full border-2 border-gray-200"
                priority
              />
              <h1 className="text-2xl font-bold text-gray-800">Théo Poette</h1>
              <meta itemProp="name" content="Théo Poette" />
            </header>

            <nav className="space-y-4" aria-label="Social Links">
              {links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="group relative block w-full py-3 px-4 bg-gradient-to-r from-[#93D8FF] to-[#C9EBFF] rounded-lg text-center font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#C9EBFF]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.title}`}
                >
                  <span className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0"></span>
                  <span className="relative text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    {link.title}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}