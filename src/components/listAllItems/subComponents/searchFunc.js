export function SearchFunc(e, params){
    const {sortedData, setOutput} = params;
    const searchQuery = e.target.value;
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    if(!searchQuery){
        return setOutput(sortedData);
    }

    const filtered = sortedData.filter(item => Object.values(item).some(val => typeof val === "string" && val.toLowerCase().includes(lowerCaseSearchQuery)));


    return setOutput(filtered);
}