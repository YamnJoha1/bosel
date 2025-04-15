import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/pagesComponents/PageHeader";
import { pageContents } from "@/constants/pagesContents";
import AnimatePageWrapper from "@/components/AnimatePageWrapper";

type LayoutProps = {
  children: ReactNode;
  params: { slug?: string[] };
};

export default async function SubPageLayout({ children, params }: LayoutProps) {
  const slugArray = await params?.slug || [];
  const slugPath = slugArray.join("/");
  const content = pageContents[slugPath];

  if (!content) return notFound();

  return (
    <>
      <PageHeader title={content.title} />
      <AnimatePageWrapper>
        <main>{children}</main>
      </AnimatePageWrapper>
    </>
  );
}
