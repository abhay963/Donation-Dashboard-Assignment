import './App.css';
import { donations } from "./data";
import DonorTable from './components/DonorTable';
import StatsCards from './components/StatsCards';
import DonationTrends from './components/DonationTrends';
import PieChartComponent from "./components/PieChartComponent.jsx";

const App = () => {
  const total = donations.reduce((sum, d) => sum + d.amount, 0);
  const donors = new Set(donations.map((d) => d.name)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-4 md:p-6 flex flex-col">
      <header className='text-center mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-pink-600'>
          Cancer Support Donation Dashboard
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Tracking generosity and spreading hope 💖
        </p>
      </header>

      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatsCards total={total} donors={donors} />
      </div>

      <div className="mt-10 overflow-x-auto">
        <DonorTable data={donations} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-10 mb-5">
        <div className="flex-1 flex flex-col h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <DonationTrends />
        </div>


        <div className="flex-1 flex flex-col h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <PieChartComponent />
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm py-8 mt-12 ">
        © 2025 Cancer Support | Built with ❤️ by Abhay Kumar Yadav
      </footer>
    </div>
  )
}

export default App;
