const urlName = "https://www.demo.com"

const url = new URL(urlName)

url.pathname = "/path1/path2"

url.searchParams.append('Name','ADITYA')
url.searchParams.append('Roll',324)

console.log(url);

