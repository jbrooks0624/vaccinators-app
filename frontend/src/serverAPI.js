const SERVER_URL = "http://localhost:3001/";

export const serverGET = async (type) => {
    let response = await fetch(SERVER_URL, {
        method: 'get',
        headers: { "type" : type },
    })
    if (response.ok) {
        response = response.json();
        return response;
    }
    else console.log("GET ERROR");
        return "ERR";
}

export const serverPOST = async (type) => {
    console.log("running post");
    let response = await fetch(SERVER_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Type: type,
        })
    })
    if (response.ok) {
        return response;
    }
    else console.log("POST ERROR");
        return "ERR";
}