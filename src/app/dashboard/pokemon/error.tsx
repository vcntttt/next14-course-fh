"use client"; // Error components must be Client Components
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image src="/error.svg" alt="Error" width={300} height={300} />
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
          500
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          Server Error
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          Whoops, something went wrong on our servers.
        </p>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="mt-4"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
