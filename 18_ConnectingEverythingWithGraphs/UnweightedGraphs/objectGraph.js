/**
 * Friends have connection so that if A is connected to B, then B is connected to A
 */
 const friends = {
    "Alice": ["Bob", "Diana", "Fred"],
    "Bob": ["Alice", "Cynthia", "Diana"],
    "Cynthia": ["Bob"],
    "Diana": ["Alice", "Bob", "Fred"],
    "Elise": ["Fred"],
    "Fred": ["Alice", "Diana", "Elise"]
}

const alicesFriends = friends["Alice"];
console.log(alicesFriends);

/**
 * Followees show a graph that is directed - I can follow someone on twitter, but that doesn't mean he follows me.
 */
 const followees = {
    "Alice": ["Bob", "Cynthia"],
    "Bob": ["Cynthia"],
    "Cynthia": ["Bob"],
}

const whoAliceFollows = followees["Alice"];
console.log(whoAliceFollows);