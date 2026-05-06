import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getQuiz, getQuizSlugs } from "@/lib/data";
import QuizClient from "./QuizClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getQuizSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const quiz = getQuiz(slug);
    if (!quiz) return { title: "Không tìm thấy đề thi" };
    return {
        title: `${quiz.title} — Luyện thi | xDev Asia`,
        description: quiz.description,
    };
}

export default async function QuizPage({ params }: Props) {
    const { slug } = await params;
    const quiz = getQuiz(slug);
    if (!quiz) notFound();

    return <QuizClient quiz={quiz} />;
}
