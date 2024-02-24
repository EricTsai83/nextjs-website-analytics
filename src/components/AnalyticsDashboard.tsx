type AnalyticsDashboardProps = {
  avgVisitorsPerDay: string;
  amtVisitorsToday: number;
};

function AnalyticsDashboard({
  avgVisitorsPerDay,
  amtVisitorsToday,
}: AnalyticsDashboardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p>Avg. visitors/day</p>
          <p className="text-3xl font-semibold">{avgVisitorsPerDay}</p>
        </div>
        <div>
          <p>Visitors today</p>
          <p className="text-3xl font-semibold">{amtVisitorsToday}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
