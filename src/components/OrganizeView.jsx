import React, { useEffect, useState, useRef } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Trash2, GripVertical, FileText } from 'lucide-react';

function SortableItem({ id, pageNum, pdfDoc, onDelete, onClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.9 : 1,
  };

  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  useEffect(() => {
    let isActive = true;
    const renderThumb = async () => {
      if (!pdfDoc || !canvasRef.current) return;
      try {
        const page = await pdfDoc.getPage(pageNum);
        if (!isActive) return;
        
        const viewport = page.getViewport({ scale: 0.3 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        renderTaskRef.current = page.render({ canvasContext: context, viewport });
        await renderTaskRef.current.promise;
      } catch (e) {
        if (e.name !== 'RenderingCancelledException') {
          console.error(e);
        }
      }
    };
    renderThumb();
    return () => {
      isActive = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [pdfDoc, pageNum]);

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className="relative bg-white border border-stone-200 group flex flex-col items-center hover:border-red-600 hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute top-2 left-2 z-10 p-1 bg-white/80 backdrop-blur-sm border border-stone-200 rounded text-stone-400 opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing transition-opacity" {...attributes} {...listeners} onClick={(e) => e.stopPropagation()}>
        <GripVertical className="w-4 h-4" />
      </div>
      
      <button 
        onClick={(e) => { e.stopPropagation(); onDelete(id); }}
        className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 backdrop-blur-sm border border-stone-200 rounded text-stone-400 hover:text-red-600 hover:border-red-200 opacity-0 group-hover:opacity-100 transition-all"
        title="Delete Page"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      <div 
        className="w-full h-full flex justify-center items-center bg-stone-50 overflow-hidden relative border-b border-stone-100"
        style={{ minHeight: '180px' }}
      >
        <canvas ref={canvasRef} className="max-w-full max-h-full object-contain pointer-events-none" />
      </div>
      
      <div className="py-3 px-4 w-full flex items-center justify-between bg-white text-sm">
        <span className="font-medium text-stone-700 flex items-center gap-2">
          <FileText className="w-4 h-4 text-stone-400" />
          Page {pageNum}
        </span>
      </div>
    </div>
  );
}

export default function OrganizeView({ pdfDoc, pageOrder, setPageOrder, onSelectPage }) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setPageOrder((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDelete = (id) => {
    if (pageOrder.length <= 1) {
      alert("You cannot delete the last page.");
      return;
    }
    setPageOrder(pageOrder.filter(p => p.id !== id));
  };

  return (
    <div className="w-full bg-stone-50 border border-stone-200 p-8 overflow-auto min-h-[70vh]">
      <div className="mb-8 flex justify-between items-center pb-4 border-b border-stone-200">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-1">Organize Pages</h2>
          <p className="text-sm text-stone-500">Drag pages to reorder them. Click the trash icon to delete a page.</p>
        </div>
        <div className="text-sm font-medium text-stone-400 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
          {pageOrder.length} {pageOrder.length === 1 ? 'Page' : 'Pages'}
        </div>
      </div>
      
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <SortableContext items={pageOrder.map(p => p.id)} strategy={rectSortingStrategy}>
            {pageOrder.map((pageObj, index) => (
              <SortableItem 
                key={pageObj.id} 
                id={pageObj.id} 
                pageNum={pageObj.originalNum} 
                pdfDoc={pdfDoc}
                onDelete={handleDelete}
                onClick={() => onSelectPage(index + 1)} // 1-indexed display page
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}
