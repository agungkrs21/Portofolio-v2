export function Video({ source }: { source: string }) {
  return (
    <video
      src={source}
      controls
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="rounded-2xl w-full h-full"
      aria-hidden="true"
    />
  );
}
