export async function request (method,url,data){
    const respose = await fetch(url,{
        method,
    })

    const result = await respose.json()
    return result
}