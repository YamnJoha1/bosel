interface TemplateProps {
  title: string;
  description: string;
}

export default function TemplatePage({ title, description }: TemplateProps) {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-green-800">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </section>
  );
}
