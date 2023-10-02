import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 100,
  duration: "30s",
};

export default function () {
  http.get("https://ga-test-two.vercel.app/api/acc");
  sleep(1);
}
