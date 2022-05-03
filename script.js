// if (hul==0 or less) then ship destroyied
// space                   &&                   alien

// hull =20                                      hull  3-6
// firepower 5                                  firepower   2-4
// acuraccy = 0.7                              accuraccy     0.6 -0.8
 
// function myFunction() {
    let person = prompt("if you ready enter your name","player");
    if (person != null) {
      document.getElementById("demo").innerHTML =
       ( person +   " if you ready let us do it ");
    }
    
//   }


let  Ship = 
{       
        hull : 20,
        firePower:5,
        accuracy:0.7
    
         
}
myShip=Ship;
class Alien
{
    constructor(hull, firePower, accuracy)
    {
        this.hull =Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        this.firePower=Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        this.accuracy= (Math.floor(Math.random() * 3) + 6) / 10;
    }
}
fAlien = new Alien()

    console.log('alien')
    console.log(fAlien.hull)
    console.log(fAlien.firePower)
    console.log(fAlien.accuracy)

    console.log('my ship')
    console.log(myShip.hull)
    console.log(myShip.firePower)
    console.log(myShip.accuracy)
 let starting=prompt ('press okay to start ')
// im attacking the first alien 
function checking_if_its_successful_hit(whatever_ship){
return (Math.random <= whatever_ship.accuracy)
console.log('successful hit')
}


   //  myTurn_Attacking(fAlien)
//=================function when space ship attack the alien ship===============
function myTurn_Attacking(fAlien)     
   {
if (checking_if_its_successful_hit(myShip)) // if space ship hit the alien with successful hit 
   { 
        newAlien.hull--;
        newAlien.firePower ++;
   }   

        console.log (` Alien hull =${newAlien.hull}`)
             // then its succssesful hit
if (newAlien.hull <= 0  )
    {
        console.log(`Alien destroied successfuly `)
        let continue1 = prompt(' ALIEN destroied ,if you want to continue enter Y')
       if (continue1== null)  ////// user clicked cancel
           { 
             let mmm=  prompt ('game over')
           console.log ('Game over ')
           } 
           else {// target missed and they will attack the space ship 
           alienTurn()        }
       
   }
else 
   {
    let continue3 = prompt('target  missed ,  space ship  will be attacked get ready ')
    alienTurn(myship,fAlien); 
    }
   }

// //========================function Alien attack space ship=========================

function alienTurn(myship,fAlien)
{
if (checking_if_its_successful_hit(myShip))
{
  do
  {
  myShip.hull--
  newAlien.firePower--
  }

  while (myShip.hull ==! 0 ||  newAlien.firePower ==! 0)
  console.log('my hull = '+ myShip.hull)
  console.log(' alien acurracy '+ fAlien.accuracy)
  console.log('space ship accuracy '+ myShip.accuracy)
  if (myShip.hull <= 0) /// space ship destroied
    {
        let continue4 = prompt('YOU ARE DEAD  ')
    }
    else
     {
         let coninue5=prompt('alien missed you , its your turn')
        // i++
         myTurn_Attacking();
    }

}
else 
{
ddd= prompt ('alien could not kill you its space ship turn now')
myTurn_Attacking()
   }
}
 for (let i=0; i < 6 ; i++)   //  ============================= bigger loop over the 6 Aliens============

{
     newAlien[i] = new Alien()   // declaring Alien ship

     if (myShip.accuracy >= fAlien[i].accuracy)
     {
     myTurn()    
     }
    
     else    // here where the alein will attack space ship 

    {
     alienTurn()
    }
}
