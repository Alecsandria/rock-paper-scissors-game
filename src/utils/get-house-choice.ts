import { GameOption, validateGameOptions } from "./options.type";

const getHouseChoice = (options: string[]) => {
  const validation = validateGameOptions(options);

  if (!validation.success) return { error: validation.error };

  const randomIndex = Math.floor(Math.random() * options.length);
  return { chosenOption: options[randomIndex] as GameOption };
}

export default getHouseChoice;