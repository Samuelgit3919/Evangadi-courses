// pages/index.js
import { MedusaProvider } from "? Would you like your code inside a `src/` directory? » No / Yes";
import Game from "./Game";

export default function App() {
  return (
    <MedusaProvider>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1>Text-Based RPG</h1>
        <Game />
      </div>
    </MedusaProvider>
  );
}
