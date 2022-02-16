/*const numbers = [1, 2, 3, 4, 5];
const value = numbers.map(obj => {
    if(obj % 2 === 0){
       return 0
    }else{
       return obj
    }
});
console.log(value);*/                                       // moduler





/*const names = ['Raushan', 'Khushboo', 'Alisha', 'Arya'];
const name = names.map(obj => {
    return obj + ' ' + 'Sharma'
});
console.log(name);*/                                       // add name with map





/*const input = [{name : 'Raju', gender : 'male'},
               {name : 'khushboo', gender : 'female'}, 
               {name : 'Arya', gender : 'female'}];


const sum = [];               
const output = input.map(num => {
    return sum[num.name] = 'Sharma'
});             
console.log(sum);*/                                        // add name title



/*const names = [{Name : 'Raushan', age : 19, location : 'india'},
               {Name : 'khushboo', age : 23, location : 'dubai'},
               {Name : 'Arya', age : 2, location : 'dubai'}];

const output = names.find(obj => {
    if(obj.location === 'dubai'){
       return true
    }else{
       return false
    }
});
console.log(output);*/                                    // dubai person output







/*const input = [{item : 'maggie', type : 'snack', price : 10},
               {item : 'atta', type : 'grocery', price : 20},
               {item : 'milk', type : 'grocery', price : 30}];

const output = {};
input.map(obj => {
    if(output[obj.type]){
       output[obj.type] = output[obj.type] + obj.price
    }else{
       output[obj.type] = obj.price
    }
});
console.log(output);*/                                             //price add




/*const input = [{name : 'Raju', gender : 'male'},
               {name : 'Raushan', gender : 'male'}];

const name ={};
 input.map(obj => {
    name[obj.name] = 'Sharma'
})               
console.log(name);*/                                        //add name title







/*const input = [{name : 'Khushboo', gender : 'female'},
               {name : 'Raju', gender : 'male'},
               {name : 'Arya', gender : 'female'},
               {name : 'Raushan', gender : 'male'}];

const output = {
    female : [],
    male : []
};
input.map(obj => {
     if(output[obj.gender]){
        output[obj.gender] = [...output[obj.gender],obj]
     }else{
        output[obj.gender] = [obj.name]
     }
})
console.log(output);*/                                             // male and female 






/*let numbers = [{firstname : 'Raju'},
               {firstname : 'Raushan'}];

let add = numbers.map(obj => {
    obj.lastname = 'sharma'
    return numbers
})               
console.log(numbers);*/                                            // lastname add 






/*const input = [{Name : 'Raushan', age : 19, location : 'india'},
               {Name : 'khushboo', age : 23, location : 'dubai'},
               {Name : 'Arya', age : 2, location : 'dubai'},
               {Name : 'Raju', age : 26, location : 'dubai'}];

const output = {
    above20 : [],
    below20 : []
};
input.map(obj => {
     if(obj.age > 20){
        output.above20.push({
            name : obj.Name,
            age : obj.age,
            location : obj.location
        })
     }else{
        output.below20.push({
            name : obj.Name,
            age : obj.age,
            location : obj.location
        })
     }
})
console.log(output)*/







/*const number = [10, 20, 30, 40, 50];
let sum = 0;
number.map(num => {
    sum = sum + num
});
console.log(sum)*/

















