// let hiddenNumberIndex = -1;
// let numbers = [];

// function main() {
//     // let mylist = document.getElementById("mylist");
//     // let count = Number(prompt("Enter list count : "));

//     // let content = "";
//     // let style = "style='background-color: rgb(";
//     // let number = 0;

//     // for (let i = 0; i < count; i++) {
//     //     content += "<li ";
//     //     content += style;
//     //     content += number +",0,0)';>";
//     //     content += i + 1;
//     //     content += "</li>";
//     //     number+=10;
//     // }

//     // mylist.innerHTML = content;

//     // let fruits = ["Banana", "Orange", "Apple", "Mango"];
//     // fruits.forEach(element => {
//     //     alert(element);
//     // });

//     let mytable = document.getElementById("mytable");
//     let content = "";
//     let id = 1;


//     for (let i = 0; i < 3; i++) {
//         content += "<tr>";
//         for (let k = 0; k < 3; k++) {
//             let n = getRandom(10);
//             c = `
//             <td id='${id}' onclick=show(id)>
//             ${n}
//             </td>
//             `;
//             content += c;
//             ++id;
//             numbers.push(n);
//         }
//         content += "</tr>"
//     }

//     mytable.innerHTML = content;

//     var index = getRandom(10);
//     hiddenNumberId = numbers[index];
// }

// function getRandom(max) {
//     return Math.floor(Math.random() * max);
// }

// let tryc = 3;

// function show(id) {


//     let element = document.getElementById(id);

//     if (id == hiddenNumberId) {
//         alert('you won');
//         element.style.backgroundColor = "springgreen";
//     }
//     else {
//         element.style.backgroundColor = "red";
//         tryc--;
//     }

//     if (tryc == 0) {
//         alert('you lost ');
//         let element = document.getElementById(hiddenNumberIndex);
//         alert(element.innerHTML);
//     }

// }

// main();


let hiddenNumberIndex = -1;
let numbers = [];
let table_length = 4;

function main() {
    // let mylist = document.getElementById("mylist");
    // let count = Number(prompt("Enter list count : "));

    // let content = "";
    // let style = "style='background-color: rgb(";
    // let number = 0;

    // for (let i = 0; i < count; i++) {
    //     content += "<li ";
    //     content += style;
    //     content += number +",0,0)';>";
    //     content += i + 1;
    //     content += "</li>";
    //     number+=10;
    // }

    // mylist.innerHTML = content;

    // let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.forEach(element => {
    //     alert(element);
    // });

    var numbers = getDifferentRandomNumbers();

    let mytable = document.getElementById("mytable");
    let content = "";
    let index = 0;

    // for (let i = 0; i < table_length; i++) {
    //     content += "<tr>";
    //     for (let k = 0; k < table_length; k++) {
    //         let n = numbers[index];
    //         c = `
    //         <td id='${n}' onclick=show(id)>
    //         '${n}' 
    //         </td>
    //         `;
    //         content += c;
    //         index++;
    //         numbers.push(n);
    //     }
    //     content += "</tr>"
    // }


    for (let i = 0; i < table_length; i++) {
        for (let k = 0; k < table_length; k++) {
            numbers[i*k + k] = 0;
        }
    }

    mytable.innerHTML = content;

}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}


function getDifferentRandomNumbers(max) {
    let count = table_length * table_length / 2;
    const result = [];
    while (result.length < count) {
        const randomNumber = Math.floor(Math.random() * (count)) + 1;
        if (!result.includes(randomNumber)) {
            result.push(randomNumber);
        }
    }
    return result;
}

// let tryc = 3;

function show(id) {
    let element = document.getElementById(id);
    let content = "<img class='myimg' src='";
    content += `${id}`;
    content += ".png' ";
    content += "alt=''>";

    element.innerHTML = content;
}

main();


