import prisma from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 3600

export default async function LinkTree() {
  const links = await prisma.link.findMany();

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        <div className="flex flex-col items-center justify-center p-4 h-full">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/v2.jpg"
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
                  className="group relative block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-center text-slate-800 hover:text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  target="_blank"
                >
                  <span className="absolute inset-0 bg-white transition-transform duration-300 group-hover:translate-y-full"></span>
                  <span className="relative group-hover:bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}