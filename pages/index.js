import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({results}) {
	const router = useRouter();
	const onClick = (id, title) => {
		router.push(`movies/${title}/${id}`)
	}
	return (
		<div className="container">
			<Seo title="HOME" />
				{results?.map(movie => (
					<div onClick={() => onClick(movie.id, movie.original_title)}className="movie" key={movie.id}>
						<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						<h4>
						<Link href={`/movies/${movie.original_title}/${movie.id}`}>
							<a>
								{movie.original_title}
							</a>
						</Link>
						</h4>
					</div>
				))}
			<style jsx>{`
				.container {
					max-width : 600px;
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding : 30px;
					margin : 0 auto;
					gap: 20px;
				}
				.movie{
					curser : pointer;
					justify-self : center;
				}
				.movie img {	
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
			`}
			</style>
		</div>
	);
}

//name is super IMPORTANT! 
//if you wanna work ONLY server-side rendering on your app,
//then, use getServerSideProps() !

//server-side : when all data ready then show whole page, 
// pros - Be able to see whole page at once /cons - See the white page if the data isn't ready
  
export async function getServerSideProps(){
	const { results } = await ( await fetch('http://localhost:3000/api/movies')).json();
	
	return {
		props : {
			results,
		}
	};
}
