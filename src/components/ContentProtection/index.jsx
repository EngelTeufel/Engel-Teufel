import React, { useEffect } from 'react';

const ContentProtection = () => {
  useEffect(() => {
    // Verhindere Rechtsklick
    const handleContextMenu = (e) => {
      e.preventDefault();
      showWarning('Rechtsklick ist deaktiviert');
    };

    // Verhindere Tastenkombinationen
    const handleKeyDown = (e) => {
      // Strg+C, Strg+Shift+C (Mac), Cmd+C (Mac)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        showWarning('Kopieren ist nicht erlaubt');
      }
      
      // Strg+Shift+I, Cmd+Shift+I (Entwicklertools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        showWarning('Entwicklertools sind deaktiviert');
      }
      
      // Strg+Shift+C (Entwicklertools Element Inspector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        showWarning('Element Inspector ist deaktiviert');
      }

      // Druck/Screenshot (Windows)
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        showWarning('Screenshots sind nicht erlaubt');
      }
    };

    // Verhindere Text-Auswahl
    const handleSelect = (e) => {
      e.preventDefault();
      showWarning('Text-Auswahl ist deaktiviert');
    };

    // Verhindere Drag & Drop
    const handleDragStart = (e) => {
      e.preventDefault();
      showWarning('Drag & Drop ist deaktiviert');
    };

    // Warnung anzeigen
    const showWarning = (message) => {
      const warning = document.createElement('div');
      warning.style.position = 'fixed';
      warning.style.top = '20px';
      warning.style.left = '50%';
      warning.style.transform = 'translateX(-50%)';
      warning.style.backgroundColor = '#B4833E';
      warning.style.color = '#242828';
      warning.style.padding = '10px 20px';
      warning.style.borderRadius = '5px';
      warning.style.zIndex = '9999';
      warning.style.fontWeight = 'bold';
      warning.textContent = message;

      document.body.appendChild(warning);

      setTimeout(() => {
        warning.remove();
      }, 2000);
    };

    // Event-Listener hinzufügen
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('dragstart', handleDragStart);

    // CSS-Regeln hinzufügen
    const style = document.createElement('style');
    style.textContent = `
      body {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-print-color-adjust: exact;
      }
      
      img {
        pointer-events: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }

      @media print {
        body {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelect);
      document.removeEventListener('dragstart', handleDragStart);
      style.remove();
    };
  }, []);

  return null;
};

export default ContentProtection;
