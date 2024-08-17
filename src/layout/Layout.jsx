import React from "react";

import Main from "./main/Main";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}