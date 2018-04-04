let name = 'Robert Tate';
console.log(`Name: ${name.toUpperCase()}`);

let careerField = 'Development';
console.log(`Career Field: ${careerField}`);

let description = 'Currently enrolled in Covalence Nashville';
console.log(`Description: ${description}`);

console.log('');

let myInterests = ['Development', 'Music', 'Travel', 'Craft Beer']
console.log(`My Interests:`)
for(let i=0; i < myInterests.length; i++) {
    console.log(`* ${myInterests[i]}`)
}

console.log('');

function displayPosition(companyName, jobTitle, description) {
    console.log(`* ${companyName}, ${jobTitle}, ${description}`);
}
console.log('Past Positions Held:')
displayPosition('ASCAP', 'Licensing Specialist', 'Licensing Sales & Negotiations');
displayPosition('Music&Arts', 'Sales Manager', 'Retail Sales Operations & Management');
displayPosition('Wedgwood Circle', 'Administrative Coordinator', 'Operational Administration & Event Coordination');

console.log('');
console.log('My Skills:');

let skillName = [
    {
        skill: 'Drums',
        cool: true
    },
    {
        skill: 'Admin',
        cool: false
    },
    {
        skill: 'Development',
        cool: true
    },
    {
        skill: 'Cooking',
        cool: false
    }
];

function displaySkill(skill, cool) {
    if (cool === true) {
        console.log(`* BAM ${skill}`)
    } else {
        console.log(`* ${skill}`)
    }
};

for(let i=0; i < skillName.length; i++) {
    let x = skillName[i].skill
    let y = skillName[i].cool
    displaySkill(x, y);
};
