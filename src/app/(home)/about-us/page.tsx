import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">عن موجات</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نحن منصة متخصصة في السينما والثقافة، نغوص في أعماق الفن السابع لنستخلص جوهر الفكر. نقدم نقداً سينمائياً متعمقاً وتغطية شاملة للأحداث الثقافية والسينمائية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">رؤيتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              بناء مجتمع ثقافي يقدر الفن السينمائي ويفهم عمقه، من خلال توفير محتوى نقدي وتحليلي متميز.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">رسالتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              تقديم محتوى سينمائي وثقافي عالي الجودة يساهم في نشر الوعي السينمائي والثقافي بين الجمهور.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">قيمنا</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>الاستقلالية في النقد والتحليل</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>الجودة والعمق في المحتوى</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>احترام المشاهد وذوقه</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>نشر الثقافة السينمائية</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
