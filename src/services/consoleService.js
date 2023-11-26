const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (consoleData) => {
    const response = await fetch(`${baseUrl}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(consoleData)
    });

    const result = await response.json();

    return result;
}