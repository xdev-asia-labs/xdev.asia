import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoadmapDetailClient from "@/components/RoadmapDetailClient";
import {
    getAllRoadmapSlugs,
    getRoadmap,
} from "@/lib/roadmaps";

export function generateStaticParams() {
    return getAllRoadmapSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const roadmap = getRoadmap(slug);
    if (!roadmap) return {};

    return {
        title: `${roadmap.title} Roadmap | xDev Asia`,
        description: roadmap.description,
    };
}

export default async function RoadmapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const roadmap = getRoadmap(slug);

    if (!roadmap) notFound();

    return <RoadmapDetailClient roadmap={roadmap} />;
}
