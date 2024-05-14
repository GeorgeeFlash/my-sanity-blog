import Image from "next/image";
import icon from '@/assets/studio_icon.jpg'

const Logo = (props: any) => {

    const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
        <Image 
            className="rounded-full object-cover"
            width={50}
            height={50}
            src={icon}
            alt="icon"
        />
        {renderDefault(props)}
    </div>
  )
}

export default Logo