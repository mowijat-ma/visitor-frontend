"use/client";

import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
export function usePWA() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(true);

  useEffect(() => {
    const handler = (e: any) => {
      // منع المتصفح من إظهار الشريط الافتراضي فوراً
      e.preventDefault();
      // حفظ الحدث لاستخدامه لاحقاً عند ضغط الزر
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    // إظهار نافذة التثبيت المنبثقة
    installPrompt.prompt();

    // انتظار رد فعل المستخدم
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the PWA install");
    }

    // تنظيف الحالة بعد المحاولة
    setInstallPrompt(null);
    setIsInstallable(false);
  };

  return { isInstallable, handleInstallClick };
}

export const useDevice = ()=>{
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // نتحقق فقط بعد تحميل المكون في المتصفح
    setIsMobileDevice(isMobile);
  }, []);
  return {isMobileDevice}
}