"use client";

import { Monitor, Smartphone, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePWA } from "@/hooks/usePWA"; // تأكد من المسار الصحيح
import { cn } from "@/lib/utils";

export default function AppDownloadSection() {
  const { isInstallable, handleInstallClick } = usePWA();

  return (
    <section className="mx-auto py-16 max-w-7xl" dir="rtl">
      <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <Download size={20} />
              <span className="text-sm font-bold tracking-widest uppercase">تطبيق موجات</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              تصفح محتوانا الثقافي والسينمائي بشكل أسرع وأسهل
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              يمكنك الآن تثبيت "موجات" كتطبيق على جهازك مباشرة. استمتع بتجربة تصفح سلسة وسريعة مع إمكانية الوصول السريع من الشاشة الرئيسية.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              {/* يظهر الزر فقط إذا كان المتصفح يدعم التثبيت ولم يتم تثبيته بعد */}
              <Button 
                onClick={handleInstallClick}
                disabled={!isInstallable}
                size="lg" 
                className={cn(
                  "gap-2 px-8 py-6 text-lg rounded-full transition-all",
                  !isInstallable && "opacity-50 cursor-not-allowed grayscale"
                )}
              >
                {isInstallable ? "تثبيت التطبيق الآن" : "التطبيق مثبت بالفعل"}
                <ArrowLeft size={20} />
              </Button>
              {/* <Button>dd</Button> */}
            </div>
          </div>

          {/* الخطوات البصرية كما في الكود السابق... */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-slate-100 flex flex-col gap-4">
              <Monitor size={24} className="text-primary" />
              <h3 className="font-bold text-lg text-slate-900">نسخة الحاسوب</h3>
              <p className="text-sm text-slate-500 italic">اضغط على زر التثبيت في الأعلى أو من شريط المتصفح.</p>
            </div>
            <div className="bg-white p-6 border border-slate-100 flex flex-col gap-4">
              <Smartphone size={24} className="text-primary" />
              <h3 className="font-bold text-lg text-slate-900">نسخة الهاتف</h3>
              <p className="text-sm text-slate-500 italic">اختر "إضافة إلى الشاشة الرئيسية" من قائمة خيارات المتصفح.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}