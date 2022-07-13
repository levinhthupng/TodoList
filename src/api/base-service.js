import config from "../constant/config";

function fetchUrl(url, option, prefix = "result") {
    return new Promise((resolve, reject) => {
        option = option || {};
        fetch(url, option)
            .then((res) => {
                let status = res.status.toString();
                if (status.startsWith("4") || status.startsWith("5")) {
                    throw res;
                }
                if (option.headers["Content-Type"] == "application/json")
                    return res.json();
                else return res.text();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((errResponse) => {
                if (errResponse.json) {
                    errResponse
                        .json()
                        .then((errObj) => {
                            reject(errObj);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    reject(errResponse);
                }
            });
    });
}

export function httpPost(url, data, header, host, abort) {
    host = host || config.baseApiHost;
    url = host + url;
    let option = {
        method: "POST",
        headers: header || {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        body: !!header ? data : JSON.stringify(data),
    };
    if (!!abort) {
        option.signal = abort.signal;
    }
    return fetchUrl(url, option);
}

export function httpGet(url, header, host, prefix = "result") {
    host = host || config.baseApiHost;
    url = host + url;
    let option = {
        method: "GET",
        headers: header || {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
    };
    return fetchUrl(url, option, prefix);
}

export function httpPut(url, data, header, host) {
    host = host || config.baseApiHost;
    url = host + url;
    let option = {
        method: "PUT",
        headers: header || {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        body: JSON.stringify(data) || "",
    };
    return fetchUrl(url, option);
}

export function httpDelete(url, header, host) {
    host = host || config.baseApiHost;
    url = host + url;
    let option = {
        method: "DELETE",
        headers: header || {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
    };
    return fetchUrl(url, option);
}