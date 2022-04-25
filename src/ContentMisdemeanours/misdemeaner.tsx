import { Misdemeanour } from "./generate_misdemeanours";

export interface mdProps {
	citizenId : number,
	misdemeanour : Misdemeanour,
	date : string,
}

const Misdemeaner : React.FC<mdProps> = ({citizenId,misdemeanour,date}) => {
    
    const mdDescription = (md : Misdemeanour) => {
        let desc : string = '';
        switch(md){
            case 'rudeness':
                desc ='Mild Public Rudeness = 🤪';
                break;
            case 'lift':
                desc ='Speaking in a Lift = 🗣';
                break;
            case 'vegetables':
                desc ='Not Eating Your Vegetables = 🥗';
                break;
            case 'united':
                desc ='Supporting Manchester United = 😈';
                break;
        }
        return desc;
    }
    
    const picsumurl = (md : Misdemeanour) => {
        let url : string = 'https://picsum.photos'
        switch(md){
            case 'rudeness':
                url += '/20/21';
                break;
            case 'vegetables':
                url += '/20/22';
                break;
            case 'lift':
                url += '/20/23';
                break;
            case 'united':
                url += '/20/24';
                break;
        }
        return url;
    }

    return (
        <article className="misdemeaner-item">
            <li className="misdemeaner-item">{citizenId}</li>
            <li className="misdemeaner-item">{mdDescription(misdemeanour)}</li>
            <li className="misdemeaner-item">{date}</li>
            <li className="misdemeaner-item"><img src={picsumurl(misdemeanour)}></img></li>
        </article>   
    )
}

export default Misdemeaner;