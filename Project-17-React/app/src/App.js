import { test2, test4 } from "./data.js";
import data from "./data.js";
import { sum, div, mult, sub } from "./test.js";

function App() {
  console.log(`sum: ${sum(1,1)}`);
  console.log(`div: ${div(1,1)}`);
  console.log(`mult: ${mult(1,1)}`);
  console.log(`sub: ${sub(1,1)}`);
  console.log(test2 + test4);
  data();

  return (
    <div className="App">
      <p>первый параграф</p>
      <p>второй параграф</p>
    </div>
  );
}

export default App;
