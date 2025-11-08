 
'use client'; 
import { useEffect } from 'react';

export default function BootstrapProvider({ children }) {
  useEffect(() => { 
    if (typeof document !== 'undefined') {
      const { Tooltip, Popover } = require('bootstrap');
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new Tooltip(el));
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new Popover(el));
    }
  }, []);

  return children;
}
