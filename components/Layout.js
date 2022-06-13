import NavBar from "./NavBar";

export default function Layout({children}) {
    console.log('children : ',children)
    return(
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
};
