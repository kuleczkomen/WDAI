const matchday14 = [
   ["Bruk-Bet Termalica", 3, "GKS Katowice", 0],
   ["Piast Gliwice", 0, "Korona Kielce", 0],
   ["Górnik Zabrze", 5, "Arka Gdynia", 1],
   ["Lech Poznań", 2, "Motor Lublin", 2],
   ["Jagiellonia Białystok", 1, "Raków Częstochowa", 2],
   ["Widzew Łódź", 1, "Legia Warszawa", 1],
   ["Lechia Gdańsk", 1, "Radomiak Radom", 2],
   ["Wisła Płock", 2, "Pogoń Szczecin", 0],
   ["Cracovia", 0, "Zagłębie Lubin", 0]
];

const standingsHeaders = { poz: "Lp.", nazwa: "nazwa klubu", M: "M", pkt: "pkt", Z: "Z", R: "R", P: "P", bramki: "bramki"};

const standings = [
   { nazwa: "Górnik Zabrze",               M: 14, pkt: 29, Z: 9, R: 2, P: 3, bramki: "26-12" },
   { nazwa: "Wisła Płock",                 M: 13, pkt: 25, Z: 7, R: 4, P: 2, bramki: "18-9" },
   { nazwa: "Jagiellonia Białystok",       M: 13, pkt: 24, Z: 7, R: 3, P: 3, bramki: "25-17" },
   { nazwa: "Cracovia",                    M: 13, pkt: 22, Z: 6, R: 4, P: 3, bramki: "18-15" },
   { nazwa: "Lech Poznań",                 M: 13, pkt: 21, Z: 5, R: 6, P: 2, bramki: "22-14" },
   { nazwa: "Korona Kielce",               M: 14, pkt: 20, Z: 5, R: 5, P: 4, bramki: "16-17" },
   { nazwa: "Raków Częstochowa",           M: 13, pkt: 18, Z: 4, R: 6, P: 3, bramki: "15-15" },
   { nazwa: "Zagłębie Lubin",              M: 13, pkt: 18, Z: 5, R: 3, P: 5, bramki: "20-18" },
   { nazwa: "Legia Warszawa",              M: 14, pkt: 17, Z: 4, R: 5, P: 5, bramki: "22-21" },
   { nazwa: "Widzew Łódź",                 M: 14, pkt: 17, Z: 4, R: 5, P: 5, bramki: "21-21" },
   { nazwa: "Radomiak Radom",              M: 14, pkt: 17, Z: 4, R: 5, P: 6, bramki: "21-24" },
   { nazwa: "Pogoń Szczecin",              M: 13, pkt: 17, Z: 5, R: 2, P: 6, bramki: "20-25" },
   { nazwa: "GKS Katowice",                M: 13, pkt: 15, Z: 5, R: 0, P: 8, bramki: "23-30" },
   { nazwa: "Motor Lublin",                M: 13, pkt: 13, Z: 4, R: 1, P: 8, bramki: "16-24" },
   { nazwa: "Arka Gdynia",                 M: 14, pkt: 13, Z: 3, R: 4, P: 7, bramki: "15-28" },
   { nazwa: "Lechia Gdańsk",               M: 14, pkt: 10, Z: 3, R: 1, P: 10, bramki: "23-31" },
   { nazwa: "Termalica Nieciecza",         M: 14, pkt: 8,  Z: 2, R: 2, P: 10, bramki: "17-35" },
   { nazwa: "Piast Gliwice",               M: 12, pkt: 8,  Z: 1, R: 5, P: 6, bramki: "10-15" }
];

function makeMatchday() {
   const myMatchday = document.createElement("table");
   const thead = myMatchday.createTHead();
   const firstRow = thead.insertRow();
   const headerCell = document.createElement("th");

   headerCell.textContent = "14. kolejka";
   headerCell.colSpan = 4;
   headerCell.style.textAlign = "center";
   headerCell.style.background = "1px solid black";
   firstRow.appendChild(headerCell);

   const tbody = myMatchday.createTBody();
   matchday14.forEach(rowData => {
      const row = tbody.insertRow();
         // home
         const homeTeam = row.insertCell();
         homeTeam.textContent = rowData[0];
         homeTeam.style.width = "20%";

         // home goals
         const homeGoals = row.insertCell();
         homeGoals.textContent = rowData[1];
         homeGoals.style.width = "2%";

         // away goals
         const awayGoals = row.insertCell();
         awayGoals.textContent = rowData[3];
         awayGoals.style.width = "2%";

         // away
         const awayTeam = row.insertCell();
         awayTeam.textContent = rowData[2];
         awayTeam.style.width = "20%";
   });
   document.getElementById("matchday").appendChild(myMatchday);

}

function posStyle(posCell, place) {
   if(place <= 2) {
      posCell.style.background = "lightblue";
   }
   else if(place <= 4) {
      posCell.style.background = "lightgreen";
   }
   else if(place >= 16) {
      posCell.style.background = "#E14343";
   }
}

function makeStandings() {
   const myStandings = document.createElement("table");
   const thead = myStandings.createTHead();
   const firstRow = thead.insertRow();

   Object.values(standingsHeaders).forEach(data => {
      const th = document.createElement("th");
      th.textContent = data;
      firstRow.appendChild(th);
   });

   const tbody = myStandings.createTBody();

   standings.forEach((line, index) => {
      const row = tbody.insertRow();

      // pozycja
      const pos = row.insertCell();
      pos.textContent = (index + 1).toString();
      posStyle(pos, index + 1);

      // nazwa
      const clubName = row.insertCell();
      clubName.textContent = line.nazwa;

      // M, Pkt, Z, R, P
      const matches = row.insertCell();
      matches.textContent = line.M;

      const points = row.insertCell();
      points.textContent = line.pkt;
      points.style.fontWeight = "bold";

      const wins = row.insertCell();
      wins.textContent = line.Z;

      const draws = row.insertCell();
      draws.textContent = line.R;

      const losses = row.insertCell();
      losses.textContent = line.P;

      // bramki

      const goals = row.insertCell();
      goals.textContent = line.bramki;
   });

   // legend
   

   document.getElementById("standings").appendChild(myStandings);
}

function time() {
   const currTime = new Date();
   const hrs = currTime.getHours();
   const mins = currTime.getMinutes();
   const secs = currTime.getSeconds();

   document.getElementById("myTime").textContent = `${hrs}:${mins}:${secs}`;
}

makeMatchday();
makeStandings();
setInterval(time, 1000);