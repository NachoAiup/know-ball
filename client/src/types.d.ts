interface Lineup {
  name: string;
  number: number;
}

interface Match {
  gameweek: number;
  season: string;
  match_date: string;
  home_team: string;
  home_score: number;
  home_lineup: Lineup[];
  home_logo: string;
  away_team: string;
  away_score: number;
  away_lineup: Lineup[];
  away_logo: string;
}

type Matches = Match[];
