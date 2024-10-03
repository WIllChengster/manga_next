import Link from "next/link"

const Header = () => {
  return (
    <div
      className="flex bg-gray-700 p-2"
    >
      <Link href='/' >
       <p>MangaNext</p>
      </Link>
    </div>
  )
}

export default Header