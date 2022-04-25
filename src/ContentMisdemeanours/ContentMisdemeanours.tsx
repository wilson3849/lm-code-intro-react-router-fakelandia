import React, { useEffect, useState } from "react";
//import { MDsContext } from "../NavMenu/Navbar";
import MisdemeanerFilter from "./misdemeanerfilter";
import { Misdemeanour } from "./generate_misdemeanours";
import generateMisdemeanours from "./generate_misdemeanours";

// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call) 
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
export const UpdateMDsContext = React.createContext<null | React.Dispatch<React.SetStateAction<Array<mdProps>>>>(null);

// Create Context
export const MDsContext = React.createContext<Array<mdProps>>([]);

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
                desc ='🤪 Mild Public Rudeness';
                break;
            case 'lift':
                desc ='🗣 Speaking in a Lift';
                break;
            case 'vegetables':
                desc ='🥗 Not Eating Your Vegetables';
                break;
            case 'united':
                desc ='😈 Supporting Manchester United';
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
        <article>
                <div>
                    <img src={picsumurl(misdemeanour)} alt="" />
                    &nbsp;{citizenId}
                </div>
                <div>{mdDescription(misdemeanour)}</div>
                <div>{date}</div>
        </article>   
    )
}

//export default Misdemeaner;

const ContentMisdemeanours : React.FC = () => {

    // Consume
    const [MDs, setMDs] = useState<Array<mdProps>>([]);

    //const MDs = useContext(MDsContext);

    const [currMDfilter, setCurrMDfilter] = useState<string>('All');

    const [countMD, setCountMD] = useState<number>(10);
  
    // load number of misdemeaners  
    useEffect(() => {
        getMisdemanours(countMD);
    }, [countMD])
  
    // generate a number of random misdemeaners
    const getMisdemanours = async (mdNum: number) => {
        const mdResponse = await generateMisdemeanours(mdNum);
        if (setMDs != null) {
            setMDs(mdResponse);
        }
    };

    const buildMDs = () => {

        // create element array
        let elements : Array<JSX.Element> = [];

        // filter misdemeaners to display
        let displayMisdemeaners : Array<mdProps>;
        if (currMDfilter !== 'All') {
            displayMisdemeaners = MDs.filter((item) => (item.misdemeanour === currMDfilter));}
        else {
            displayMisdemeaners = MDs;
        }

        // switch to display only filtered misdemeaners
        displayMisdemeaners.forEach((item, index)  => {
            elements.push(<Misdemeaner key={index} 
                            citizenId={item.citizenId} 
                            misdemeanour={item.misdemeanour} 
                            date={item.date} />);
            }
        )
        return elements;
    }

    // display filter and misdemeaner elements based on filter 
    return (
        <section>
            <div className="filterOption">
                <label htmlFor="Filter">Filter</label><MisdemeanerFilter selection={currMDfilter} onChangeSelection={setCurrMDfilter} />
            </div>
            <div>
                {buildMDs()}
            </div>
        </section>
    );
};

export default ContentMisdemeanours;

