import { BASE_URL } from "../../../../../config";

export async function PUT(request: Request, { params }: { params: { request_id: number } }) {
  const { request_id } = params;

  if (!BASE_URL) {
    return new Response('No movie base URL found', {
      status: 404,
      statusText: 'Not Found'
    });
  }

  try {
    const response = await fetch(`${BASE_URL}/collection/requests/${request_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const result = await response.json();
      return new Response(JSON.stringify(result), {
        status: 200,
        statusText: 'Success'
      });
    } else {
      return new Response(`Request failed with status ${response.status}`, {
        status: response.status,
        statusText: 'Request Failed'
      });
    }
  } catch (error:any) {
    return new Response(error.message, {
      status: 500,
      statusText: 'Internal Server Error'
    });
  }
}





// import{ BASE_URL } from "../../../../../config";


// export async function PUT(
//     _request:Request,
//     {params}:{params:{request_id: number}}) {

//     console.log({params});

//     const request_id = params.request_id;

//     if(!BASE_URL){
//         return new Response('No movie base URL found',{
//          status: 404,
//          statusText:'failed'})
//     }

//     try {
//         const response = await fetch (`${BASE_URL}/collection/requests/${request_id}`,{
//             method:'PUT',
//             headers:{
//                 'Content-Type':'application/json',


//             }
//         });

//         const result = await response.json();
//         return new Response(JSON.stringify(result),{
//             status: 200,
//             statusText:'success',

//         });

//     } catch (error:any) {
//         return new Response(error,{
//             status: 500,
//             statusText:'error'

//         })

//     }

// }

