/* Event Loop:-
   (1) handles asynchronous operations and ensures non-blocking execution in the JavaScript runtime. 

   (2) It allows JavaScript to perform tasks, execute code, collect and process events, and execute queued sub-tasks—all in an orderly manner.

   (3) JavaScript has a single-threaded runtime, meaning it can execute only one task at a time.

   (4) Event Loop ensures that tasks are executed in the correct order, when dealing with asynchronous operations like setTimeout, Promises etc.

*/

/* (1) Call stack (Main Stack):- Execution 
    Call stack where function calls are added and removed in a last-in, first-out (LIFO) manner.
    Synchronous code is pushed to the stack and executed immediately.
*/

/* (2) Task Queue (Side Stack):- 
    A queue where callbacks from asynchronous operations (e.g setTimeout) are placed once they're ready to execute.
*/


/* (3) Event Loop:-
    Continuously monitors the Call Stack(Main stack) and Task Queues(Side Stack)
    If the Call Stack is empty, it pushes tasks from Task Queue onto the Call Stack for execution.
*/

// Synchronpous code => main stack pe store hota hai
// Asynchronous code => side stack pe store hota hai aur wait krta hai jab saare synchonous code execute ho jate hai tab Event Loop check krta hai aur jiska time complete ho jata hai usko side Stack(Task queue) se main stack bhej deta hai.