import zod from "zod";

const GameOptionsSchema = zod.enum(["rock", "paper", "scissors"]);

export type GameOption = zod.infer<typeof GameOptionsSchema>;

export const validateGameOptions = (options: string | string[]) => {
  if (typeof options === "string") {
    return GameOptionsSchema.safeParse(options);
  }

  return GameOptionsSchema.array().safeParse(options);
}