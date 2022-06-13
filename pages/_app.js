//To make _app.js file short put Layout component (Most common pattern in Nextjs)
import Layout from "../components/Layout";
import "../styles/globals.css"

export default function App({Component, pageProps}){
    console.log('component : ',Component)
    console.log(pageProps)
    return( 
    <Layout>
        <Component {...pageProps}/>
    </Layout>
    );
}