// WARN: Unused... probably...

/**
 * Heading for the count chart.
 *
 * @returns {CountChart} Count chart heading component.
 */
const CountChart = () => {
  return (
    <div className='rounded-2xl bg-white p-4 flex flex-col gap-4'>
      <h1 className='text-xl font-bold'>User Count</h1>
      <div className='flex gap-4'>
        <div className='flex-1 bg-primary h-20 rounded-lg'></div>
        <div className='flex-1 bg-secondary h-20 rounded-lg'></div>
      </div>
    </div>
  );
};

export default CountChart;

