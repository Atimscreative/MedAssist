import Navbar from '../../components/dashboard-components/Navbar';
import AddDependant from '../../components/dashboard-components/modals/AddDependant';
import MedCalenderOverview from '../../components/dashboard-components/MedCalenderOverview';
import MedMgtOverview from '../../components/dashboard-components/MedMgtOverview';
import AdherenceOverview from '../../components/dashboard-components/AdherenceOverview';
import UserOverview from '../../components/dashboard-components/UserOverview';
import  NoteOverview  from '../../components/dashboard-components/NoteOverview';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="w-full px-4 pb-20 pt-20 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-8 lg:px-0 lg:pt-5">
        <div className="space-y-6">
          {/* USER GREETINGS */}
          <UserOverview />

          {/* MEDICATION MANAGEMENT OVERVIEW */}
          <MedMgtOverview />

          {/* MEDICATION CALENDER REMINDER */}
          <MedCalenderOverview />
        </div>

        {/* ADHERENCE & NOTE OVERVIEW */}
        <div className="mt-6 flex flex-col gap-y-6 lg:mt-0">
          <AdherenceOverview />
          <NoteOverview />
        </div>
      </section>

      <AddDependant />
    </>
  );
};

export default Dashboard;
