import React, { useState, useRef, useEffect } from 'react';
import { X, RefreshCcw } from 'lucide-react';

const FONTS = [
  'Caveat', 'Cookie', 'Dancing Script', 'Great Vibes', 
  'Handlee', 'Pacifico', 'Patrick Hand', 'Sacramento', 
  'Satisfy', 'Yellowtail'
];

export default function SignatureModal({ isOpen, onClose, onSave }) {
  const [activeTab, setActiveTab] = useState('type'); // 'type' | 'draw' | 'upload'
  const [typedName, setTypedName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div className="bg-white shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-stone-100">
          <h2 className="text-xl font-medium tracking-tight text-stone-900">Add Signature</h2>
          <button onClick={onClose} aria-label="Close modal" className="text-stone-400 hover:text-red-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-8 border-b border-stone-100">
          {['type', 'draw', 'upload'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition-all capitalize ${activeTab === tab ? 'border-red-600 text-red-600' : 'border-transparent text-stone-500 hover:text-stone-800'}`}
            >
              {tab} Signature
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-grow bg-stone-50/50">
          
          {activeTab === 'type' && (
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  value={typedName}
                  onChange={(e) => setTypedName(e.target.value)}
                  placeholder="Type your name..."
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-200 focus:border-red-600 outline-none text-2xl text-stone-900 placeholder:text-stone-400 transition-colors"
                />
              </div>

              {typedName.trim() && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FONTS.map(font => (
                    <button
                      key={font}
                      onClick={() => saveTypedSignature(font)}
                      className="p-6 bg-white border border-stone-200 hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center min-h-[120px] overflow-hidden group"
                    >
                      <span 
                        style={{ fontFamily: font }} 
                        className="text-4xl text-stone-800 group-hover:text-red-600 transition-colors whitespace-nowrap"
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
              <div className="w-full bg-white border border-stone-200 overflow-hidden relative group">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={250}
                  onPointerDown={startDrawing}
                  onPointerMove={draw}
                  onPointerUp={stopDrawing}
                  onPointerLeave={stopDrawing}
                  className="w-full h-auto cursor-crosshair touch-none"
                  style={{ minHeight: '250px' }}
                />
                <button 
                  onClick={clearCanvas}
                  className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 bg-white shadow-sm border border-stone-100 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  title="Clear signature"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="w-full flex justify-end mt-6">
                <button 
                  onClick={saveDrawnSignature}
                  className="px-8 py-3 bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Apply Signature
                </button>
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="flex flex-col items-center">
              {!uploadedImage ? (
                <label className="w-full flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-stone-200 bg-white hover:border-red-400 hover:bg-red-50/30 transition-colors cursor-pointer">
                  <p className="text-stone-500 mb-2 font-medium">Click to upload image</p>
                  <p className="text-stone-400 text-sm">PNG or JPG, max 5MB</p>
                  <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleImageUpload} />
                </label>
              ) : (
                <div className="w-full flex flex-col items-center">
                  <div className="w-full bg-white border border-stone-200 p-6 flex items-center justify-center min-h-[250px] relative group">
                    <img src={uploadedImage} alt="Uploaded signature" className="max-w-full max-h-[200px] object-contain" />
                    <button 
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 bg-white shadow-sm border border-stone-100 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <RefreshCcw className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="w-full flex justify-end mt-6">
                    <button 
                      onClick={saveUploadedSignature}
                      className="px-8 py-3 bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Apply Signature
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
