import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30">
      {/* Immersive Modern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Dynamic Glows */}
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[100px] dark:bg-indigo-500/10" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10" />

        {/* Minimalist Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
      </div>

      {/* Docs Layer with Refined Glassmorphism */}
      <div className="relative z-10 docs-theme-overrides">
        <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
          {children}
        </DocsLayout>
      </div>
    </div>
  );
}