const buildOptions = (data)=>{
    const options = {}

    if (data){
        options.body = JSON.stringify(data)
        options.header = {
            'content-type': 'application/json'
        }
    }
    return options
}


export async function request (method,url,data){
    const respose = await fetch(url,{
        ...buildOptions(data),
        method,
    })

    const result = await respose.json()
    return result
}