import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white top-0 z-40 shadow-md">
            <div className="max-w-5xl mx-auto grid grid-cols-3 items-center px-4 py-3">
                <div className="font-bold">Campaign</div>

                <ul className="hidden md:flex justify-center space-x-6 p-0 m-0" aria-label="Navigation Menu">
                    <li>
                        <Link href="/" className="text-white font-semibold px-3 py-2 rounded-md hover:bg-white/10">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white font-semibold px-3 py-2 rounded-md hover:bg-white/10">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white font-semibold px-3 py-2 rounded-md hover:bg-white/10">Contact</Link>
                    </li>
                </ul>

                <div className="flex justify-end items-center space-x-2">
                    <button className="hidden md:inline-flex bg-transparent border border-white/20 text-white px-2 py-1 rounded-md font-bold text-sm" aria-pressed="true">EN</button>
                    <button className="hidden md:inline-flex text-white/90 px-2 py-1 rounded-md font-bold text-sm">FR</button>
                </div>
            </div>
        </nav>
    )
}