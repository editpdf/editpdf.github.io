import React, { useState, useRef, useEffect } from 'react';
import { X, RefreshCcw } from 'lucide-react';

const FONTS = [
  'Caveat', 'Cookie', 'Dancing Script', 'Great Vibes', 
  'Handlee', 'Pacifico', 'Patrick Hand', 'Sacramento', 
  'Satisfy', 'Yellowtail'
];

export default function SignatureModal({ isOpen, onClose, onSave, dict = {} }) {
  const [activeTab, setActiveTab] = useState('type'); // 'type' | 'draw' | 'upload'
  const [typedName, setTypedName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  
  // Translation helper
  const t = (key, fallback) => dict[key] || fallback;

  // Drawing state
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (isOpen && activeTab === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#dc2626'; // red-600
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  // Draw Tab Handlers
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveDrawnSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const pixelBuffer = new Uint32Array(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
    if (!pixelBuffer.some(color => color !== 0)) {
      return;
    }

    const dataUrl = canvas.toDataURL('image/png');
    onSave(dataUrl);
    onClose();
  };

  const saveTypedSignature = (fontFamily) => {
    if (!typedName.trim()) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    const fontSize = 80;
    ctx.font = `${fontSize}px "${fontFamily}"`;
    
    const metrics = ctx.measureText(typedName);
    const width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    
    canvas.width = Math.max(width + 40, 100);
    canvas.height = Math.max(height + 40, 100);
    
    ctx.font = `${fontSize}px "${fontFamily}"`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#dc2626'; // red-600
    
    ctx.fillText(typedName, 20, canvas.height / 2);
    
    const dataUrl = canvas.toDataURL('image/png');
    onSave(dataUrl);
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const saveUploadedSignature = () => {
    if (uploadedImage) {
      onSave(uploadedImage);
      onClose();
    }
  };

  const tabLabels = {
    type: t('sig.typeTab', 'Type Signature'),
    draw: t('sig.drawTab', 'Draw Signature'),
    upload: t('sig.uploadTab', 'Upload Image'),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 dark:bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] rounded-xl transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-stone-100 dark:border-slate-800">
          <h2 className="text-xl font-medium tracking-tight text-stone-900 dark:text-white">
            {t('sig.title', 'Add Signature')}
          </h2>
          <button 
            onClick={onClose} 
            aria-label={t('sig.close', 'Close modal')} 
            className="text-stone-400 dark:text-stone-500 hover:text-red-600 dark:hover:text-red-400 transition-colors p-1 rounded-lg hover:bg-stone-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-8 border-b border-stone-100 dark:border-slate-800 bg-stone-50/30 dark:bg-slate-900/50">
          {['type', 'draw', 'upload'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition-all cursor-pointer ${
                activeTab === tab 
                  ? 'border-red-600 text-red-600 dark:border-red-500 dark:text-red-400 font-semibold' 
                  : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-grow bg-stone-50/50 dark:bg-slate-950/50">
          
          {activeTab === 'type' && (
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  value={typedName}
                  onChange={(e) => setTypedName(e.target.value)}
                  placeholder={t('sig.namePlaceholder', 'Type your name...')}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-200 dark:border-slate-700 focus:border-red-600 dark:focus:border-red-500 outline-none text-2xl text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-600 transition-colors"
                />
              </div>

              {typedName.trim() && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FONTS.map(font => (
                    <button
                      key={font}
                      onClick={() => saveTypedSignature(font)}
                      className="p-6 bg-white dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 hover:border-red-600 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all flex items-center justify-center min-h-[120px] overflow-hidden group rounded-lg cursor-pointer shadow-sm hover:shadow"
                    >
                      <span 
                        style={{ fontFamily: font }} 
                        className="text-4xl text-stone-800 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors whitespace-nowrap"
                      >
                        {typedName}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'draw' && (
            <div className="flex flex-col items-center">
              <div className="w-full bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 overflow-hidden relative group rounded-lg">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={250}
                  onPointerDown={startDrawing}
                  onPointerMove={draw}
                  onPointerUp={stopDrawing}
                  onPointerLeave={stopDrawing}
                  className="w-full h-auto cursor-crosshair touch-none bg-white dark:bg-slate-900"
                  style={{ minHeight: '250px' }}
                />
                <button 
                  onClick={clearCanvas}
                  className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400 bg-white dark:bg-slate-800 shadow-sm border border-stone-100 dark:border-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  title={t('sig.clear', 'Clear')}
                  aria-label={t('sig.clear', 'Clear')}
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="w-full flex justify-end mt-6">
                <button 
                  onClick={saveDrawnSignature}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow"
                >
                  {t('sig.apply', 'Apply Signature')}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="flex flex-col items-center">
              {!uploadedImage ? (
                <label className="w-full flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:border-red-400 dark:hover:border-red-500 hover:bg-red-50/30 dark:hover:bg-red-950/20 transition-colors cursor-pointer rounded-lg">
                  <p className="text-stone-700 dark:text-stone-300 mb-2 font-medium">{t('sig.uploadBoxPrompt', 'Click to upload image')}</p>
                  <p className="text-stone-400 dark:text-stone-500 text-sm">{t('sig.uploadBoxSub', 'PNG or JPG, max 5MB')}</p>
                  <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleImageUpload} />
                </label>
              ) : (
                <div className="w-full flex flex-col items-center">
                  <div className="w-full bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 p-6 flex items-center justify-center min-h-[250px] relative group rounded-lg">
                    <img src={uploadedImage} alt="Uploaded signature" className="max-w-full max-h-[200px] object-contain" />
                    <button 
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400 bg-white dark:bg-slate-800 shadow-sm border border-stone-100 dark:border-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                      title={t('sig.changeImage', 'Change Image')}
                      aria-label={t('sig.changeImage', 'Change Image')}
                    >
                      <RefreshCcw className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="w-full flex justify-end mt-6">
                    <button 
                      onClick={saveUploadedSignature}
                      className="px-8 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow"
                    >
                      {t('sig.apply', 'Apply Signature')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
