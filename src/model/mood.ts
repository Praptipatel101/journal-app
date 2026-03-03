export type Mood = "happy" | "sad" | "angry";

export const isValidMood = (value: string): value is Mood => {
  return value === "happy" || value === "sad" || value === "angry";
};