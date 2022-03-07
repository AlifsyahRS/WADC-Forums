
/*
    A map accepts a callback as an argument. If the map is called on an array, 
    the callback will be executed for all elements within the array.
*/

const students = [
    {
        'name' : 'John Doe',
        'grade' : 89
    },
    {
        'name' : 'Jane Doe',
        'grade' : 92
    },
    {
        'name' : 'Mary Hill',
        'grade' : 86
    }
]

/* 
Lets say I want to have an array of grades added by 5. Normally, you would have to loop through the arrays
but in this case, we could just use map.
*/
const final_grades = students.map(st => st.grade + 5);
console.log(final_grades);


/*
    A filter filters objects within an array based on a certain condition It will create
    a new copy of the array and then remove all objects within it that don't fit the
    condition.
*/

const languages = ['Python', 'Java', 'PHP', 'JavaScript', 'Ruby'];
const result = languages.filter(lang => lang.length<5); // Will take all items in languages with a length less than 5
console.log(result);

/*
    As the name suggests, reduce will take all the values within an array and then 
    reduce them into a single value. Its first argument is a callback and its second argument
    is the starting point for the reduce.
*/

const total = [1, 2, 3, 4, 5].reduce(function (previous, current) { // Will sum up all values within the array
    return previous + current;
}, 0);
console.log(total);