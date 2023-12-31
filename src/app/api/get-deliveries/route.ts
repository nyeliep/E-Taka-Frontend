import { BASE_URL } from "../../../../config";

export async function GET() {
  try {
    if (!BASE_URL) {
      return new Response("BASE URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }

    const response = await fetch(`${BASE_URL}/api/deliveries/`,{ cache: 'no-store' });
    if (!response.ok) {
      return new Response("Failed to fetch seliveries", {
        status: 500,
        statusText: "Failed",
      });
    }

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}