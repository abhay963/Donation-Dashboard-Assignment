
import './App.css'
import {donations} from "./data";
import DonationsChart from './components/DonationsCharts'
import DonorTable from './components/DonorTable'
import StatsCards from './components/StatsCards'

const App=()=>{
  const total=donations.reduce((sum,d)=>sum+d.amount,0);
  const donors=new Set(donations.map((d)=>d.name)).size;

  return(
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6">
<header className='text-center mb-8'>
<h1 className='text-4xl font-bold text-pink-600'>
  Cancel Support Donation Dashboard
</h1>
<p className="text-gray-600 mt-2">
  Tracking generosity and spreading hope 💖
</p>

</header>

<StatsCards total={total} donors={donors}/>
<DonationsChart data={donations}/>
<DonorTable data={donations}/>


 <footer className="text-center text-gray-500 text-sm py-8">
        © 2025 Cancer Support | Built with ❤️ by Abhay Kumar Yadav
      </footer>

    </div>
  )

}

export default App;

