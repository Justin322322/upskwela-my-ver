import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Feature = {
  title: string;
  description: string;
};

const defaultFeatures: Feature[] = [
  {
    title: 'Community-Based Learning',
    description:
      'Build your own community, set subscription tiers, and earn revenue while helping others learn and grow together.',
  },
  {
    title: 'Structured Courses',
    description:
      'Create and sell courses with premium content. Set your prices, track enrollments, and manage your revenue streams.',
  },
  {
    title: 'Creator Monetization',
    description:
      'Earn revenue through subscriptions, course sales, and exclusive content. Get paid directly with transparent revenue sharing.',
  },
  {
    title: 'Analytics & Insights',
    description:
      'Track your earnings, monitor engagement, and optimize your content strategy with comprehensive analytics.',
  },
  {
    title: 'Gamified Learning',
    description:
      'Earn XP, unlock achievements, and climb leaderboards. Make learning addictive with badges, rewards, and recognition systems.',
  },
  {
    title: 'Events & Calendar',
    description:
      'Schedule live sessions, workshops, and community events. Integrated calendar keeps everyone synchronized and engaged.',
  },
];

export function FeatureCards({ features = defaultFeatures }: { features?: Feature[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title}>
          <CardHeader>
            <CardTitle>{f.title}</CardTitle>
            <CardDescription>{f.description}</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ))}
    </div>
  );
}
