import Image from 'next/image'
import { type } from 'os';

type Game = {
  id: number,
  name: string,
  background_image: string,
  rating: number
}

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG}`);
  if(!res.ok){
    throw new Error("Failed to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await res.json()
  return data.results;
}

export default async function Home() {
  const games = await getGames()
  return (
    <main className="m-10 rounded-md grid grid-cols-4 gap-5">
      {games.map((game) => (
        <div className='bg-white p-5 col-span-4 md:col-span-2 lg:col-span-1 rounded-md flex flex-col justify-center' key={game.id}>
          <h1 className='font-bold text-lg text-center'>{game.name}</h1>
          <div className='aspect-video relative mt-4'> 
            <Image
              src={game.background_image}
              fill
              className='rounded-sm'
              alt={game.name}
            />
          </div>
          
        </div>
      ))}
    </main>
  )
}
