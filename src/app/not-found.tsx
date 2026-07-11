import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={`maxwidth firstPage`}>
      <Image
        aria-label="404 not found"
        src="/images/404-desk-300.png"
        alt="404 Not Found"
        width={474}
        height={351}
        className="[image-rendering:pixelated] h-auto w-[474px]"
      />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
