import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { analytics } from '@/utils/analytics';
import { getDate } from '@/utils';

async function Page() {
  const TRACKING_DAYS = 7;

  const pageviews = await analytics.retrieveDays('pageview', 7);

  const totalPageviews = pageviews.reduce((acc, curr) => {
    return (
      acc +
      curr.events.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!;
      }, 0)
    );
  }, 0);

  const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1);

  const amtVisitorsToday = pageviews
    .filter((ev) => ev.date === getDate())
    .reduce((acc, curr) => {
      return (
        acc +
        curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0)
      );
    }, 0);

  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relatuve w-full max-w-6xl mx-auto text-indigo-500">
        <AnalyticsDashboard
          avgVisitorsPerDay={avgVisitorsPerDay}
          amtVisitorsToday={amtVisitorsToday}
        />
      </div>
    </div>
  );
}

export default Page;
