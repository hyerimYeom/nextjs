// movies/1231231

import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log('router : ',router)
    return "detail";
};
