import { ROLE } from "@/common/role.enums";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.profile.role === ROLE.ADMIN) {
      return (
        <main>
          <Link href="/">Admin Home</Link>
          <Link href="/login">Admin page</Link>
          <Link href="/register">User</Link>
        </main>
      );
    }

    return (
      <main>
        <Link href="/">User Home</Link>
        <Link href="/login">Cart</Link>
        <Link href="/register">User</Link>
      </main>
    );
  }

  return (
    <main className="flex justify-between pt-2 shadow-lg bg-slate-800">
      <div className="flex items-center">
        <Link className="py-1" href="/">
          <Image
            src="/logo_morelate_horizontal_b.png"
            alt="home"
            width={200}
            height={40}
          />
        </Link>
        <Link href="/products" className="p-4 my-0 ml-2 text-2xl font-bold text-white hover:rounded-t-lg hover:text-slate-800 hover:bg-gray-200">Produtos</Link>
      </div>
      <div className="flex items-center mr-2">
        <Link
          className="p-4 my-0 text-2xl font-bold text-white hover:rounded-t-lg hover:text-slate-800 hover:bg-gray-200"
          href="/login"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
