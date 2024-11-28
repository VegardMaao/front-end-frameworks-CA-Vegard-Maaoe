export function LogInp(e, {data}){
    const searchQuery = e.target.value;
    console.log(searchQuery);
    console.log(data);

    const filtered = data.filter(item => Object.values(item).some(val => typeof val === "string" && val.includes(searchQuery)));
        
    console.log(filtered);

}