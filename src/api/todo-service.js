import { httpGet, httpPost } from "./base-service";
export function addTodo(body) {
  return httpPost("/api/TodoItems", body);
}
export function getTodoList() {
  return httpGet("/api/TodoItems");
}
