export default function Loading() {
  return (
    <main className="min-h-screen bg-surface-container-lowest px-6 md:px-10 lg:px-20 pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">
        <div className="h-[460px] bg-linen fine-stone-border animate-pulse" />
        <div className="h-[640px] bg-linen fine-stone-border animate-pulse" />
      </div>
    </main>
  );
}
