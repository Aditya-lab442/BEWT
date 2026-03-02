const urlName = "https://www.demo.com/path1/path2/path3?name='aditya',roll=324"



const obj = new URL(urlName)

console.log(obj.hostname)

console.log(obj.protocol)

console.log(obj.pathname)

obj.searchParams.forEach((val,key)=>{
    console.log(key+":"+val)
})

