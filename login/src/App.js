// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginForm from './components/Login/LoginForm';
// import SignUp from './components/SignUp/SignUp';
// import { Link } from 'react-router-dom';

// function App() {
//   return (
    
//       <Routes>
//         {/* مسیر اصلی (صفحه لاگین) */}
//         <Route path="/login" element={<LoginForm />} />
//         {/* مسیر صفحه ثبت‌نام */}
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//   );
// }

// export default App;





// import React from 'react';
// import LoginForm from './components/Login/LoginForm';
// import { useNavigate } from 'react-router-dom';


// function App() {
//     // const navigate = useNavigate();

//     return (
//         <div>
//             <LoginForm></LoginForm>
//         </div>
//     );
// }

// export default App;


import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import LoginForm from "./components/Login/LoginForm";
import SignUp from "./components/SignUp/SignUp";
import Email from "./components/Email/Email"
import Verify from "./components/VerificationCode/Verify"
import NewPass from "./components/NewPass/NewPass"
import SuccessPass from "./components/NewPass/SuccessPass"
import AddMember from "./components/AddMember/AddMember";
import CreateProject from "./components/CreateProject/CreateProject";
import ProfileView from "./components/ProfileView/ProfileView";
import ProfileEdit from "./components/ProfileView/ProfileEdit";


export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/email" element={<Email/>}/>
				<Route path="/verify" element={<Verify/>}/>
				<Route path="/newpass" element={<NewPass/>}/>
				<Route path="/successpass" element={<SuccessPass/>}/>
				<Route path="/addmember" element={<AddMember/>}/>
				<Route path="/createproject" element={<CreateProject/>}/>
				<Route path="/profileview" element={<ProfileView/>}/>
				<Route path="/profileedit" element={<ProfileEdit/>}/>

			</Routes>
		</div>
	);
}

// import React from 'react';
// import LoginForm from './components/Login/LoginForm';

// function App() {
//     return (
//         <div>
//             <LoginForm />
//         </div>
//     );
// }

// export default App;