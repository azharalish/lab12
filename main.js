let title = document.querySelector('h1');
title.id = 'h1';
title = document.getElementById('h1');
title.innerHTML = 'Lab12 Assignment';
title.style.color = 'blue';

let hrOne = document.createElement('hr');
document.body.appendChild(hrOne);

let subtitleTask = document.createElement('h2');
subtitleTask.innerHTML = 'Task';
subtitleTask.style.color = 'red';
document.body.appendChild(subtitleTask);

let divOne = document.createElement('div');
divOne.id = 'listDivOne';
divOne.innerHTML = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
document.body.appendChild(divOne);
let bulletTextArrayOne = ["find elements in the DOM (5 points);", "create/add/remove elements (5 points);", "change content of the elements (5 points);", "change styles of the elements (5 points);", "change attributes of the elements (5 points);", "change classes of the elements (5 points)."];
let ulOne = document.createElement('ul');
document.getElementById('listDivOne').appendChild(ulOne);
bulletTextArrayOne.forEach(function(bullet, index){
    let li = document.createElement('li');
    ulOne.appendChild(li);
    li.innerHTML += bullet;
    if(index % 2 === 0){
        li.style.color = 'green';
    } else {
        li.style.color = 'purple';
    }
});
let paragraph = document.createElement('div');
paragraph.id = 'paragraphDiv';
paragraph.innerHTML = 'Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href="#">link</a>.';
document.body.appendChild(paragraph);

let hrTwo = document.createElement('hr');
document.body.appendChild(hrTwo);

let subtitleSubmission = document.createElement('h2');
subtitleSubmission.innerHTML = 'Submission';
subtitleSubmission.style.color = 'red';
document.body.appendChild(subtitleSubmission);

let divTwo = document.createElement('div');
divTwo.id = 'listDivTwo';
divTwo.innerHTML = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
document.body.appendChild(divTwo);
let bulletTextArrayTwo = ["Create a new repository on Github, named lab12 (1 point).", "Clone this repository to your local machine and work inside it.", "Create a new HTML file, called index.html, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (1 point).", "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).", "Link this main.js file to your index.html file (Note: place your script at the end of the body section).", "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).", "After you finish your work, submit it to the Github (2 points)."];
let ulTwo = document.createElement('ul');
document.getElementById('listDivTwo').appendChild(ulTwo);
bulletTextArrayTwo.forEach(function(bullet, index){
    let li = document.createElement('li');
    ulTwo.appendChild(li);
    li.innerHTML += bullet;
    if(index % 2 === 0){
        li.style.color = 'green';
    } else {
        li.style.color = 'purple';
    }
});