const SCRIPTS = [
  {
    name: "Latin",
    ranges: [
      [65, 91],      // A-Z
      [97, 123],     // a-z
      [192, 256]
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_script"
  },
  {
    name: "Cyrillic",
    ranges: [
      [1024, 1328]
    ],
    direction: "ltr",
    year: 950,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cyrillic_script"
  },
  {
    name: "Greek",
    ranges: [
      [880, 1024]
    ],
    direction: "ltr",
    year: -800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Greek_alphabet"
  },
  {
    name: "Arabic",
    ranges: [
      [1536, 1792]
    ],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script"
  },
  {
    name: "Hebrew",
    ranges: [
      [1424, 1536]
    ],
    direction: "rtl",
    year: -100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hebrew_alphabet"
  },
  {
    name: "Devanagari",
    ranges: [
      [2304, 2432]
    ],
    direction: "ltr",
    year: 100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Devanagari"
  },
  {
    name: "Thai",
    ranges: [
      [3584, 3712]
    ],
    direction: "ltr",
    year: 1283,
    living: true,
    link: "https://en.wikipedia.org/wiki/Thai_script"
  },
  {
    name: "Georgian",
    ranges: [
      [4256, 4352]
    ],
    direction: "ltr",
    year: 430,
    living: true,
    link: "https://en.wikipedia.org/wiki/Georgian_scripts"
  },
  {
    name: "Armenian",
    ranges: [
      [1329, 1424]
    ],
    direction: "ltr",
    year: 405,
    living: true,
    link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
  },
  {
    name: "Han",
    ranges: [
      [19968, 40960]
    ],
    direction: "ttb",
    year: -1100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chinese_characters"
  }
];

function characterScript (code) {
  for (let elem of SCRIPTS) {
    
    for (let range of elem.ranges) {
      const [from,to] = range;
      if (code >= from && code < to) {
        return elem;
      } 
    }
    
  }
  return null;
}

function countBy (items, groupName) {
  let groups = {}
  for (let elem of items) {
    let name = groupName(elem);
    if (groups[name] === undefined) {
      groups[name] = 1;
    } else {
      groups[name]++;
    }
  }

  let results = [];
  for (let key in groups) {
    results.push({name: key, count: groups[key]});
  }
  return results;
}

 function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    });
    let dominant = null;
    for (let elem of counted) {
      if ( dominant === null || elem.count > dominant.count) {
        dominant = elem;
      }
    }
    return dominant.name;
 }


 console.log(dominantDirection("Hello  Сучка"));

 //hfghfgh
