"use client";

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

    // تنظيف الحالة بعد المحاولة
    if (outcome === "accepted") {
      setInstallPrompt(null);
      setIsInstallable(false);
    }
  };

  return { isInstallable, handleInstallClick };
}

export const useDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  return { isMobileDevice };
}
