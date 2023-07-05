export const gameRules = {
  description:
    "You will be given 5 random matches of the last seasons of the Premier League. Try to get as many points as you can! Each round you could use a help, but you will lose 1 point:",
  points: [
    {
      quantity: 5,
      description: "get the exact result without any help",
    },
    {
      quantity: 4,
      description: "get the exact result using the help",
    },
    {
      quantity: 2,
      description: "get the result without any help",
    },
    {
      quantity: 1,
      description: "get the result using the help",
    },
  ],
};

export function formatDate(date: string) {
  let formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
  });
  let dateArr = formattedDate.split(" ");
  return dateArr;
}

export function calculateScore(
  homeScoreGuess: string,
  awayScoreGuess: string,
  correctHomeScore: number,
  correctAwayScore: number,
  helpsUsed: boolean
) {
  let points = 0;
  if (
    Number(homeScoreGuess) === correctHomeScore &&
    Number(awayScoreGuess) === correctAwayScore
  ) {
    points = 5;
  } else if (
    homeScoreGuess < awayScoreGuess &&
    correctHomeScore < correctAwayScore
  ) {
    points = 2;
  } else if (
    homeScoreGuess > awayScoreGuess &&
    correctHomeScore > correctAwayScore
  ) {
    points = 2;
  } else if (
    Number(homeScoreGuess) - Number(awayScoreGuess) === 0 &&
    correctHomeScore - correctAwayScore === 0
  ) {
    points = 2;
  }
  if (points !== 0) helpsUsed && points--;
  return points;
}

export const dataInitialState = [
  {
    match_date: "",
    gameweek: 0,
    season: "",
    home_lineup: "[{}]",
    home_logo: "",
    home_score: 0,
    home_team: "",
    away_lineup: "[{}]",
    away_logo: "",
    away_score: 0,
    away_team: "",
  },
];
