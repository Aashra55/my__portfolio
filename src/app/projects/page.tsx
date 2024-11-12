import Image from 'next/image';
import projectOne from '../images/project-1.png';
import projectTwo from '../images/project-2.png';
import projectThree from '../images/project-3.png';
import projectFour from '../images/project-4.png';
import projectFive from '../images/project-5.png';
import projectSix from '../images/project-6.png';
import { Spline_Sans_Mono } from "@next/font/google";
const text = Spline_Sans_Mono({
    subsets : ['latin'],
    weight : ['300','400']
});
export default function Project(){
    return(
        <div className={`${text.className} flex flex-col h-auto justify-center items-center bg-black`}>
            <h1 className='bg-black text-yellow-300 lg:text-[46px] md:text-[30px] text-[20px] pt-[2%]'>My Projects</h1>
            <div className={`
            ${text.className} bg-black h-auto flex flex-wrap gap-[10%] justify-center pt-[5%]`}>
                <Image src={projectOne} alt='' className='lg:w-[40%] w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'></Image>
                <Image src={projectTwo} alt='' className='lg:w-[40%] w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px] 
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'></Image>
                <Image src={projectThree} alt='' className='lg:w-[40%] w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'></Image>
                <Image src={projectFour} alt='' className='lg:w-[40%] w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'></Image>
                <Image src={projectFive} alt='' className='lg:w-[40%] w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'></Image>
                <Image src={projectSix} alt='' className='lg:w-[40%] w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'></Image>
            </div>
        </div>
    )
}
