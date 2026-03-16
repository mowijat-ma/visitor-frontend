import { useTranslations } from "next-intl"
        
export default async function NewsSection() {
    const t = useTranslations("")
    return (
        <section className="mx-auto py-8">
            <h2 className="text-2xl font-bold text-primary">{t('HomePage.newsTitle')}</h2>
 
        </section>
    )
} 