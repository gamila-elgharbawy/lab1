Backend:
Updated getTodos in todoController.js.
Added support for the done query parameter.
GET /api/todos returns all todos.
GET /api/todos?done=true returns completed todos.
GET /api/todos?done=false returns active todos.



Frontend:
Updated fetchTodos in api/todos.js to support filtering.
Added filter state in App.jsx.
Added All, Active, and Done filter buttons.
Implemented server-side filtering using query parameters.
