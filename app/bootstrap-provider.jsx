// app/bootstrap-provider.jsx
'use client';

//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useEffect } from 'react';

export default function BootstrapProvider({ children }) {
  useEffect(() => {
    //import('bootstrap/dist/js/bootstrap.bundle.min.js');
    // Optionally tooltip / popover auto-init করতে পারো
    if (typeof document !== 'undefined') {
      const { Tooltip, Popover } = require('bootstrap');
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new Tooltip(el));
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new Popover(el));
    }
  }, []);

  return children;
}
