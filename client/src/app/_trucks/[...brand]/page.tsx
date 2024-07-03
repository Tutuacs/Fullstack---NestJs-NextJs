"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    brand: string;
  };
};

type Trucks = {
  id: string;
  name: string;
  image: string;
  SubTrucks: { id: string; name: string }[];
};

export default function TrucksByBrand(props: Props) {
  const [activeTruck, setActiveTruck] = useState<string | null>(null);

  const constellation: Trucks = {
    id: "C1",
    name: "Constellation",
    image: "/constellation.png",
    SubTrucks: [
      { id: "1C", name: "Constellation 13/15-180E" },
      { id: "2C", name: "Constellation 17/24-250E" },
      { id: "3C", name: "Constellation 19-320E / 19-370 / 25-370E / 25-320" },
      { id: "3C", name: "Constellation 26-260 / 31-260 / 31-320E / 31-370E" },
      { id: "3C", name: "Constellation 17/24-320E" },
    ],
  };
  const delivery: Trucks = {
    id: "1D",
    name: "Delivery",
    image: "/delivery.png",
    SubTrucks: [
      { id: "D1", name: "Delivery 1" },
      { id: "D2", name: "Delivery 2" },
      { id: "D3", name: "Delivery 3" },
      { id: "D3", name: "Delivery 4" },
      { id: "D3", name: "Delivery 5" },
    ],
  };
  const worker: Trucks = {
    id: "1W",
    name: "Worker",
    image: "/worker.png",
    SubTrucks: [
      { id: "W1", name: "Worker 1" },
      { id: "W2", name: "Worker 2" },
      { id: "W3", name: "Worker 3" },
      { id: "W3", name: "Worker 4" },
      { id: "W3", name: "Worker 5" },
    ],
  };

  const trucks: Trucks[] = [delivery, constellation, worker];

  return (
    <main className="min-w-full min-h-screen p-4 bg-gray-200">
      <div className="grid w-3/4 grid-cols-1 gap-4 m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {trucks.map((truck) => (
          <div
            key={truck.id}
            onMouseEnter={() => setActiveTruck(truck.id)}
            onMouseLeave={() => setActiveTruck(null)}
            onClick={() => setActiveTruck(truck.id)}
            className={`max-w-[300px] max-h-[300px] flex p-4 m-10 text-white rounded-lg bg-slate-800 transition-transform duration-300 ease-in-out ${
              activeTruck === truck.id ? "transform scale-105" : ""
            }`}
          >
            <Image
              className="bg-white rounded-lg mix-h-[300px] mix-w-[300px]"
              src={truck.image}
              alt={truck.name}
              width={300}
              height={300}
            />
            {activeTruck === truck.id && (
              <div className="p-2 mt-2 bg-gray-900 rounded-lg sm:relative sm:mt-4 sm:w-full sm:flex sm:flex-col">
                {truck.SubTrucks.map((subTruck) => (
                  <div
                    key={subTruck.id}
                    className="p-2 mb-2 text-black bg-gray-300 rounded-lg"
                  >
                    {subTruck.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
