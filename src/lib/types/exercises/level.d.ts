declare type Level = {
  _id: string;
  name: string;
};

declare type LevelsResponse = {
  message: string;
  levels: Level[];
};
