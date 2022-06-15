// movies/1231231

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const [title, id] = params;
    // const router = useRouter(); //Use this client-side rendering
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
    
};


export async function getServerSideProps({params : {params}}) {
	return {
		props : {
			params
		}
	};
}

