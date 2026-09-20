import Link from "next/link";

export default function Home() {
 

  return (
    <div>
      <h1>Homr page </h1>
     <Link href="/about" className="bg-red-500 p-2 ">about</Link>
     <Link href="/contact"  className="bg-green-500 p-2">Go to Contact</Link>
    </div>
  );
}
