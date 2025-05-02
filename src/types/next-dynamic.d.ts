// Allow suspense option in Next.js dynamic imports
import 'next/dynamic';

declare module 'next/dynamic' {
  interface DynamicOptions {
    /**
     * Enable React suspense for dynamic components.
     */
    suspense?: boolean;
  }
} 