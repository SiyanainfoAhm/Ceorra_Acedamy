
import CourseDetail from './CourseDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' }
  ];
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return <CourseDetail courseId={params.id} />;
}
