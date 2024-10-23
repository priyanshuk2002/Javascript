const accountid=1234;
let accountEmail="priyanshukhandelwal@gmail.com";
// console.log(accountEmail);
if(1){
    let name="priyanshu";
    var names="khandelwal";
//the scope of let is within the block of code. so prefer not to use var

}
// console.log(names)
// accountid=2 // it will not be overwritten not allowed

accountEmail="pri@gmail.com"  //overwriiten
// console.log(accountEmail)

 let accountname; //if we only declare the accountname it will be undefined
console.log(accountid)
console.table([accountid,accountEmail])