// var getParam = function (p, def) {
//     var x = document.location.search.indexOf(p + "=");
//     if (x < 0) return def;
//     var res = document.location.search.substr(x + p.length + 1);
//     if (res.indexOf("&") < 0) return res;
//     return res.substr(0, res.indexOf("&"));
// }
// var w = document.getElementsByTagName("game-widget")[0];
// if (w) w.setAttribute('game-id', getParam("gameId", 0));
// w = document.getElementsByTagName("competition-profile")[0];
// if (w) w.setAttribute('competition-id', getParam("compId", 0));
// w = document.getElementsByTagName("team-profile")[0];
// if (w) w.setAttribute('team-id', getParam("teamId", 0));
// w = document.getElementsByTagName("coach-profile")[0];
// if (w) w.setAttribute('person-id', getParam("personId", 0));
// w = document.getElementsByTagName("player-profile")[0];
// if (w) w.setAttribute('person-id', getParam("personId", 0));

RFBWidgets.playerPageUrl = 'player.html?personId={personId}&apiUrl={apiUrl}&compId={compId}&lang={lang}';
RFBWidgets.teamPageUrl = 'team.html?teamId={teamId}&apiUrl={apiUrl}&compId={compId}&lang={lang}';
RFBWidgets.compPageUrl = 'comp.html?compId={compId}&apiUrl={apiUrl}&lang={lang}';
RFBWidgets.gamePageUrl = 'game.html?gameId={gameId}&apiUrl={apiUrl}&lang={lang}';
RFBWidgets.coachPageUrl = 'coach.html?personId={personId}&apiUrl={apiUrl}&lang={lang}';
RFBWidgets.init();
