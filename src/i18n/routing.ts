import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ar'],
  defaultLocale: 'ar',  
  pathnames: {
    '/': '/',
    // '/pathnames': {
    //   de: '/pfadnamen'
    // }
  }
});