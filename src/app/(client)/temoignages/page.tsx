import BlogLayout from "@/components/Admin/BlogLayout";

import { Card, CardContent } from "@/components/Temoignages/CardTemoignages";
import { temoignages, temoignagesVideos } from "@/data/temoignages";
import Image from "next/image";
import { contentTemoignages } from "@/lib/getContentPage";

export const dynamic = "force-dynamic";


import { generateJSONLD, generateStaticMetadata } from "@/lib/seo";
import { seoTemoignages } from "@/data/seoData";
import VideoSEO from "@/components/VideoSEO";


export const metadata = generateStaticMetadata(seoTemoignages);


// src/app/(client)/temoignages/page.tsx

export default async function TemoignagesPage() {
    return (
        <>
            <BlogLayout content={contentTemoignages}>
                <article className="lg:col-span-3 space-y-10">

                    {/* Sections */}
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            Quelques témoignages de nos clients
                        </h1>

                        {/* Témoignages texte */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {temoignages.map((t, index) => (
                                <Card
                                    key={t.id}
                                    className="rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <Image
                                                src={`/temoignages/${index + 1}.jpg`}
                                                alt={`temoignages de ${t.nom}`}
                                                width={50}
                                                height={50}
                                                className="rounded-full mr-4"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-lg">{t.nom}</h3>
                                                <p className="text-sm text-gray-500">{t.ville}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{t.message}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Témoignages vidéos */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-6 text-center">
                                Témoignages en vidéos
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {temoignagesVideos.map((video, index) => (
                                    <VideoSEO
                                        key={index}
                                        title={video.title}
                                        description={video.description}
                                        mp4Src={video.mp4Src}
                                        webmSrc={video.webmSrc}
                                        thumbnail={video.thumbnail}
                                        transcript={video.transcript}
                                        uploadDate={video.uploadDate}
                                        subtitles={video.subtitles}
                                    />
                                ))}
                            </div>
                        </div>


                    </div>
                </article>
            </BlogLayout>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: generateJSONLD(seoTemoignages) }}
            />
        </>
    );
}
