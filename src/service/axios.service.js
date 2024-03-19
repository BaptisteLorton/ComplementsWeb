import axios from 'axios'

const axiosAgent = axios.create({
    baseURL: 'https://apidemo.iut-bm.univ-fcomte.fr/herocorp'
});

axiosAgent.defaults.withCredentials = true;
function handleError(serviceName, err) {
    if (err.response) {
        console.log("ERROR while calling SERVICE " + serviceName + ": " + JSON.stringify(err.response));
        return {
            data: {
                error: 1,
                data: err.response.data
            }
        };
    }
    else if (err.request) {
        console.log("NETWORK ERROR while calling SERVICE "+serviceName+ ": " + JSON.stringify(err.request));
        return {
            data: {
                error: 1,
                data: 'Le serveur est injoignable ou l\'URL demandée n\'existe pas'
            }
        };
    }
    else {
        console.log("UNKNOWN ERROR while calling SERVICE "+serviceName);
        return {
            data: {
                error: 1,
                data: 'Erreur inconnue'
            }
        };
    }
}

async function postRequest(uri, data, name) {
    let response = null
    try {
        response = await axiosAgent.post(uri, data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}

async function getRequest(uri,data, name) {
    let response = null
    console.log(uri)
    try {
        response = await axiosAgent.get(uri,data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}

async function putRequest(uri, data, name) {
    let response = null
    try {
        response = await axiosAgent.put(uri, data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}

async function patchRequest(uri, data, name) {
    let response = null
    try {
        response = await axiosAgent.patch(uri, data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}

export {
    postRequest,
    getRequest,
    putRequest,
    patchRequest
}