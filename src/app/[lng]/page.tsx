import type { Metadata, ResolvingMetadata } from 'next'
import type { WithLocaleParams } from '@types'
import { serverTranslation } from '@i18n';
import { SonnerDemo } from '@components/sonner-demo';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: WithLocaleParams<Props>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lng } = params
 
  const {t} = await serverTranslation(lng, "common")
 
  return {
    title: t('app_title')
  }
}


export default function Home() {
  return (
    <main>
      <SonnerDemo />
    </main>
  );
}
