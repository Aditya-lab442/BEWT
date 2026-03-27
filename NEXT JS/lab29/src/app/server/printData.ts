"use server"

async function printData(form:FormData){
    const name = form.get('name')
    console.log(name);
    
}
export {printData}