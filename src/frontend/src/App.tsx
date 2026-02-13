import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SmartBreakLandingPage from './pages/SmartBreakLandingPage';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SmartBreakLandingPage />
      <Toaster />
    </ThemeProvider>
  );
}
