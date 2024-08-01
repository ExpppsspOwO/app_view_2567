var date =  {
    id:1,
    name:'Suphanan',
    age:25,
}
// Json ข้อความ
console.log(JSON.stringify(date))
var date1 = '{"id":1,"name":"Suphanan","age":25}'
// Json Object
console.log(JSON.parse(date1))