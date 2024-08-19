import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../Pages/AboutPage";
import ErrorPage from "../Pages/ErrorPage";
import ROUTES from "./RoutesModel";
import FavoriteCards from "../cards/pages/FavoriteCards";
import LoginPage from "../users/pages/LoginPage";
import MyCardsPage from "../cards/pages/MyCardsPage";

import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandboxPage from "../sandbox/SandBoxPage";
import AddCardPage from "../cards/pages/AddCardPage";

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
            <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
            <Route path={ROUTES.SANDBOX} element={<SandboxPage />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
