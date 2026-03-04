'use client';

import { useState, useEffect } from 'react';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [error, setError] = useState()
  
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI state to show the install button
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', (e)=>{
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI state to show the install button
      setIsInstallable(true);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      await deferredPrompt.userChoice;

      // We've used the prompt, and can't use it again
      setDeferredPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Installation failed");
    }
  };

  // if (!isInstallable) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="install-button bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
    >
      Install Web App
    </button>
  );
}
