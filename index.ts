let username : String="anyad";
let age: Number =20;
let igen : Boolean = false;

let szerkezet ={
    username:"Nemes Tamás",
    age:50,
    igen:true
}

type Driver = {
    name: string,
    age: Number,
    validDriverLicense: Boolean,
    blackDots:Number,
    countryCode:'H' |'GB' | 'CH'|'I'
}
let tomi Driver = {
    name:'Nemes Tamás',
    age:50,
    validDriverLicense:false,
    blackDots: 12,
    countryCode:'H'
}