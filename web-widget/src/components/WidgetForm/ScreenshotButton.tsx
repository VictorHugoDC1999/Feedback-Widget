import { useState } from 'react';
import { Camera } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { Loading } from '../Loanding';

interface Sc {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function ScreenshotButton() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!); //vai tirar um print da nossa foto
    const base64image = canvas.toDataURL('image/png'); //vai converter para uma imagem png no formato base64(formato de texto e esse texto representa uma imagem)

    console.log(base64image);

    // setIsTakingScreenshot(false);
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
