import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="about">about</Link>
    </nav>
  )
}