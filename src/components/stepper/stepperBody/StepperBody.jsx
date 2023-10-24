import Head from '../head/Head';
import AdditionalPersonalInfo from './AdditionalPersonalInfo';
import FinalScreen from './FinalScreen';
import FormControl from './FormControl';
import SideBar from './SideBar';
import VerifyIdentity from './VerifyIdentity';
import FinancialDocuments from './financialDocuments/FinancialDocuments';
import './index.css';

const StepperBody = () => {
  return (
    <>
      <div className='w-4/5 m-auto mt-10'>
        <Head />
      </div>
      <div className='grid grid-flow-col grid-cols-3 gap-4 pl-52 pt-24 pb-32'>
        <SideBar />
        <FormControl />
      </div>
      <div className='grid grid-flow-col grid-cols-3 gap-4 pl-52 pt-24 pb-32'>
        <SideBar />
        <AdditionalPersonalInfo />
      </div>
      <VerifyIdentity />
      <FinancialDocuments />
      <FinalScreen />
    </>
  );
};

export default StepperBody;
