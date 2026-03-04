import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: 'Manifest'
  });

  return {
    name: t('name'),
    start_url: '/',
    theme_color: '#101E33',
    // theme_color: "#d84040",
    background_color: "#14181c",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/logos/logo_primary.png",
        type: "image/png"
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/logos/logo_primary.png",
        type: "image/png"
      }
    ],
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    // name: "Theaterboxd",
    short_name: "Mowijat",
    // start_url: "https://unamalgamable-li-proterandrously.ngrok-free.dev/",
    description: "This is a platform for theater plays review like letterboxd"
  };
}