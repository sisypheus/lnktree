import prisma from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function LinkTree() {
  const links = await prisma.link.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="User Avatar"
            width={128}
            height={128}
            className="rounded-full border-4 border-gray-200"
          />
          <h1 className="text-2xl font-bold text-gray-800">Théo Poette</h1>
        </div>

        <div className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="block w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-lg text-center text-gray-800 font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}