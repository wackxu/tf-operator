import { getHost } from "./utils";

const host = getHost();

export function getTFJobListService(namespace) {
  return fetch(`${host}/api/tfjob/${namespace}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    redirect: "follow"
  }).then(r => r.json());
}

export function createTFJobService(spec) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set("mode", "cors");
  myHeaders.set("credentials", "include");
  myHeaders.set("redirect", "follow");
  const options = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(spec)
  };

  return fetch(`${host}/api/tfjob`, options).then(r => r.json());
}

export function getTFJobService(namespace, name) {
  return fetch(`${host}/api/tfjob/${namespace}/${name}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    redirect: "follow"
  }).then(r => r.json());
}

export function deleteTFJob(namespace, name) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set("mode", "cors");
  myHeaders.set("credentials", "include");
  myHeaders.set("redirect", "follow");
  const options = {
    method: "DELETE",
    headers: myHeaders
  };

  return fetch(`${host}/api/tfjob/${namespace}/${name}`, options).then(r =>
    r.json()
  );
}

export function getPodLogs(namespace, name) {
  return fetch(`${host}/api/logs/${namespace}/${name}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    redirect: "follow"
  }).then(r => r.json());
}

export function getNamespaces() {
  return fetch(`${host}/api/namespace`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    redirect: "follow"
  }).then(r => r.json());
}
