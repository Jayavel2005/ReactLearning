import Student from "./Students.jsx"

function App() {
  

  return (
    <>
      <Student name="SpongeBob" age={19} isStudent={true}/>
      <Student name="Patricks" age={16} isStudent={false}/>
      <Student name="Squidward" age={45} isStudent={true}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/>

    </>
  )
}

export default App
