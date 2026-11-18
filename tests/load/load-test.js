import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 5,
    duration: "10s",
    thresholds: {
        http_req_failed: ["rate<0.01"],
        http_req_duration: ["p(95)<500"]
    }
};

export default function () {
    let response = http.get("http://localhost:3001/health");

    check(response, {
        "status is 200": (r) => r.status === 200,
        "application is healthy": (r) => r.body.includes("healthy")
    });

    sleep(1);
}
