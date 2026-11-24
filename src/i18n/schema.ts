import { defaultLang, type Locale } from './ui';
import { useTranslations } from './utils';

const SITE_BASE = 'https://editpdf.github.io';
const OG_IMAGE = 'https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786342039/Online_Tool_rc1ybr.png';

export function buildPageSchema(lang: Locale) {
  const t = useTranslations(lang);
  const pageUrl = lang === defaultLang ? `${SITE_BASE}/` : `${SITE_BASE}/${lang}/`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: t('brand.name'),
        url: pageUrl,
        description: t('seo.description'),
        inLanguage: lang,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires a modern web browser with JavaScript enabled.',
        screenshot: OG_IMAGE,
        featureList: [
          t('features.f1.title'),
          t('features.f2.title'),
          t('features.f3.title'),
          t('features.f4.title'),
          t('features.f5.title'),
          t('features.f6.title'),
        ],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'HowTo',
        name: t('how.title'),
        description: t('how.subtitle'),
        inLanguage: lang,
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: t('how.step1.title'),
            text: t('how.step1.desc'),
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: t('how.step2.title'),
            text: t('how.step2.desc'),
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: t('how.step3.title'),
            text: t('how.step3.desc'),
          },
        ],
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: [
          {
            '@type': 'Question',
            name: t('faq.q1'),
            acceptedAnswer: { '@type': 'Answer', text: t('faq.a1') },
          },
          {
            '@type': 'Question',
            name: t('faq.q2'),
            acceptedAnswer: { '@type': 'Answer', text: t('faq.a2') },
          },
          {
            '@type': 'Question',
            name: t('faq.q3'),
            acceptedAnswer: { '@type': 'Answer', text: t('faq.a3') },
          },
          {
            '@type': 'Question',
            name: t('faq.q4'),
            acceptedAnswer: { '@type': 'Answer', text: t('faq.a4') },
          },
          {
            '@type': 'Question',
            name: t('faq.q5'),
            acceptedAnswer: { '@type': 'Answer', text: t('faq.a5') },
          },
          {
            '@type': 'Question',
            name: t('faq.q6'),
            acceptedAnswer: { '@type': 'Answer', text: t('faq.a6') },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_BASE}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('brand.name'),
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
