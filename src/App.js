
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Suspense, lazy } from 'react';

 import React from 'react';

 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import ListCohort from './components/listCohort.js';
 import AdminOptions from './components/AdminOptions.js';
 //import SvgComponent from './components/svg.js';
 
 import ApplicantDetails from './components/ApplicantDetails.js';
 import ListApplicant from './components/listApplicant.js';
 import SvgComponent from './components/svg.js';

 import EditCohort from './components/EditCohort.js';
 import EditFollowup from './components/EditFollowup.js';
 import EditOnboarding from './components/EditOnboarding.js';
 import EditRound1 from './components/EditRound1.js';
 import EditRound2 from './components/EditRound2.js';
 import EditRound3 from './components/EditRound3.js';


 import ListRound1 from './components/ListRound1.js'
 import ListRound2 from './components/ListRound2.js';
 import ListRound3 from './components/ListRound3.js';
import ListFollowup from './components/ListFollowup.js';
import ListOnboarding from './components/ListOnboarding.js';

 import CreateCohort from './components/createCohort.js';
 import CreateFollowup from './components/CreateFollowup.js';
 import CreateOnboarding from './components/CreateOnboarding.js';
 import CreateRound1 from './components/CreateRound1.js';
 import CreateRound3 from './components/CreateRound3.js';
import CreateRound2 from './components/CreateRound2.js';
  import CreateAdmin from './components/CreateAdmin.js';


import Round1Details from './components/Round1Details.js';
import Round2Details from './components/Round2Details.js';
import CreateComment from './components/CreateComment.js';
import ListComment from './components/ListComment.js';
import DashboardRedirect from './components/DashboardRedirect.js';
import EditAdmin from './components/EditAdmin.js';
import FilterApplicants from './components/FilterApplicants.js';
const Login = lazy (() => import ( './components/Login.js'));
// import Register from './js/Pages/Auth/Register';
// import ForgotPassword from './js/Pages/Auth/ForgotPassword';
// import ResetPassword from './js/Pages/Auth/ResetPassword';
// import VerifyEmail from '.js/Pages/Auth/VerifyEmail';
// import Dashboard from '.js/Pages/Dashboard';
// import GuestLayout from '.js/Layouts/GuestLayout';
// import AuthenticatedLayout from '.js/Layouts/AuthenticatedLayout';
//import axiosInstance from './components/axiosInstance.js';

 function App() {
   return (
     <Router>
           <Suspense fallback={<div><center> Loading... </center>  </div>}>

       <Routes>
       {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<GuestLayout><Register /></GuestLayout>} />
                <Route path="/forgot-password" element={<GuestLayout><ForgotPassword /></GuestLayout>} />
                <Route path="/reset-password" element={<GuestLayout><ResetPassword /></GuestLayout>} />
                <Route path="/verify-email" element={<AuthenticatedLayout><VerifyEmail /></AuthenticatedLayout>} />
                <Route path="/dashboard" element={<AuthenticatedLayout><Dashboard /></AuthenticatedLayout>} />
             */}
         <Route path='/' element = {<Login/>} />
         <Route path="/admins/register" element={<CreateAdmin />} />
         <Route path="/admin/edit/:userId" element={<EditAdmin />} />
         <Route path="/admins/login" element={<Login />} />
         <Route path="/applicants/filter" element={<FilterApplicants/>} />

         <Route path="/comments/create/:applicant_id/:round_id/:round_type" element={<CreateComment />} />
         <Route path="/comments/:id" element={<ListComment />} />


         <Route path="/cohorts/create" element={<CreateCohort />} />
         <Route path="/followup/create" element={<CreateFollowup />} />
         <Route path="/onboarding/create" element={<CreateOnboarding />} />
         <Route path='/round1/create' element = { <CreateRound1/>} />
         <Route path='/round2/create' element = { <CreateRound2/>} />
         <Route path='/round3/create' element = { <CreateRound3/>} />


         <Route path="/cohorts/edit/:id" element={<EditCohort />} />
         <Route path="/followup/edit/:id" element={<EditFollowup />} />
         <Route path='/onboarding/edit/:id' element = {<EditOnboarding/>} />
         <Route path='/round1/edit/:id' element = { < EditRound1/> } />
         <Route path='/round2/edit/:id' element = { < EditRound2/> } />
         <Route path='/round3/edit/:id' element = { < EditRound3/> } />


         <Route path="cohorts/admin-options/:id" element={<AdminOptions />} />

         <Route path="/cohorts/index" element={<ListCohort />} />
         <Route path="/round1/:cohortId" element={<ListRound1 />} />
         <Route path="/round2/:cohortId" element={<ListRound2 />} />
         <Route path="/round3/:cohortId" element={<ListRound3 />} />
         <Route path="/followup/:cohortId" element={<ListFollowup />} />
         <Route path="/onboarding/:cohortId" element={<ListOnboarding />} />

        <Route path='/round1/details/:id' element = {<Round1Details/>} />
        <Route path='/round2/details/:id' element = {<Round2Details/>} />

<Route path='/applicant/:id' element = { <ApplicantDetails/>} />
       </Routes>
       </Suspense>
     </Router>
   );
 }
 
 export default App;
 
