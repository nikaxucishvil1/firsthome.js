//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: პრიმიტიულს შეგვიძლია მივცეთ 1 მონაცემი მხოლოდ ხოლო არაპრიმიტიულს რამდენიმე მონაცემი

//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer:const შეცვლა აღარ შეგვიძლია რასაც დავწერთ იქნება სულ ეგ ხოლო let ის შეცვლა ნებისმიერ დროს შეგვიძლია
const names = "giorgi" // const names = "beqa" აღარ შეიძლება გვექნება error
let age = 22
console.log ('before changed',age)
age = 30
console.log ('changed',age)


//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.

let lastName = "xucishvili" //მივანიჭე პრიმიტიულ ცვლადს string მნიშვნელობა
console.log ('before changed',lastName)
lastName = 30//შევუცვალე პრიმიტიულ ცვლადს strin მნიშვნელობა number იტ
console.log ('changed',lastName)
let cities = null // მივანიჭე პრიმიტიულ ცვლადს null მნიშვნელობა
console.log ('before changed',cities)
cities = "NYC"//null  მნიშვნელობა შევცვალე string ით
console.log ('changed' , cities)


//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ
let user = [ 
    { 
    firstName: 'nika',
    lastName: 'xucishvili',
    asaki: 16 ,
    email: 'xucishvilin90@gmail.com',
    adress: 'Rustavi kapanadzis 15',
    isStudent: true,
    }	
]
console.log (user)


