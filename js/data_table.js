async function doRequest(url, method, body) {

    let data = {
        "method": method,
        "headers": { "Content-type": "application/json" }
    };
    if (body) {
        data['body'] = JSON.stringify(body);
    }
    try {
        let res = await fetch(url, data);
        return res;
    } catch (error) {
        console.log(error);
    }
}

let bands;

async function getBands() {
    try {
        let respuesta = await doRequest('json/list.json', "GET");
        if (respuesta.status == 200) {
            bands = await respuesta.json();
            tableFunction();
        } else {
            console.log("error de conexion");
        }
    } catch (error) {
        console.log(error);
    }
}
getBands();