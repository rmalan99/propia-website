interface ScaffoldPageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function ScaffoldPage({
  title,
  description,
  children,
}: ScaffoldPageProps) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <main className="flex flex-col w-full max-w-3xl items-center justify-between py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md">
              {description}
            </p>
          )}
        </div>
        {children && (
          <div className="mt-8 w-full">
            {children}
          </div>
        )}
      </main>
    </div>
  );
}