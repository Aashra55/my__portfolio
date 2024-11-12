import Image from 'next/image';
import myimage from '../images/Capture.jpeg';
import { Spline_Sans_Mono } from "@next/font/google";
const mono = Spline_Sans_Mono({
    subsets:['latin'],
    weight:['300','400']
})
export default function About(){
    return(
        <div className={`${mono.className} h-auto gap-[20px] md:h-[92vh] lg:h-[92vh] bg-black flex flex-col items-center
         justify-center pt-[20px] sm:pt-0 sm:pb-none pb-[20px] md:pt-[20px]`}>
            <Image alt='' src={myimage} className='rounded-full lg:w-[20%] md:w-[40%]
             w-[60%] border-[2px] border-yellow-300 p-[2px] shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]'/>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
                <h1 className='text-yellow-300 text-[30px] md:text-[35px] lg:text-[45px]'>About Me</h1>
                <p className='text-white text-center md:pl-[20px] md:pr-[20px] pl-[10px] pr-[10px] lg:pl-[100px] lg:pr-[100px] text-[12px] lg:text-[16px]
                '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt necessitatibus molestiae at. Mollitia corporis pariatur, aperiam sint velit ipsum officia dolorem officiis sequi ab eos incidunt deleniti corrupti optio? Dignissimos?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem omnis expedita porro, ut dignissimos recusandae ad quas in, eveniet alias officia itaque unde inventore quod corrupti saepe quasi praesentium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio deserunt eligendi libero corporis quaerat, voluptatibus eius quae. Culpa rem similique adipisci delectus aliquam magnam hic mollitia officia temporibus omnis!</p>
            </div>
        </div>
    )
}