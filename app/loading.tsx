import { Skeleton  } from "@/components/ui/skeleton";

export default function Loading(){
    return (
        <main className="m-10 rounded-md grid grid-cols-4 gap-5">
            {Array.from({length: 20}, (_, i) => i+1).map((ind) => (
                <div className='bg-white p-5 col-span-4 md:col-span-2 lg:col-span-1 rounded-md' key={ind}>
                    <Skeleton className="h-6 w-1/2 bg-gray-200 flex justify-center items-center"></Skeleton>
                    <Skeleton className="h-40 w-full bg-gray-200 rounded-md flex justify-center items-center mt-4"></Skeleton>
                    
                </div>
            ))}
        </main>
    )
}