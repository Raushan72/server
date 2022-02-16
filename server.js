;// API ( POST, GET, PUT, DELETE); 


/*const express = require('express');
const body = require('body-parser');
const api = express();u/
api.use(body.json());
const port = 3000;

api.post('/add', (req, res) => {
    sum1 = req.body.number1 + req.body.number2
    res.send(`${sum1}`)
});
api.listen(port, () => {
    console.log('server is going on')
});*/



/*const express = require('express');
const body = require('body-parser');
const api = express();
api.use(body.json());

const port = 3000;

api.post('/subtraction', (req, res) => {
    const sum2 = req.body.number1 - req.body.number2
    res.send(`${sum2}`);
});

api.listen(port, () => {
    console.log('server is going on')
});*/


/*const express = require('express');
const body = require('body-parser');
const api = express();
api.use(body.json());

// port = 3000;

api.post('/multiplication', (req, res) => {
    sum3 = req.body.number1 * req.body.number2
    res.send(`${sum3}`)
});
api.listen(port = 3000, () => {
    console.log('server is going on')
});*/



/*const express = require('express');
const body = require('body-parser');
const api = express();
api.use(body.json());

api.post('/division', (req, res) => {
   const sum4 = req.body.number1 / req.body.number2
   res.send(`${sum4}`)
});
api.listen(port = 3000, () => {
    console.log('server is going on')
});*/


/*const express = require('express');                 ///////////
const body = require('body-parser');
const api = express();
api.use(body.json());

const output = [];
api.post('/addperson', (req, res) => {
      const person = req.body
      output.push(person) 
      res.send('ok'); 
});

api.get('/get', (req, res) => {
    res.send(output);
});

api.get('/getperson/:id',(req, res) => {
    const id = +req.params.id
    const personid = output.find(obj => obj.id === id)
    res.send(personid);
});




api.put('/updateperson/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const person = output.find(obj => obj.id === id)
    person.name = body.name
    res.send('updated')
});




api.delete('/deleteperson/:id', (req, res) => {
    const id = +req.params.id
    const sum = output.findIndex(obj => obj.id === id)
    output.splice(sum, 1)
    res.send('deleted')
});

api.listen(port = 3000, () => {
    console.log('server is going on')
});*/















/*const express = require('express');
const body = require('body-parser');
const api = express();
api.use(body.json());

const output = [];
api.post('/addperson', (req, res) => {
    const sum = req.body
    output.push(sum)
    res.send('ok')
});


api.get('/getperson', (req, res) => {
    res.send(output)
});



api.get('/getperson/:id', (req, res) => {
    const id = +req.params.id
    const personid = output.find(obj => obj.id === id)
    res.send(personid)
});



api.put('/updateperson/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const person = output.find(obj => obj.id === id)
    person.name = body.name
    res.send('updated') 
});




api.delete('/deleteperson/:id', (req, res) => {
    const id = +req.params.id
    const dlte = output.findIndex(obj => obj.id === id)
    output.splice(dlte, 1)
    res.send('deleted')
})




api.listen(port = 3000, () => {
    console.log('server is going on')
});*/











      /*const express = require('express');
const api = express();
api.use(express.json());
const { validate, ValidationError, Joi } = require('express-validation')

const schema = {
    body: Joi.object({
     name: Joi.string()
     .min(3)
     .max(5)
     .required(),

     age: Joi.number()
     .min(1)
     .max(100)
     .required(),

     id: Joi.number()
     .min(1)
     .required()
    }),
}




const output = [];
api.post('/addperson',validate(schema, {}, {}),(req, res) => {

    const person = req.body
    output.push(person)
    res.send('Add complete')
});


api.get('/getperson', (req, res) => {
    res.send(output)
});


api.get('/getperson/:id', (req, res) => {
    const id = +req.params.id
    const personid = output.find(obj => obj.id === id)
    res.send(personid)
});



api.put('/updateperson/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const updateperson = output.find(obj => obj.id === id)
    updateperson.name = body.name
    res.send('updated') 
});



api.delete('/deleteperson/:id', (req, res) => {
    const id = +req.params.id
    const deleteperson = output.findIndex(obj => obj.id === id)
    output.splice(deleteperson, 1)
    res.send('deleted')
});


api.listen(3000, () => {
    console.log('server is going on')
});*/










/*const name = 'jahaj';
const names = name.split('').reverse().join('')

if(name == names){
   console.log('this is write')
}else{
    console.log('this is wrong')
}*/


/*const names = ['Raushan', 'Raju', 'radar', 'Khushbo', 'level'];
const palindrom = names.map(str => {
    const sum = str.split('').reverse().join('')
    if(str === sum){
        console.log('palindrom hai')
    }else{
        console.log('palindrom nhi hai')
    }
}) */












/*const input = 'my name is khushboo'.split('')
const vowels = ['a', 'e', 'i', 'o', 'u'];

let count = 0
input.forEach(letter => {
if(vowels.includes(letter)){
 count++
} 

});
console.log(count)*/





/*const express = require('express');
const api = express();
api.use(express.json());
const { validate, ValidationError, Joi } = require('express-validation');



const person = {
    body: Joi.object({
    name: Joi.string()
         .min(3)
         .max(5)
         .required(),
        
    age: Joi.number()
         .min(1)
         .max(100)
         .required(),

    id:  Joi.id()
         .min(1)
         .required()       
         
         
    })
},

const output = [];
api.post('/addperson'),validate(person, {}, {}),(req, res) => {

    const person = req.body
    output.push(person)
    res.send('Add complete')
};





api.listen(3000, () => {
    console.log('server is going on')
});*/







/*const express = require('express');
const api = express();
api.use(express.json());
const { validate, ValidationError, Joi } = require('express-validation')

let personValidation = {
    body: Joi.object({
    name: Joi.string()
         .min(3)
         .max(5)
         .required(),
        
    age: Joi.number()
         .min(1)
         .max(100)
         .required(),

    id:  Joi.number()
         .min(1)
         .required()       
         
         
    })
}


const output = [];
api.post('/addperson',validate(personValidation, {}, {}),(req, res) => {

    const person = req.body
    output.push(person)
    res.send('Add complete')
});


api.get('/getperson', (req, res) => {
    res.send(output)
});


api.get('/getperson/:id', (req, res) => {
    const id = +req.params.id
    if(Number.isNaN(id) || id < 1){
        res.send('unvalid id')
    }
    const personid = output.find(obj => obj.id === id)
    res.send(personid)
});



api.put('/updateperson/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const updateperson = output.find(obj => obj.id === id)
    updateperson.name = body.name
    res.send('updated') 
});



api.delete('/deleteperson/:id', (req, res) => {
    const id = +req.params.id
    const deleteperson = output.findIndex(obj => obj.id === id)
    output.splice(deleteperson, 1)
    res.send('deleted')
});


api.listen(3000, () => {
    console.log('server is going on')
});


api.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err.details.body)
    }
    
    return res.status(500).json(err)
    })*/
    







/*const name = 'jahaj';
const names = name.split('').reverse().join('')

if(name == names){
   console.log('this is write')
}else{
    console.log('this is wrong')
}*/


/*const names = ['Raushan', 'Raju', 'radar', 'Khushbo', 'level'];
const palindrom = names.map(str => {
    const sum = str.split('').reverse().join('')
    if(str === sum){
        console.log('palindrom hai')
    }else{
        console.log('palindrom nhi hai')
    }
}) */
















const express = require('express');
// const { router } = require('server/plugins/socket');
const api = express();
api.use(express.json());

const sum = [];

api.post('/addperson', (req, res) => {
    const person = req.body 
    sum.push(person)
    res.send('added')
});


api.get('/getperson', (req, res) => {
    res.send(sum)
});


api.get('/getperson/:id', (req, res) => {
    const id = +req.params.id
    const personid = sum.find(obj => obj.id === id)
    res.send(personid)
});


api.put('/updateperson/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const person = sum.find(obj => obj.id === id)
    person.name = body.name
    res.send('updated') 
});


api.delete('/deleteperson/:id', (req, res) => {
    const id = +req.params.id
    const deleteid = sum.findIndex(obj => obj.id === id)
    sum.splice(deleteid, 1)
    res.send('deleted') 
})









api.listen(3000, () => {
    console.log('server is going on')
});



