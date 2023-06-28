/*

gameweek
match_date
home_team
home_score
home_logo
home_lineup



SEASON NAME
data.name => year of the season


data.fixtures => array of fixtures
data.fixtures[n].name => teams with "vs"
data.fixtures[n].starting_at => date of the match, cut when theres a space (bc theres time)
data.fixtures[n].lineups => array
data.fixtures[n].lineups[n] => player
data.fixtures[n].lineups[n].team_id => the players team
data.fixtures[n].lineups[n].type_id => must be 11 for the starting team
player_name
jersey_number

data.fixtures[n].round.name => must add 1 to get the n° of the gameweek
data.fixtures[n].participants[0] => home team
data.fixtures[n].participants[0].name => home team name
data.fixtures[n].participants[0].image_path => home team logo

data.fixtures[n].scores => array, has to be filtered where description === "CURRENT"
.scores.score.goals => qty of goals
*/
