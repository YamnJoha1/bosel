import { notFound } from "next/navigation";
import { Metadata } from "next";
import { pageContents } from "@/constants/pagesContents";
import { PageHeader } from "@/components/pagesComponents/PageHeader";
import { ImageSlider } from "@/components/pagesComponents/ImageSlider";
import InfoCard from "@/components/pagesComponents/InfoCard";
import AnimatePageWrapper from "@/components/AnimatePageWrapper";

type PageParams = {
  params: {
    slug?: string[];
  };
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const slugPath = (params.slug ?? []).join("/");
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

export default async function Page({ params }: PageParams) {
  const slugPath = (params.slug ?? []).join("/");
  const content = pageContents[slugPath];

  if (!content) return notFound();

  const isKontaktPage = slugPath === "kontakt";

  return (
    <div className="bg-primary-foreground">
      <PageHeader title={content.title} />
      <AnimatePageWrapper>
        <main className="padding-section mx-auto px-4 py-12 space-y-12 text-white">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-4xl font-bold text-white title-section">{content.title}</h1>
              <p className="text-lg text-white/90 leading-relaxed whitespace-pre-line">
                {content.description}
              </p>
              {content.content}
            </div>
            {!isKontaktPage && <InfoCard />}
          </section>
          {content.extra && <section className="space-y-4">{content.extra}</section>}
          {content.images && (
            <section>
              <ImageSlider images={content.images} />
            </section>
          )}
        </main>
      </AnimatePageWrapper>
    </div>
  );
}