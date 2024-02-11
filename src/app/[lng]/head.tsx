import { languages, fallbackLng } from '@i18n/settings'
import { useTranslation } from '@i18n'

export default async function Head({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <title>{t('app_title')}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  )
}