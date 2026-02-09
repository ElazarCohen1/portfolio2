import Image, { StaticImageData } from 'next/image'

type SkillProps = {
    name:string;
    imageUrl:StaticImageData
}

function Skill(props:SkillProps){
    return (
        <div id="sk">
            <Image src={props.imageUrl} alt={props.name} /> 
            <p>{props.name}</p>
        </div>            
    )
}

export default Skill;