// src/app/health/page.tsx

// Cache-i söndürürük ki, hər dəfə canlı olaraq yeni datanı yoxlasın (SSR)
export const dynamic = 'force-dynamic';

interface TodoSample {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getHealthData(): Promise<TodoSample> {
  // Test üçün hər hansı bir public API istifadə edirik
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store', // dynamic fetch təmin edir
  });

  if (!res.ok) {
    throw new Error('Failed to fetch health status data');
  }

  return res.json();
}

export default async function HealthPage() {
  const data = await getHealthData();

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4 my-8 border border-green-100">
      <div className="flex items-center space-x-2">
        <span className="h-3 h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
        <h1 className="text-xl font-semibold text-gray-900">System Health Check</h1>
      </div>
      
      <div className="text-sm text-gray-600 bg-slate-50 p-4 rounded-md font-mono">
        <p><span className="font-bold text-slate-700">Status:</span> 200 OK</p>
        <p><span className="font-bold text-slate-700">Timestamp:</span> {new Date().toISOString()}</p>
        <p><span className="font-bold text-slate-700">Environment:</span> {process.env.NODE_ENV}</p>
      </div>

      <div className="border-t pt-4">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Fetched Data Verification:</h2>
        <div className="bg-green-50 p-3 rounded text-xs text-green-800 font-mono">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}