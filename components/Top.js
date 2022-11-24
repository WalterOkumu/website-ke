import Image from "next/image";
import Form from "./Form";

const Top = () => {

    const laptop = "/black-friday.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse md:gap-16 text-[#f8f8ff]">
                <Form /> 
                <div className="md:w-1/2 w-full self-center">  
                    <Image src={laptop} width={1090} height={1000} alt="Black Friday" className="object-contain" property="true"/>
                </div>

            </div>
        </div>
    )

}

export default Top;