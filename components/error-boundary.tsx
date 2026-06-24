"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-zinc-950 min-h-screen p-8">
      <div className="flex flex-col items-center gap-4 text-center max-w-md">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400">
          Algo salió mal
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          {error.message || "Ha ocurrido un error inesperado"}
        </p>
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-900 text-white rounded-md transition-colors"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}