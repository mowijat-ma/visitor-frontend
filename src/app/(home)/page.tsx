export default function HomePage(){
    return (<>
    <h1>Home Page</h1>

    <div className="max-w-4xl mx-auto p-8" dir="rtl">
      {/* Title using the Modern UI font */}
      <h1 className="font-ui- text-4xl font-bold text-slate-900 mb-8">
        منهجية النقد في الأدب الكلاسيكي
      </h1>

      {/* Body using the Classic Amiri font */}
      <article className="font-classic text-2xl text-slate-800 space-y-6">
        <p>
          إن "النقد" في جوهره ليس مجرد إصدار أحكام، بل هو عملية سبر لأغوار النص الأدبي...
        </p>
        
        <blockquote className="border-r-4 border-gold-500 pr-4 italic text-slate-600">
          "النص الأدبي غابة من الرموز التي تحتاج إلى ناقد حصيف."
        </blockquote>
      </article>
    </div>
    </>)
}