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
  return SCRIPTS.find(elem => {
    return elem.ranges.some(range => {
      const [from,to] = range;
      return code >= from && code < to;
    })
  });
}

function countBy (items, groupName) {
  let groups = items.reduce((groups, elem) => {
    let name = groupName(elem);
    groups[name] === undefined ? groups[name] = 1 : groups[name]++;
    return groups;
  }, {});

  let results = [];
  for (let key in groups) {
    results.push({name: key, count: groups[key]});
  }
  return results;
}

 function dominantDirection(text) {
    let counted = countBy([...text], char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    });

    let dominant = counted.reduce((dominant, elem) => {
      if ( dominant === null || elem.count > dominant.count) {
        return elem;
      } else {
        return dominant;
      }
    },null)

    return dominant.name;
 }


 console.log(dominantDirection("Hello  Сучка"));


