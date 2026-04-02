export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">شروط الاستخدام</h1>
          <p className="text-muted-foreground">
            آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. القبول بالشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              بزيارتك لموقع موجات واستخدامك لخدماتنا، فأنت توافق على الامتثال لهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. الاستخدام المقبول</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              أنت توافق على استخدام الموقع فقط للأغراض القانونية والبناءة. يحظر عليك:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• نشر محتوى يخالف القوانين المحلية أو الدولية</li>
              <li>• الإساءة أو التحرش برموز أو مستخدمين آخرين</li>
              <li>• محاولة اختراق أو تعطيل الموقع</li>
              <li>• نسخ أو توزيع المحتوى دون إذن</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. حقوق الملكية الفكرية</h2>
            <p className="text-muted-foreground leading-relaxed">
              جميع المحتوى على الموقع، بما في ذلك النصوص والصور والفيديوهات، محمي بموجب قوانين حقوق الملكية الفكرية. لا يُسمح بإعادة إنتاج أو توزيع المحتوى دون الحصول على إذن كتابي منا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. المسؤولية</h2>
            <p className="text-muted-foreground leading-relaxed">
              يتم توفير الموقع كما هو دون ضمانات من أي نوع. لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناشئة عن استخدامك للموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. التعديلات على الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر الموقع أو بالبريد الإلكتروني.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. القانون الحاكم</h2>
            <p className="text-muted-foreground leading-relaxed">
              تخضع هذه الشروط للقوانين الموحدة للدول العربية وتُفسر وفقاً لها.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. التواصل معنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر البريد الإلكتروني على contact@mowijat.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
