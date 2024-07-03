import Image from "next/image";
import Link from "next/link";

export default function TrucksPage() {
  return (
    <main className="min-w-full min-h-screen">
      <div className="grid w-3/4 grid-cols-1 m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/trucks/scania">
          <div className="max-w-[300] max-h-[300] flex flex-col p-4 m-10 text-white rounded-lg bg-slate-800">
            <Image
              className="bg-white rounded-lg min-h-[300] min-w-[145]"
              src="/scania.png"
              alt="Brand1"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/trucks/iveco">
          <div className="max-w-[300] max-h-[300] flex flex-col p-4 m-10 text-white rounded-lg bg-slate-800">
            <Image
              className="bg-white rounded-lg"
              src="/iveco.png"
              alt="Brand2"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/trucks/mercedes">
          <div className="max-w-[300] max-h-[300] flex flex-col p-4 m-10 text-white rounded-lg bg-slate-800">
            <Image
              className="bg-white rounded-lg"
              src="/mb.png"
              alt="Brand3"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/trucks/volvo">
          <div className="max-w-[300] max-h-[300] flex flex-col p-4 m-10 text-white rounded-lg bg-slate-800">
            <Image
              className="bg-white rounded-lg"
              src="/volvo.png"
              alt="Brand4"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/trucks/volks">
          <div className="max-w-[300] max-h-[300] flex flex-col p-4 m-10 text-white rounded-lg bg-slate-800">
            <Image
              className="bg-white rounded-lg"
              src="/volks.png"
              alt="Brand5"
              width={300}
              height={300}
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
