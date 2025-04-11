import { notFound } from "next/navigation";
import { ImageSlider } from "@/components/pagesComponents/ImageSlider";
import { PageHeader } from "@/components/pagesComponents/PageHeader";
import { pageContents } from "@/constants/pagesContent";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug?.join("/") || "";
  const content = pageContents[slugPath];

  if (!content) return notFound();

  return (
    <main>
      <PageHeader title={content.title} />

      <section className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl font-bold text-green-900">{content.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {content.description}
        </p>

        {content.images && content.images.length > 0 && (
          <ImageSlider images={content.images} />
        )}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(pageContents).map((slugPath) => {
    const slugArray = slugPath === "" ? [] : slugPath.split("/");
    return { slug: slugArray };
  });
}