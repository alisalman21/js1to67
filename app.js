
// Chapter#1
// 1. Write a script to greet your website visitor using JS alert box.
// window.alert("Welcome to my Website");

// 2
// window.alert("Please enter the valid password");

// 3
// window.alert("welcome to JS land...\n Happy Coding!");

// 4
// window.alert("Welcome to JS land..");
// window.alert("Happy Coding!");

// 5
// open browser right click mouse and click inspect then type below code in console section click enter 
// window.alert("Hello.. I can run JS through web browser's consol");

// Chapter#2
// 1
// var username;

// 2
// var myName = "Yasir Abbas";

// 3
// var msg = "Hello World!";
// window.alert(msg);

// 4
// var myName = "Yasir Abbas";
// var age = 19;
// var course = "Web and mobile development";
// window.alert(myName);
// window.alert(age);
// window.alert(course);

// 5 undone
// var food = "pizza";

// 6
// var email = "18sw51@students.muet.edu.pk";
// alert("My email address is "+email);

// 7
// var book = "A smarter way to learn JavaScript";
// window.alert("I am trying to learn from the book "+book);

// 8
// document.write("Yeh! I can write HTML content through JS");

// 9
// var msg = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬";
// window.alert(msg);
// document.write(msg);


// Chapter#3
// 1
// number age = 20;
// window.alert("I am "+age+" years old");

// 2
// var count = 12;
// window.alert("You have visited this site "+count+" times");

// 3
// let bday = "1998";
// document.write("My birthyear is "+bday +"<br>Data type of my declared variable is number");

// 4
// let name = prompt("Your good name");
// let product = prompt("Which product do you want to buy");
// let qantity = prompt("Enter the quantity");
// document.write(name+" ordered "+qantity+" "+product+" from yasirClothing Store");


// chapter#4
// 1
// var x,y,z;
// x=1;
// y=2;
// z=3;
// window.alert(x+","+y+","+z);

// 2
// var yasir,Yasir,yasir110,yasir$,yasir_abbas,msgAlert;
// yasir=1;
// yasir110=2;
// yasir$=3;
// yasir_abbas=4;
// msgAlert=5;
// Yasir=6;
// document.write(yasir+","+Yasir+","+yasir110+","+yasir$+","+yasir_abbas+","+msgAlert);
// //illegeal declaration
// var yasir Abbas,5Yasir,yasir@,yasir!,alert;

// 3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain letters , numbers ,dollar sign and underscore For example $my_1stVariable <br>");
// document.write("Variables must begin with a letter,$ or _ . For example $name, _name or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keyword<br>");


// Chapter#5
// 1
// var x = window.prompt("Enter 1st letter");
// var y = window.prompt("Enter 2nt letter");
// var z = +(x) + +(y);
// document.write("Sum of "+x+" + "+y+" is "+z);

// 2
// var x = window.prompt("Enter 1st letter");
// var y = window.prompt("Enter 2nt letter");
// document.write("Subtraction of "+x+" - "+y+" is "+((x) - (y)));
// document.write("<br>multiplication of "+x+" * "+y+" is "+((x) * (y)));
// document.write("<br>Division of "+x+" / "+y+" is "+((x) / (y)));
// document.write("<br>Modulus of "+x+" % "+y+" is "+((x) % (y)));

// 3
// var x;
// document.write("Value after variable declaration is :"+x);
// x=5;
// document.write("<br>Initial value : "+x);
// x++;
// document.write("<br>Value after increment is:"+x);
// x+=7;
// document.write("<br>value after addition of 7 is "+x);
// x--;
// document.write("<br>Value after decrement is:"+x);
// document.write("<br> The remainder is :"+x%3);

// 4
// var x = prompt("How many tickets do you want to buy");
// document.write("Total cost of buying "+x+" is "+x*560+"PKR");

// 5
// document.write("<h1>Table of 4</h1><br>");
// for(var i=1;i<=10;i++)
// {
//     document.write("<h6>"+i+" * 4 = "+i*4+"</h6> <br> ");
// }

// 6
// var c = +prompt("Enter your temperature");
// document.write(c+"<sup>0</sup>C is "+((c*9/5)+(32))+"<sup>0</sup>F<br>");
// var f = +prompt("Enter your temperature");
// document.write(f+"<sup>0</sup>F is "+(f-32)*(5/9)+"<sup>0</sup>C");

// 7
// var p1 = 650;
// document.write("Price of item1 is "+p1+"<br>");
// var q1 = 3;
// document.write("Quantity of item1 is "+q1+"<br>");
// var p2 = 100;
// document.write("Price of item2 is "+p2+"<br>");
// var q2 = 7;
// document.write("Quantity of item2 is "+q2+"<br>");
// var shipping = 100;
// var total = (p1*q1)+(p2*q2)+shipping;
// document.write("Total Cost of your order is "+total+"<br>");

// 8
// var obt = 804;
// var total = 980;
// document.write("Total Marks : "+total+"<br>");
// document.write("Obtained Marks : "+obt+"<br>");
// document.write("Percent : "+(obt/total)*100+"%");

// 9
// var dollar = 10;
// var riyal = 25;
// var total = (dollar*104.80)+(riyal*28);
// document.write("Total Currency in PKR : "+total);

// 10
// var riyal = 5;
// var total = ((riyal+5)*10)/2;
// document.write(total);

// 11
// var cur = 2020;
// var birthyear = 1998;
// document.write("Current Year : "+cur);
// document.write("<br>Birth Year : "+birthyear);
// document.write("<br>I am "+(cur-birthyear));

// 12
// var radius = 20;
// document.write("The circumference is "+(2*3.14*radius));
// document.write("<br>The Area is "+(3.14*(radius*radius)));

// 13
// var snack = "Chocolate Chip";
// var age = 22;
// var max = 72;
// var perday = 2;
// document.write("<h1>The lifeTime supply Calculator</h1>");
// document.write("<br><h3> Favorite Snack : "+snack);
// document.write("<br> Current Age : "+age);
// document.write("<br> Estimated Maximum Age : "+max);
// document.write("<br> Amount of Snacks per day : "+perday);
// document.write("<br> You will need "+((max-age)*(perday*365))+" "+snack+" to last you until the ripe old age of "+max+"</h3>");

// Chapter#6-9
// 1
// var x = +prompt("ENter the number");
// document.write("The value of a is "+x);
// document.write("<br><br>The value of ++a is "+(++x));
// document.write("<br>The value of a is now "+x);
// document.write("<br><br>The value of a++ is "+(x++));
// document.write("<br>The value of a is now" +x);
// document.write("<br><br>The value of --a is "+(--x));
// document.write("<br>The value of a is now "+x);
// document.write("<br><br>The value of a-- is "+(x--));
// document.write("<br>The value of a is now "+x);

// 2
// var a=2;
// var b=1;
// document.write("<br>The value of --a is "+(--a));
// document.write("<br>The value of --b is "+(--b));
// document.write("<br>The value of ++b is "+(++b));
// document.write("<br>The value of b-- is "+(b--));
// document.write("<br>1 - 0 + 1 + 1 = "+3);
// document.write("<br>Value of a now is "+a);
// document.write("<br>Value of b now is "+b);

// 3
// let name = prompt("What is your Good name");
// document.write("<h1>Asalaam O Alaikum Mr "+name+"</h1>");

// 4
// var num = prompt("Enter the number ","5");
// document.write("Displaying the table of "+num);
// for(var i =1;i<11;i++)
// {
//     document.write("<br>"+i+" * "+num+" = "+i*num);
// }

// 5
// let sub1 = prompt("Enter the 1st Subject");
// let sub2 = prompt("Enter the 2nd Subject");
// let sub3 = prompt("Enter the 3rd Subject");
// let total = 100;
// let obt1 = +prompt("Enter marks of "+sub1);
// let obt2 = +prompt("Enter marks of "+sub2);
// let obt3 = +prompt("Enter marks of "+sub3);
// let totalobt = (obt1+obt2+obt3);
// document.write("<table>");
// document.write("<tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained Marks </th><th> Percantage </th></tr>");
// document.write("<tr> <td>"+sub1+" </td> <td>"+total+"</td> <td>"+obt1+ "</td><th>"+(obt1/total)*100+"% </th></tr>");
// document.write("<tr> <td>"+sub2+" </td> <td>"+total+"</td> <td>"+obt2+ "</td><th>"+(obt2/total)*100+"% </th></tr>");
// document.write("<tr> <td>"+sub3+" </td> <td>"+total+"</td> <td>"+obt3+ "</td><th>"+(obt3/total)*100+"% </th></tr>");
// document.write("<tr> <th>Total</th> <th>"+300+"</th> <th>"+totalobt+ "</th><th>"+(totalobt/300)*100+"% </th></tr>");

// Chapter#9-11
// 1
// let city = window.prompt("Enter the city");
// if(city.toLowerCase()==="karachi")
// {
//     document.write("<h1>Welcome to the city of lights</h1>");
// }

// 2
// let gen = window.prompt("Enter your gender");
// if(gen.toLowerCase()==="male")
// {
//     document.write("<h1>Good Morning Sir</h1>");
// }
// else if(gen.toLowerCase()==="female")
// {
//     document.write("<h1>Good Morning Ma'am</h1>");
// }

// 3
// let signal = window.prompt("Enter your color of signal");
// if(signal.toLowerCase()==="red")
// {
//     document.write("<h1>Must Stop</h1>");
// }
// else if(signal.toLowerCase()==="yellow")
// {
//     document.write("<h1>Ready to Move</h1>");
// }
// else if(signal.toLowerCase()==="green")
// {
//     document.write("<h1>Move Now</h1>");
// }

// 4
// let patrol = +window.prompt("Enter quantity of patrol in your car(in litres)");
// if(patrol<0.25)
// {
//     document.write("<h1>Please refill the fuel in your car</h1>");
// }

// 5
// var a = 4; 
// if (++a === 5) 
// { 
//     alert("given condition for variable a is true"); 
// }
// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); }
// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// if (true){ alert("True"); } 
// if (false){ alert("False"); }
// if("car" < "cat"){ alert("car is smaller than cat"); }

// 6
// var eng = +window.prompt("Enter your marks in English");
// var math = +window.prompt("Enter your marks in Math");
// var ps = +window.prompt("Enter your marks in Pakistan Studies");
// var total = +window.prompt("Enter total marks");
// var per = (eng+math+ps)/total*100;
// document.write("<h1>Mark Sheet</h1><br>");
// if(per>=80)
// {
//     document.write("<h3>Total Marks : "+total+"</h3>");
//     document.write("<h3>Obtained Marks : "+(eng+math+ps)+"</h3>");
//     document.write("<h3>Percentage : "+per+"%</h3>");
//     document.write("<h3>Grade : A-one</h3>");
//     document.write("<h3>Remarks : Excellent</h3>");
// }
// else if(per>=70)
// {
//     document.write("<h3>Total Marks : "+total+"</h3>");
//     document.write("<h3>Obtained Marks : "+(eng+math+ps)+"</h3>");
//     document.write("<h3>Percentage : "+per+"%</h3>");
//     document.write("<h3>Grade : A</h3>");
//     document.write("<h3>Remarks : Good</h3>");
// }
// else if(per>=60)
// {
//     document.write("<h3>Total Marks : "+total+"</h3>");
//     document.write("<h3>Obtained Marks : "+(eng+math+ps)+"</h3>");
//     document.write("<h3>Percentage : "+per+"%</h3>");
//     document.write("<h3>Grade : B</h3>");
//     document.write("<h3>Remarks : You need to improve</h3>");
// }
// else if(per<60)
// {
//     document.write("<h3>Total Marks : "+total+"</h3>");
//     document.write("<h3>Obtained Marks : "+(eng+math+ps)+"</h3>");
//     document.write("<h3>Percentage : "+per+"%</h3>");
//     document.write("<h3>Grade : Fail</h3>");
//     document.write("<h3>Remarks : Sorry</h3>");
// }

// 7
// let guess = +window.prompt("Guess the number");
// let no = 5;
// if(guess===5)
// {
//     alert("Bingo! Correct answer");
// }
// else if(guess===no+1 || guess===no-1)
// {
//     alert("Close enough to the correct answer”.");
// }

// 8
// let x = prompt("Enter the number");
// if(x%3===0)
// {
//     alert(x+" is divisible by 3");
// }
// else if(x%3!==0)
// {
//     alert(x+" is not divisible by 3");
// }

// 9
// let x = prompt("Enter the number");
// if(x%2===0)
// {
//     alert(x+" is even");
// }
// else if(x%2!==0)
// {
//     alert(x+" is odd");
// }

// 10
// let temp = +window.prompt("Enter temperature(in C)");
// if(temp>40)
// {
//     document.write("<h1>It is too hot outside</h1>");
// }
// else if(temp>30)
// {
//     document.write("<h1>The Weather today is Normal.”</h1>");
// }
// else if(temp>20)
// {
//     document.write("<h1>Today’s Weather is cool.”</h1>");
// }
// else if(temp>10)
// {
//     document.write("<h1>OMG! Today’s weather is so Cool.”</h1>");
// }

// 11
// let no1 = +window.prompt("Enter 1st number");
// let no2 = +window.prompt("Enter 2nd number");
// let opp = window.prompt("Enter operator");
// if(opp==="+")
// {
//     document.write("<h1>"+no1+" + "+no2+" = "+(no1+no2)+"</h1>");
// }
// else if(opp==="-")
// {
//     document.write("<h1>"+no1+" - "+no2+" = "+(no1-no2)+"</h1>");
// }
// else if(opp==="*")
// {
//     document.write("<h1>"+no1+" * "+no2+" = "+(no1*no2)+"</h1>");
// }
// else if(opp==="/")
// {
//     document.write("<h1>"+no1+" / "+no2+" = "+(no1/no2)+"</h1>");
// }
// else if(opp==="%")
// {
//     document.write("<h1>"+no1+" % "+no2+" = "+(no1%no2)+"</h1>");
// }

// chapter#12-13
// 1
// let char = window.prompt("Enter the character");
// if(char>="A" && char <="Z")
// {
//     document.write(char+" is Capital");
// }
// else if(char>="a" && char <="z")
// {
//     document.write(char+" is small");
// }
// else
// {
//     document.write(char+" is number or symbol");
// }

// 2
// let no1 = window.prompt("Enter 1st no");
// let no2 = window.prompt("Enter 2nd no");
// if(no1>no2)
// {
//     document.write(no1+" is larger");
// }
// else if(no2>no1)
// {
//     document.write(no2+" is larger");
// }
// else
// {
//     document.write(no1 + " = "+ no2);
// }

// 3
// let no2 = window.prompt("Enter 2nd no");
// if(no2>0)
// {
//     document.write(no2+" is positive");
// }
// else if(no2<0)
// {
//     document.write(no2+" is negative");
// }
// else
// {
//     document.write("it is 0");
// }

// 4
// let char = window.prompt("Enter the character");
// char=char.toUpperCase();
// if(char==="A" || char==="E" || char==="I" || char==="0" || char==="U")
// {
//     document.write(char+" is vowel");

// }
// else
// {
//     document.write(char+" is conconent");

// }

// 5
// var pass = "Yasir";
// var entry = prompt("Enter your password","Enter Password Here")
// if(entry==="Enter Password Here")
// {
//     document.write("Please enter your password");
// }
// else {
//     if(entry===pass)
//     {
//         document.write("Correct! The password you entered matches the original password");
//     }
//     else if(entry!==pass)
//     {
//         document.write("Incorrect password");
//     }
// }

// 6
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day";
// } 
// else {
//     greeting = "Good evening"; 
// }

// 7
// var time = prompt("Enter the time in (1900=7pm) format");
// if(time>=0000 && time <1200)
// {
//     document.write("Good Morning");
// }
// else if(time >= 1200 && time < 1700)
// {
//     document.write("Good Afternoon");
// }
// else if(time >= 1700 && time < 2100)
// {
//     document.write("Good Evening");
// }

// else if(time >= 2100 && time < 2359)
// {
//     document.write("Good Night");
// }

// Chapter#14-16
// 1
// var students = [];

// 2
// var stringArray = ["Yasir","Abbas"];

// 3
// var stringArray = [1,2,3,4,5];

// 4
// var stringArray = [true,false];
// document.write(stringArray);

// 5
// var stringArray = ["Yasir","Abbas",5,true];
// document.write(stringArray);

// 6
// var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil" ,"PhD"];
// document.write("<h1>Qualifications : </h1>");
// for(var i =0;i<degrees.length ;i++)
// {
//     document.write("<h2>"+(i+1)+")  "+degrees[i]+"</h2>");
// }

// 7
// var names = ["Yasir","Moiz","Qadeer"];
// var marks = [320,230,480];
// for(var i = 0; i<names.length;i++)
// {
//     var per = (parseInt( marks[i])/500)*100
//     document.write("Score of "+names[i]+" is "+marks[i]+". Percentage "+per+"%<br>");
// }

// 8
// var color = ["Red","Green","Blue"];
// for(var i = 0; i<color.length;i++)
// {
//     document.write(color[i]+",");
// }
// var temp = prompt("What Color do you want to add to beggining");
// color.unshift(temp);
// document.write("<br>Array after adding at beggining<br>");
// for(var i = 0; i<color.length;i++)
// {
//     document.write(color[i]+",");
// }
// var temp2 = prompt("What Color do you want to add to end");
// color.push(temp2);
// document.write("<br>Array after adding at end<br>");
// for(var i = 0; i<color.length;i++)
// {
//     document.write(color[i]+",");
// }

// var temp3 = prompt("What Color do you want to add to beggining");
// var temp4 = prompt("What Color do you want to add to beggining");
// color.unshift(temp3);
// color.unshift(temp4);
// document.write("<br>Array after adding at beggining<br>");
// for(var i = 0; i<color.length;i++)
// {
//     document.write(color[i]+",");
// }

// color.shift();  
// document.write("<br>Array after deleting at beggining<br>");
// for(var i = 0; i<color.length;i++)
// {
//     document.write(color[i]+",");
// }

// color.pop();  
// document.write("<br>Array after deleting at end<br>");
// for(var i = 0; i<color.length;i++)
// {
//     document.write(color[i]+",");
// }

// 10
// var marks = [320,150,423,200];
// document.write("Score of students");
// for(var i = 0; i<marks.length;i++)
// {
//     document.write(marks[i]+",");
// }
// marks.sort();
// document.write("<br>Ordered Score of students");
// for(var i = 0; i<marks.length;i++)
// {
//     document.write(marks[i]+",");
// }

// 11
// var cities = ["Karachi","Islamabad","Quetta","Gambat"];
// document.write("Cities List : \n");
// for(var i = 0; i<cities.length;i++)
// {
//     document.write(cities[i]+",");
// }
// document.write("<br>Selected cities:");
// var sCities = cities.slice(1,3);
// for(var i = 0; i<sCities.length;i++)
// {
//     document.write(sCities[i]+",");
// }

// 12
// var arr = ["This","is","my","cat"];
// document.write("Array :")
// for(var i=0;i<arr.length;i++)
// {
//     document.write(arr[i]+",");
// }
//  var cat = arr.join(" ")
//  document.write("String : <br>"+cat);

// 13
// var arr = ["Keyboard","Mouse","Printer"];
// document.write("Divices : <br>");
// for(var i =0;i<arr.length;i++)
// {
//     document.write(arr[i]+",");

// }
// var length = arr.length
// for(var i =0;i<length;i++)
// {
//     document.write("<br>Out : <br>");
//     document.write(arr.shift());
// }

// 14
// var arr = ["Keyboard","Mouse","Printer"];
// document.write("Divices : <br>");
// for(var i =0;i<arr.length;i++)
// {
//     document.write(arr[i]+",");

// }
// var length = arr.length
// for(var i =0;i<length;i++)
// {
//     document.write("<br>Out : <br>");
//     document.write(arr.pop());
// }

// 15
// var arr = ["Iphone","Samsung","Nokia","Sony"];
// document.write("Mobile menufecturers : <br>");
// for(var i =0;i<arr.length;i++)
// {
//     document.write(arr[i]+",");

// }

// CHapter#17-20
// 1
// var arr = [[],[]];

// 2
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(var i =0;i<arr.length;i++)
// {
//     for(var j=0;j<arr[i].length;j++)
//     {document.write(arr[i][j]+" ");}
//     document.write("<br>");
// }

// 3
// for(var i=0;i<11;i++)
//     {
//         document.write(i+"<br>");
//     }

// 4
// var table = prompt("Enter a number to show its multiplication table");
// var len = prompt("Enter length of multiplication table ");
// document.write("Multiplication table of "+table+"<br>");
// document.write("Length "+len+"<br>");
// for(var i=1;i<=len;i++)
// {
//     document.write(table+" * "+i+" = "+(i*table)+"<br>");
// }

// 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//     for(var i=0;i<fruits.length;i++)
//     {
//          document.write(fruits[i]+"<br>");
//     }
//     for(var i=0;i<fruits.length;i++)
//     {
//          document.write("Element at index "+i+" is "+fruits[i]+"<br>");
//     }

// 6
// document.write("Counting<br>");
// for(var i=1;i<=15;i++)
// {
//     document.write(i+",");
// }
// document.write("<br>Reverse Counting<br>");
// for(var i=10;i>0;i--)
// {
//     document.write(i+",");
// }
// document.write("<br>Even<br>");
// for(var i=1;i<=20;i++)
// {
//     if(i%2===0)
//     document.write(i+",");
// }
// document.write("<br>Odd<br>");
// for(var i=1;i<=20;i++)
// {
//     if(i%2!==0)
//     document.write(i+",");
// }
// document.write("<br>Series<br>");
// for(var i=1;i<=20;i++)
// {
//     if(i%2===0)
//     document.write(i+"k,");
// }

// 7
// var a = ["cake","apple","chips","cookies","patties"];
// var order = prompt("Welcome to IBS, What do you want to order");
// var match = false;
// for(var i=0;i<a.length;i++)
// {
//     if(order.toLowerCase()===a[i])
//     {
//         match=true;
//         break;
//     }
// }
// if(match===true){
//     document.write(order+" is available at index "+i+" in our backery");
// }
// if(match===false){
//     document.write("sorry! "+order+" is not available ");
// }

// 8
// var arr = [24, 53, 78, 91, 12];
// var max = arr[0];
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
// }
// document.write(max+" is the largest number");

// 9
// var arr = [24, 53, 78, 91, 12];
// var max = arr[0];
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]<max)
//     {
//         max=arr[i];
//     }
// }
// document.write(max+" is the smallest number");

// 10
// for(var i=1;i<=100;i++)
// {
//     if(i%5===0)
//     document.write(i+",");



// cahpter# 21-25
// 1
// var fName = prompt("Enter your first Name");
// var lName = prompt("Enter your last Name");
// var fullName = fName+" "+lName;
// alert("Assalam o Alaikum Dear "+fullName);

// 2
// var model = window.prompt("Which is your favorite mobile phone model");
// document.write("My favorite phone model is :"+model+"<br> length of String is "+model.length);

// 3
// var country = "Pakistan";
// document.write("String : "+country+"<br> Index of n :"+country.indexOf("n"));

// 4
// var country = "Hello World";
// document.write("String : "+country+"<br> Last Index of l :"+country.lastIndexOf("l"));

// 5
// var country = "Pakistan";
// document.write("String : "+country+"<br> Character at 3 :"+country.charAt(3));

// 6
// var fName = prompt("Enter your first Name");
// var lName = prompt("Enter your last Name");
// alert("Assalam o Alaikum Dear "+fName.concat(" ",lName));

// 7
// var city = "Islamabad";
// var newCity = city.replace("Islam","Hyder");
// document.write("City : "+city+"<br> After Replacing "+newCity);

// 8
// var city = "Ali and Sami are best friends. They play cricket and football together.";
// var newCity = city.replace(/and/g,"&");
// document.write("Text : "+city+"<br> Text After Replacing : "+newCity);

// 9
// var city = "742";
// var newCity = parseInt(city)
// document.write("String : "+(city)+"<br> After converting into number "+(newCity));

// 10
// var lName = prompt("Enter text : ");
// document.write("User Input : "+lName+"<br>"+"Upper Case : "+lName.toLocaleUpperCase());

// 11
// var lName = prompt("Enter text : ");
// var newName = lName.slice(0,1).toUpperCase();
// newName += lName.slice(1,lName.length).toLowerCase();
// document.write("User Input : "+lName+"<br>"+"Upper Case : "+newName);

// 12
// var num = 35.36 ;
// document.write("Number : "+num+"<br> String : "+parseInt(num).toString());

// 13
// var user = window.prompt("Enter user Name ");
// var flag = false;
// for(var i=0; i<user.length;i++)
// {
//     if(user.charAt(i)==="@" || user.charAt(i)==="." || user.charAt(i)==="," || user.charAt(i)==="!")
//     {
//         flag = true;
//         break;
//     }
// }
// if(flag===true)
// {
//     alert("Please Enter the valid user Name");
// }
// else
// {
//     alert("User Name Saved!");
// }

// 14
// var a = ["cake","apple","chips","cookies","patties"];
// var order = prompt("Welcome to IBS, What do you want to order");
// var match = false;
// for(var i=0;i<a.length;i++)
// {
//     if(order.toLowerCase()===a[i])
//     {
//         match=true;
//         break;
//     }
// }
// if(match===true){
//     document.write(order+" is available at index "+i+" in our backery");
// }
// if(match===false){
//     document.write("sorry! "+order+" is not available ");
// }

// 15
// var user = window.prompt("Enter user Name ");
// var flag = false;
// for(var i=0; i<user.length;i++)
// {
//     if(user.charAt(i)==="@" || user.charAt(i)==="." || user.charAt(i)==="," || user.charAt(i)==="!")
//     {
//         flag = true;
//         break;
//     }
// }
// if(flag===true)
// {
//     alert("Please Enter the valid user Name");
// }
// else
// {
//     alert("User Name Saved!");
// }

// 15
// var input = prompt("Enter Password"); 
// var passw=  /^[A-Za-z]\w{6,14}$/;
// if(input.match(passw) )
// { 
// alert("Password Updated")
// }
// else
// { 
// alert('Enter a valid Password')
// }

// 16
// var university = "University of Karachi";
// var arr = [];
// arr = university.split("",university.length);
// for(var i=0;i<arr.length;i++)
// {
//     document.write(arr[i]+"<br>");
// }

// 17
// var country = "Pakistan";
// document.write("String : "+country+"<br>Last  Character of string : "+country.charAt(country.length-1  ));

// 18
// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var count = 0;
// for(var i=0;i<text.length;i++)
// {
//     var temp = text.slice(i,i+3);
//     if(temp==="the")
//     {
//         count++;
//     }
// }
// document.write(count);

// Chapter# 26-30
// 1
// var x = window.prompt("Enter any positive Number");
// document.write("Number : "+x+"<br>");
// document.write("Round off value : "+Math.round(x)+"<br>");
// document.write("Floor value : "+Math.floor(x)+"<br>");
// document.write("Ceil value : "+Math.ceil(x)+"<br>");  

// 2
// var x = window.prompt("Enter any negative Number");
// document.write("Number : "+x+"<br>");
// document.write("Round off value : "+Math.round(x)+"<br>");
// document.write("Floor value : "+Math.floor(x)+"<br>");
// document.write("Ceil value : "+Math.ceil(x)+"<br>");  

// 3
// var num = prompt("Enter any number ");
// document.write("Abolute value of "+num+" is "+Math.abs(num));

// 4
// var dice = Math.floor((Math.random()*6+1));
// document.write("Random dice value is "+dice);

// 5
// var dice = Math.floor((Math.random()*2+1));
// if(dice===1)
// document.write("Random coin value is tails");
// else if(dice===2)
// document.write("Random coin value is heads");

// 6
// var dice = Math.floor((Math.random()*100+1));
// document.write("Random number between 1 and 100 : "+dice);

// 7
// var num = prompt("Enter your weight in kilograms ");
// document.write("The Weight of user is "+parseFloat(num)+" Kilograms");

// 8
// let guess = +window.prompt("Guess the number");
// let no = Math.floor(Math.random()*10+1);
// if(guess===no)
// {
//     alert("Bingo! Correct answer");
// }
// else
// {
//     alert("Try Again buddy");
// }

// chapter#31-34
// 1
// var today = new Date();
// document.write(today);

// 2
// var today = new Date().getMonth();
// var months = ["January","Febaruary","march","April","May","June","July","August","Sepetmber","October","November","December"];
// document.write("Current Month is "+months[ today]);

// 3
// var today = new Date().toString();
// document.write("Today is "+today.substr(0,3));

// 4
// var today = new Date().toString();
// var day = today.substr(0,3);
// if(day==="sat" || day==="sun")
// {document.write("Its Fun day"+day);}

// 5
// var today = new Date().getDate();
// if(today<16)
// {document.write("First fifteen DAys of the month");}
// else if(today>=16)
// {document.write("last days of the month");}

// 6
// var today = new Date();
// document.write(today+"<br>");
// document.write("Mili seconds since 1 jan 1970 "+today.getTime()+"<br>");
// document.write("Minutes since 1 jan 1970 "+today.getTime()/(1000*60)+"<br>");

// 7
// var today = new Date().getHours();
// if(today<13)
// document.write("Its A.M<br>");
// else if(today>=13)
// document.write("Its P.M<br>");

// 8
// var today = new Date("31,dec 2020");
// document.write(today+"<br>");

// 9
// var date1 = new Date("04/24/2020"); 
// var date2 = new Date(); 
// var Diff = date2.getTime() - date1.getTime();
// var Diffdays = Diff/ (1000 * 3600 * 24);
// document.write(parseInt(Diffdays)+" days has passed since 1st Ramzan");

// 10
// var ram = new Date("1,jan 2020").getTime();
// var today = new Date().getTime();
// var diff = (today-ram);
// var result =(diff/(1000*60*60));
// document.write("Reference Date "+new Date()+"<br>");
// document.write(parseInt(result)+" Seconds passed from beggining of 2015 ");

// 11
// var today = new Date();
// document.write("Current Timing "+today+"<br>");
// var hourago = new Date().setHours(today.getHours()-1);
// document.write("Timing 1 hour ago"+new Date(hourago)+"<br>");

// 12
// var today = new Date();
// var ago = new Date().setFullYear(today.getFullYear()-100);
// alert("Current Date "+today+"<br> 100 years ago "+new Date(ago));

// 13
// var age = prompt("Enter your age");
// var today = new Date().getFullYear();
// document.write("Your age is "+age);
// document.write("<br>Your birth year is "+(today-age));

// 14
// var name = "yasir";
// var today = new Date().getMonth();
// var months = ["January","Febaruary","march","April","May","June","July","August","Sepetmber","October","November","December"];
// var nou = 410;
// var cpu = 16;
// document.write("Customer name "+name+"<br>");
// document.write("Billing Month "+months[ today]+"<br>");
// document.write("Number of Units: "+nou+"<br>");
// document.write("Charges per Units: "+cpu+"<br>");
// document.write("Net Amount payable (within due date): "+(nou*cpu)+"<br>");
// document.write("Late paymenet surCharges: "+350+"<br>");
// document.write("Gross Amount payable (after due date): "+((nou*cpu)+350)+"<br>");


// chapter# 35-38
// 1
// function today(){
//     var today = new Date();
//     document.write(today);
// }
// today();

// 2
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greet(firstName,lastName);
// function greet(f,l)
// {
//     document.write("Assalam o Alaikum dear "+f+" "+l);
// }

// 3
// var firstName = prompt("Enter first number");
// var lastName = prompt("Enter  second number"); 
// document.write(firstName+" + "+lastName+" = "+sum(firstName,lastName) );
// function sum(f,l)
// {
// return parseInt(f)+parseInt(l);
// }

// 4
// let no1 = +window.prompt("Enter 1st number");
// let no2 = +window.prompt("Enter 2nd number");
// let opp = window.prompt("Enter operator");
// document.write(no1+" "+opp+" "+no2+" = "+calculator(no1,no2,opp));
// function calculator(num1,num2,operator)
// {
//     if(opp==="+")
//     {
//         return(parseInt(no1) + parseInt(no2) );
//     }
//     else if(opp==="-")
//     {
//         return(parseInt(no1) - parseInt(no2) );
//     }
//     else if(opp==="*")
//     {
//         return(parseInt(no1) * parseInt(no2) );
//     }
//     else if(opp==="/")
//     {
//         return(parseInt(no1) / parseInt(no2) );    }
//     else if(opp==="%")
//     {
//         return(parseInt(no1) % parseInt(no2) );
//     }
// }

// 5
// var num = prompt("Enter the number ");
// document.write("Square of "+num+" = "+square(num));
// function square(num)
// {
//     return num*num;
// }

// 6
// var num = prompt("Enter the number ");
// document.write("Factorial of "+num+" = "+square(num));
// function square(num)
// {
//     var ans = 1;
//     if(num===1 || num===0)
//     return num;
//     else
//     {
//         for(var i=num;i>0;i--)
//         {
//             ans = ans*i;
//         }
//         return ans;
//     }
// }

// 7
// var num = prompt("Enter the Starting number");
// var num1 = prompt("Enter the ending number");

// function square(start,end)
// {
//         for(var i=start;i<=end;i++)
//         {
//             alert(i);
//         }

// }
// square(num,num1);

// 8
// var num = prompt("Enter perpendicular");
// var num1 = prompt("Enter base");
// document.write("Hypotunue = "+hypotenuse(num,num1));
// function hypotenuse(num,num1)
// {
//     return Math.sqrt( square(num)+square(num1));
//     function square(num)
//     {
//         return num*num;
//     }   
// }

// 9
// var num = prompt("Enter the height ");
// document.write("Area of rectangle is  "+square(num,5));
// function square(num,num)
// {
//     return num*num;
// }

// 10
// var x = "mam";
// function palindrome(x)
// {
//     for(var i=0;i<x/2;i++)
//     {
//         if(x[i]!=x[x.length-1-i])
//         {
//             return false;
//         }
//     }
//     return true;
// }
// document.write(palindrome(x));

// 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// 12
// function longestWord(x)
// {
//     var arr = x.split(" ",x.length-1);
//     var max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[max].length<arr[i].length)
//         {
//             max = i;
//         }
//     }
//     return arr[max];
// }
// var sentence = "Web Development Tutorial ";
// document.write("Longest word in "+sentence+" is "+longestWord(sentence));

// 13
// function occurance(a,b)
// {
//     x=a.toLowerCase();
//     y=b.toLowerCase();
//     var count = 0;
//     for(let i=0;i<x.length;i++)
//     {
//         if(x[i]===y)
//         {
//             count++;
//         }
//     }
//     return count;
// }
// var found = "o";
// var sentance = "JSResourceS.com"
// document.write("Occurance of "+found+" in "+sentance+" is "+occurance(sentance,found));

// 14
// function calcCircumference(r)
// {
//     var circum = 2*Math.PI*r;
//     return "The circumference is"+circum;
// }
// function calcArea(r)
// {
//     var circum = Math.PI*(r*r);
//     return "The area is"+circum;
// }
// document.write(calcCircumference(5)+"<br>");
// document.write(calcArea(5)); 




// chapter 38 - 42
// task 1





// f 



 
// task 2 



// function leapYear(){
//     var a = prompt("Enter year")
//     var a = a%4 ;
    
//     if(a===0){
//         alert("leap year")   
//     }else alert("not a leap")
// }
// leapYear()


// task 3


// function area(){
// var a = +prompt("enter value for a")
// var b = +prompt("enter value for b")
// var c = +prompt("enter value for c")
// var s = (a+b+c)/2;
// var h = s* s-a +  s-b + s-c 
// // s-b s-c
// alert( " the area of triangle is " +h)
// }
//  area()
// task 8

// function distance(){
//     var city1 = prompt("enter first city")
//     var city2 = prompt("enter second city")
//     var dis = prompt("enter distance between them")
//     function meter(){
//       var a = dis*1000;
//       pro("distance in meter is "+ a)
//       }   
    
//     function feet(){
//       var b = a*3.5;
//       alert ("the distance in feet is" + b)
//     }
//     meter()
  
  
//     feet()
   
//   }
//   extra hours job 
//   task 8


//   distance()
//   var hours = prompt("enter your hours")
// var b = hours*12;
// alert  ("your price is RS:" +b)
// if (hours > 40){
//     alert("you are not do more job and your balance is " + b)
    
// }  



// notes finder
// task 10


// var amount = prompt("enter amount")
// var a = amount%100;
//  var b =(amount-a);
//  var c = b/100;

//  var d = a;
//  var f = a%50;
//  var g= (d-f);
//  var h = g/50;

// var j = a%50;
// // var j = f;
// var k = j%10;
// var l = (j-k);
// var m = l/10;


// document.write("you have " + c + " notes of hundread notes " + "  " + h +  "  "+ "fifty notes"+"  "+ + m +"ten notes " )
