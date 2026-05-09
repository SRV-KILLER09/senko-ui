import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { ShaderBackground } from '@/registry/shader-background';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dynamic Glows */}
        <div className="absolute -top-[30%] -right-[10%] h-[800px] w-[800px] rounded-full bg-blue-500/15 blur-[120px] dark:bg-blue-500/20" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/15 blur-[120px] dark:bg-indigo-500/20" />

        {/* Full-width shader background fading out at the bottom */}
        <div className="absolute top-0 left-0 right-0 h-[60vh] z-0 opacity-40 dark:opacity-60 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
          <ShaderBackground intensity={0.5} fps={30} className="!absolute inset-0 !z-0" />
        </div>

        {/* Background Grid - Linear Style - FULL WIDTH */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_80%,transparent_100%)]" />
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 senko-noise opacity-[0.06] dark:opacity-[0.12] z-0" />
      </div>

      {/* Docs Layer with Glassmorphism Overrides */}
      <div className="relative z-10 docs-theme-overrides">
        <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
          {children}
        </DocsLayout>
      </div>
    </div>
  );
}