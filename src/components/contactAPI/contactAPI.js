const BASE_URL = 'https://64f31839edfa0459f6c64a1b.mockapi.io/api/v1/'

export const getContact = async () => {
    const response = await fetch(`${BASE_URL}contacts`);
    return await response.json()
}

export const createContact = async (data) => {
    const response = await fetch(`${BASE_URL}contacts`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(data)
    });
    return await response.json()
}

export const delContact = async (id) => {
    const response = await fetch(`${BASE_URL}contacts/${id}`,
        {method: "DELETE"}
    );
    return await response.json()
}