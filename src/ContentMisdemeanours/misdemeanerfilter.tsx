export interface mdFilterProps { 
	selection: string;
	onChangeSelection: (selection: string) => void;
}

const MisdemeanerFilter : React.FC<mdFilterProps> = ({selection, onChangeSelection}) =>  {

    const selectFilter = (selection : string) => {
        onChangeSelection(selection);
    }

    return(
    <>  
        <select name="mdfilter"
                aria-label="MDFilter"
                data-testid='mdfilter' 
                onChange={(e) => {selectFilter(e.target.value)}}>
            <option value="" selected disabled hidden>Filter</option>
            <option value="rudeness">rudeness</option>
            <option value="vegetables">vegetables</option>
            <option value="lift">lift</option>
            <option value="united">united</option>
        </select>
    </>)
}
export default MisdemeanerFilter;