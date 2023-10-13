import { BASE_URL } from "../../../../config";

export async function POST(request: Request) {
  try {
    if (!BASE_URL) {
      return new Response("Base URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }


    const requestData = await request.json();

    const result = await fetch(`${BASE_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });


    if (result.ok) {
      const responseData = await result.json();
      return new Response(JSON.stringify(responseData), {
        status: 201,
        statusText: "Success",
      });
    } else {
      const errorData = await result.json();
      return new Response(JSON.stringify(errorData), {
        status: result.status,
        statusText: result.statusText,
      });
    }
  } catch (error: any) {
    console.error(error);
    return new Response("Internal server error", {
      status: 500,
      statusText: "Failed",
    });
  }
}