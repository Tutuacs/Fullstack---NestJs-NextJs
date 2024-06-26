import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="grid grid-cols-12 ">
      <div className="h-screen grid-cols-4 p-2 border-r shadow">
        <Link
          className="p-3 transition rounded hover:bg-emerald-600 hover:text-white hover:shadow "
          href={`/dashboard/user/${session?.profile.id}`}
        >
          User Profile
        </Link>
      </div>
      <div className="col-span-4">{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;
