
function getRelationship(x, y) {
    var param1valid = typeof(x) === "number";
    var param2valid = typeof(y) === "number";

    if (param1valid && param2valid) {
        if (x < y) {
            return "<";
        }
        if (x > y) {
            return ">";
        } else {
            return "=";
        }
    }
    if (param1valid) {
        return "Can't compare relationships because "+y+" is not a number";
    }
    if (param2valid) {
        return "Can't compare relationships because "+x+" is not a number";
    }

    return "Can't compare relationships because "+x+" and "+y+" are not numbers";
};

var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John W Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
    for (var name in names) {
        splitNames = names[name].split(" ");
        names[name] = splitNames[splitNames.length - 1] + ", ";
        for (var splitName = 0; splitName < splitNames.length-1; splitName++) {
            names[name] += splitNames[splitName];
            names[name] += " ";
        }
        names[name] = names[name].trim();
    }
    names.sort();
    return names;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    var returnArray = [];
    for (var result in results.formattedResults.ruleResults) {
        if (results.formattedResults.ruleResults.hasOwnProperty(result)) {
            returnArray.push(results.formattedResults.ruleResults[result].localizedRuleName);
        }
    }
    return returnArray;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    var bytes = 0;
    for (var stat in results.pageStats) {
        if (results.pageStats.hasOwnProperty(stat)) {
            if (stat.match(/Bytes/)) {
                //console.log(stat);
                bytes += Number(results.pageStats[stat]);
            }
        }
    }
    return bytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [
                    {
                        "header": {
                            "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                            "args": [
                                {
                                    "type": "BYTES",
                                    "value": "1.3KiB"
                                },
                                {
                                    "type": "INT_LITERAL",
                                    "value": "0"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Minifying $1 could save $2 ($3% reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "value": "717B"
                                        },
                                        {
                                            "type": "INT_LITERAL",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying $1 could save $2 ($3% reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "value": "258B"
                                        },
                                        {
                                            "type": "INT_LITERAL",
                                            "value": "0"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0.0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));