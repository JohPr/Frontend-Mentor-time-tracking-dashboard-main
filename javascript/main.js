"use strict";

let card = document.querySelectorAll(".card");
let title = document.querySelectorAll(".title span:first-of-type");
let bg_color = document.querySelectorAll(".bg-card");
let hrs = document.querySelectorAll(".timer-card h2");
let hrs_previous = document.querySelectorAll(".timer-card > span");
let btn = document.querySelectorAll(".dashboard-nav a");

let time_name = "";

let json = [
  {
    "title": "Work",
    "bg-color": "#ff8c66",
    "bi": "url(../images/icon-work.svg)",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "bg-color": "#56c2e6",
    "bi": "url(../images/icon-play.svg)",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "bg-color": "#ff5c7c",
    "bi": "url(../images/icon-study.svg)",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "bg-color": "#4acf81",
    "bi": "url(../images/icon-exercise.svg)",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "bg-color": "#7536d3",
    "bi": "url(../images/icon-social.svg)",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "bg-color": "#f1c65b",
    "bi": "url(../images/icon-self-care.svg)",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]


for(let j=0; j<btn.length; j++) {
  btn[j].addEventListener("click", e=> {
    time_name = btn[j].textContent;
    for(let i=0; i<hrs.length; i++) {
      if (time_name === "Daily"){
        hrs[i].textContent = json[i].timeframes.daily.current;
        hrs_previous[i].textContent = "Last Day - " + json[i].timeframes.daily.previous +"hrs";
      }
      else if (time_name === "Weekly") {
        hrs[i].textContent = json[i].timeframes.weekly.current;
        hrs_previous[i].textContent = "Last Week - " + json[i].timeframes.weekly.previous +"hrs";
      }
      else {
        hrs[i].textContent = json[i].timeframes.monthly.current;
        hrs_previous[i].textContent = "Last Month - " + json[i].timeframes.monthly.previous +"hrs";
      }
    }
  });
};


for(let i=0; i<hrs.length; i++) {
  hrs[i].textContent = json[i].timeframes.weekly.current;
  hrs_previous[i].textContent = "Last Week - " + json[i].timeframes.weekly.previous +"hrs";
}

for(let i = 0; i<card.length -1; i++) {
  title[i].textContent = json[i].title;
  bg_color[i].style.backgroundColor = json[i]["bg-color"];
  bg_color[i].style.backgroundImage = json[i].bi;
}
