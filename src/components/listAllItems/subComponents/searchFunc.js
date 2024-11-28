export function LogInp(e, params){
    const {data, dataArray, setDataArray} = params;
    const searchQuery = e.target.value;

    const filtered = data.filter(item => Object.values(item).some(val => typeof val === "string" && val.includes(searchQuery)));
        
    setDataArray(filtered);
    console.log(dataArray);
}