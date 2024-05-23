import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import './index.scss';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout;