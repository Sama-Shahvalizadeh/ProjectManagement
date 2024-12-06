import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import SignUp from './components/SignUp/SignUp';
import { Link } from 'react-router-dom';

function App() {
  return (
    
      <Routes>
        {/* مسیر اصلی (صفحه لاگین) */}
        <Route path="/login" element={<LoginForm />} />
        {/* مسیر صفحه ثبت‌نام */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  );
}

export default App;


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


// import { Route, Routes } from "react-router-dom";
// import { Home } from "./components/Home";
// import LoginForm from "./components/Login/LoginForm";

// export default function App() {
// 	return (
// 		<div>
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/login" element={<LoginForm />} />
// 			</Routes>
// 		</div>
// 	);
// }