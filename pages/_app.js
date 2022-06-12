import NavBar from "../components/NavBar";

export default function App({Component, pageProps}){
    return( 
    <>
        <NavBar color="white"/>
        <Component {...pageProps}/>
        <style jsx>
            {`
                a {
                    color : white;
                }
            `}
        </style>
    </>
    );
}