import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import Layout from '../pages/Layout';
import { LoginPage } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import { RecoverPasswordPage } from '../pages/RecoverPassword';
import { Profile } from '../pages/Perfil';
import { Visitant } from '../pages/Visitant';
import { CreatVisitant } from '../pages/CreatVisitant';
import { UpdateVisitant } from '../pages/UpdateVisitant';
import { UpdateUser } from '../pages/UpdateUser';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='' element={<LoginPage />} />
					<Route path='createAccount' element={<CreateAccount />} />
					<Route path='RecoverPasswordPage' element={<RecoverPasswordPage />} />
					<Route path='home' element={<Home />} />
					<Route path='visitant' element={<Visitant />} />
					<Route path='profile' element={<Profile />} />
					<Route path='profile/update' element={<UpdateUser />} />
					<Route path='user/:id/visitant/creat' element={<CreatVisitant />} />
					<Route path='visitant/update' element={<UpdateVisitant />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;

