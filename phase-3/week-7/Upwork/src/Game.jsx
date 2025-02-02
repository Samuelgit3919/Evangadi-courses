// components/Game.js
import { useState } from "react";
import { Button, Card, Text } from "@medusa-ui/react";

const Game = () => {
  // Game state
  const [currentScene, setCurrentScene] = useState("start");
  const [playerHealth, setPlayerHealth] = useState(100);
  const [inventory, setInventory] = useState([]);

  // Scenes
  const scenes = {
    start: {
      text: "You wake up in a dark forest. You see a path to the left and a cave to the right. What do you do?",
      choices: [
        { text: "Go left", nextScene: "path" },
        { text: "Go right", nextScene: "cave" },
      ],
    },
    path: {
      text: "You follow the path and find a treasure chest! Do you open it?",
      choices: [
        { text: "Open the chest", nextScene: "treasure" },
        { text: "Ignore it and keep walking", nextScene: "forest" },
      ],
    },
    cave: {
      text: "You enter the cave and are attacked by a wild beast!",
      choices: [
        { text: "Fight the beast", nextScene: "fight" },
        { text: "Run away", nextScene: "start" },
      ],
    },
    treasure: {
      text: "You open the chest and find a shiny sword! It's added to your inventory.",
      choices: [{ text: "Continue", nextScene: "forest" }],
      onEnter: () => setInventory([...inventory, "Shiny Sword"]),
    },
    fight: {
      text: "You bravely fight the beast but lose 20 health.",
      choices: [{ text: "Continue", nextScene: "start" }],
      onEnter: () => setPlayerHealth(playerHealth - 20),
    },
    forest: {
      text: "You continue your journey through the forest. The adventure continues...",
      choices: [{ text: "Restart", nextScene: "start" }],
    },
  };

  // Handle player choice
  const handleChoice = (nextScene) => {
    const scene = scenes[nextScene];
    if (scene.onEnter) scene.onEnter(); // Trigger onEnter logic
    setCurrentScene(nextScene);
  };

  return (
    <Card>
      <Text>{scenes[currentScene].text}</Text>
      <div>
        {scenes[currentScene].choices.map((choice, index) => (
          <Button key={index} onClick={() => handleChoice(choice.nextScene)}>
            {choice.text}
          </Button>
        ))}
      </div>
      <Text>Health: {playerHealth}</Text>
      <Text>Inventory: {inventory.join(", ")}</Text>
    </Card>
  );
};

export default Game;
