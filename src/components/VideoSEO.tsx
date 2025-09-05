"use client";

import React from "react";

type VideoSEOProps = {
  title: string;
  description: string;
  mp4Src: string;
  webmSrc?: string;
  thumbnail: string;
  transcript: string;
  uploadDate: string;
  subtitles?: string;
};

export default function VideoSEO({
  title,
  description,
  mp4Src,
  webmSrc,
  thumbnail,
  transcript,
  uploadDate,
  subtitles,
}: VideoSEOProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: thumbnail,
    uploadDate,
    contentUrl: mp4Src,
    embedUrl: mp4Src,
    transcript,
    publisher: {
      "@type": "Organization",
      name: "Éveil Spirituel : Mystiques et Remèdes pour le Cœur",
    },
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <video
        controls
        className="w-full rounded-2xl shadow-lg"
        poster={thumbnail}
        preload="metadata"
      >
        <source src={mp4Src} type="video/mp4" />
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        {subtitles && (
          <track
            src={subtitles}
            kind="subtitles"
            srcLang="fr"
            label="Français"
            default
          />
        )}
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <p className="text-gray-600 mt-3">{description}</p>
      <details className="mt-2 text-sm text-gray-500">
        <summary>Lire la transcription</summary>
        <p>{transcript}</p>
      </details>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
