import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/");
  }

  return <>{children}</>;
}
