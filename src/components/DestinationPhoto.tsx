type DestinationPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  priority?: boolean;
};

export function DestinationPhoto({
  src,
  alt,
  className = "",
  fallback,
  priority = false,
}: DestinationPhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "eager"}
      fetchPriority={priority ? "high" : "high"}
      decoding={priority ? "sync" : "async"}
      className={`h-full w-full object-cover object-center ${className}`}
      onError={(event) => {
        const image = event.currentTarget;
        if (fallback && image.dataset.fallback !== "1") {
          image.dataset.fallback = "1";
          image.src = fallback;
        }
      }}
    />
  );
}
