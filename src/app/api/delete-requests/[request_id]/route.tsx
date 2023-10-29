import { BASE_URL } from "../../../../../config";

export async function DELETE(
    _request:Request,
    {params}:{params:{request_id: number}}) {

    console.log({params});

    const request_id = params.request_id;

    if(!BASE_URL){
        return new Response('No movie base URL found',{
         status: 404,
         statusText:'failed'})
    }

    try {
        const response = await fetch (`${BASE_URL}/collection/requests/${request_id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',


            }
        });
        console.log(response)


        const result = await response.json();
        console.log(result)
        console.error(result)

        return new Response(JSON.stringify(result),{
            status: 204,
            statusText:'no content',

        });


    } catch (error:any) {
        return new Response(error)

    }


}





