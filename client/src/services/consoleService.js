import * as request from "../lib/request";
// import { get, post, put, patch, del } from "../lib/request";


const baseUrl = 'http://localhost:3030/jsonstore/consoles'


export const getAll = async () => {
    const result = await request.get(baseUrl);
    // const result = await get(baseUrl);

    console.log(result);

    return Object.values(result);
    
};

export const create = async (consoleData) => {
    const result = await request.post(baseUrl, consoleData);

    
    // const result = await post(baseUrl, consoleData);


    // const response = await fetch(baseUrl, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(consoleData)
    // });

    // const result = await response.json();

    return result;
}