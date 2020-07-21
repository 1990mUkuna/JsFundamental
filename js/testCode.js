  const myName = "Mukuna";


// 1. Using a simple try/catch statement
try{
    if(myName === "Mukuna")
    {
        alert('This is your Real Name')
    }
}
catch(error){
    console.log(error)
    console.log("End of try catch block")
} 

// 2. Using try/throw/catch statements
try{
    if(myName === "Pregos")
    {
        alert('This is your Real Name')
    }
    throw new Error ('This is an error, the correct name is Mukuna ')
  }
  catch(error){
    console.log(error)
    console.log("End of try-catch block")
  }

  // 3. Using try/catch/throw/finally all together
  try{
    if(myName === "Pregos")
    {
        alert('This is your Real Name')
    }
    throw new Error ('This is an error, the correct name is Mukuna ')
  
  }
  catch(error){
    console.log("Error has been handled")
  }
  finally{
    console.log("Please contact suport")
  }

