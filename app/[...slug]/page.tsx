import { notFound } from "next/navigation";
import { ImageSlider } from "@/components/pagesComponents/ImageSlider";
import { pageContents } from "@/constants/pagesContents";
import InfoCard from "@/components/pagesComponents/InfoCard";
import { Metadata } from "next";

type PageProps = {
  params: {
    slug?: string[];
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slugArray = await params?.slug || [];
  const slugPath = slugArray.join("/");
  const content = pageContents[slugPath];

  if (!content) {
    return {
      title: "Seite nicht gefunden",
      description: "Diese Seite existiert leider nicht.",
    };
  }

  return {
    title: content.title,
    description: content.description?.slice(0, 160),
    openGraph: {
      title: content.title,
      description: content.description?.slice(0, 160),
      images: content.images?.length ? [content.images[0]] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const slugArray = await params?.slug || [];
  const slugPath = slugArray.join("/");
  const content = pageContents[slugPath];

  if (!content) return notFound();

  const isKontaktPage = slugPath === "kontakt";

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Top section: Content + Sidebar */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Text */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-green-900">{content.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {content.description}
          </p>
        </div>

        {!isKontaktPage && <InfoCard />}
      </section>

      {content.extra && (
        <section className="space-y-4">
          {content.extra}
        </section>
      )}

      {content.images && content.images.length > 0 && (
        <section>
          <ImageSlider images={content.images} />
        </section>
      )}
    </main>
  );
}
