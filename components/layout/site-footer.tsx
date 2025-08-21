import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Upskwela" width={112} height={30} className="h-6 w-auto" />
            <span className="text-sm text-muted-foreground">
              © 2025 Upskwela. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Community-Based Learning in the Philippines
          </div>
        </div>
      </div>
    </footer>
  );
}
