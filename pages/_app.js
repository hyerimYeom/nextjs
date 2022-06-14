//To make _app.js file short put Layout component (Most common pattern in Nextjs)
import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css"

export default function App({Component, pageProps}){
    return( 
        <React.StrictMode>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </React.StrictMode>
    );
}