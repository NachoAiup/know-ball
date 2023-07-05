interface Match {
  gameweek: number;
  season: string;
  match_date: string;
  home_team: string;
  home_score: number;
  home_lineup: string;
  home_logo: string;
  away_team: string;
  away_score: number;
  away_lineup: string;
  away_logo: string;
}

type Matches = Match[];
