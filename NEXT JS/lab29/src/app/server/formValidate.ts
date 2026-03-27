"use server"

async function formValidate(form:FormData){
    const name = form.get('name')
    if(name.length()<5){
        console.log("Enter Proper Name")
    }else{
        console.log(name)
    }
    
}
export {formValidate}