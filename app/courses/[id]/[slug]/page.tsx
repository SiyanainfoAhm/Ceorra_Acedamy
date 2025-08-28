import CourseDetail from '../CourseDetail';

export async function generateStaticParams() {
  return [
    { id: '1', slug: 'spoken-english' },
    { id: '2', slug: 'certified-ms-office-with-ai' },
    { id: '3', slug: 'certified-ms-office-without-ai' },
    { id: '4', slug: 'tally-gst' },
    { id: '5', slug: 'digital-marketing' },
    { id: '6', slug: 'web-development-full-stack' },
    { id: '7', slug: 'python-programming' },
    { id: '8', slug: 'data-analytics-excel-power-bi' },
    { id: '9', slug: 'graphic-design-photoshop-ai' },
    { id: '10', slug: 'cybersecurity-fundamentals' },
    { id: '11', slug: 'artificial-intelligence-ai-basics' },
    { id: '12', slug: 'entrepreneurship-startup-skills' },
    { id: '13', slug: 'soft-skills-personality-development' }
  ];
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const { id } = await params;
  return <CourseDetail courseId={id} />;
}