import { BASE_URL } from "../../../config";

export interface LoginUser {
  email: string;
  password: string;
}
export const loginUsers = async (loginUser: LoginUser) => {
  try {
    const response = await fetch("/api/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch("/api/get-users", {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};


export const getRequests = async() => {
  try {
      const response = await fetch('/api/get-requests',{
          method: 'GET',
          mode: 'cors'
      })
      const result = await response.json();
      return result;

  } catch (error) {
      return error;

  }
}

export interface Status {
  status: string;
}

export const editRequests = async (id: number, status: Status) => {
  try {
    const response = await fetch(`/api/edit-requests/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(status),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
};

export async function deleteRequest(id: number) {
  try {
    const response = await fetch(`/api/delete-requests/${id}`, {
      method: "DELETE",

      body: JSON.stringify(id),
    });
    console.log(response);
    console.error(response);

    const result = await response.json();
    console.log(result);
    console.error(result);
    return result;
  } catch (error) {
    return error;
  }
}

export interface UserData {
  name: string;
  username: string;
  phone_number: string;
  email: string;
  password: string;
  confirm_password: string;
}

export async function registerUser(userData: UserData) {
  try {
    const response = await fetch("/api/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
}

export const getProducts = async () => {
  const url = `./api/get-product`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch products");
  }
};

export const getDelivery = async () => {
  const url = `./api/get-deliveries`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch deliveries");
  }
};

export const getOrder = async () => {
  const url = `./api/get-orders`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch orders");
  }
};


