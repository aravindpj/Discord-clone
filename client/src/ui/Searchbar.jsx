import { useState } from "react";

/**
 * Searchbar component for entering conversation search queries.
 * Uses local state to manage the input value.
 */
const Searchbar = () => {
  // State to store the input value
  const [value, setValue] = useState("");

  return (
    // Render the input element for the search bar
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)} // Update the value based on user input
      placeholder="Start a conversation"
      className="bg-discordDark-400  text-sm  placeholder-sonic-silver focus:outline-none  px-2 py-[3px] rounded-md"
    />
  );
};

export default Searchbar;
