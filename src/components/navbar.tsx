import { useTranslation } from "@i18n";
import { cn } from "@lib/utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export async function Navbar({lng}: {lng: string}) {
  const { t } = await useTranslation(lng, "common");

  return (
    <nav className={cn('flex justify-between m-8')}>
      <div className={cn('grid place-content-center')}>
        <Link href="/">{t('app_title')}</Link>
      </div>

      <ModeToggle />
    </nav>
  );
}