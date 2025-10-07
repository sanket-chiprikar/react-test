const Listing = () => {

  const students = [

    {
      name: "Ramesh",
      age: "20",
      result: "pass"
    },

    {
      name: "suresh",
      age: "21",
      result: "Fail"
    },

    {
      name: "Rajesh",
      age: "23",
      result: "Pass"
    }


  ]


  

  return (
    <div> 
          <h1>Listing</h1>
          {
            students.map(({name,age,result}) => (
              <ul key={Math.random()}>
                <li>{name}</li>
                <li>{age}</li>
                <li>{result}</li>
              </ul>

            ))
          }


    </div>
    
)

}

export default Listing 