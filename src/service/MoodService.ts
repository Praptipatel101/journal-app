import { MoodRepository } from "../repository/MoodRepository.js";
import { InvalidMood } from "../lib/errors.js";
import type { JournalError } from "../lib/errors.js";

const allowedMoods = ["Happy", "Sad", "Angry", "Calm"];

export class MoodService {

  repo = new MoodRepository();

  setMood(entryId: number, mood: string): JournalError | void {

    if (!allowedMoods.includes(mood)) {
      return InvalidMood("Unsupported mood value.");
    }

    this.repo.addMood(entryId, mood);
  }

  getMood(entryId: number) {
    return this.repo.getMood(entryId);
  }

  getAllMoods() {
    return this.repo.getAllMoods();
  }

  getEntriesByMood(mood: string) {

    if (!allowedMoods.includes(mood)) {
      return InvalidMood("Unsupported mood value.");
    }

    return this.repo.getByMood(mood);
  }
}