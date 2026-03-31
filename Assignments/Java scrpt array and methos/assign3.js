const tickets = [
  { id: "T101", priority: "High", resolved: false },
  { id: "T102", priority: "medium", resolved: false },
  { id: "T103", priority: "low", resolved: false },
  { id: "T104", priority: "High", resolved: false },
  { id: "T105", priority: "medium", resolved: false },
];
tickets.unshift({ id: "T100", priority: "High", resolved: false });

tickets.push(
    { id: "T106", priority: "High", resolved: false },
    { id: "T107", priority: "low", resolved: false },
);

const currentticket = tickets.shift();
const droppedticket = tickets.pop();
const pendingticket = tickets.filter(ticket => ticket.resolved);
const pendingids = pendingticket.map(ticket => ticket.id);

console.log( "currentticket",currentticket);
console.log( "droppedticket",droppedticket );
console.log( "pendingticket",pendingticket);
console.log( "pendingids",pendingids );

