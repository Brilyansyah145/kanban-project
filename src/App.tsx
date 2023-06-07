import React from 'react'

const App = (): JSX.Element => {
  const text:string = "hello"    // spasi yang tidak perlu dan tanda kutip ganda
  const text2:string = 'progate' // tanda kutip tunggal

  if(text == "hello") { // Tidak ada spasi setelah if
    console.log(text)
  }

  const hello = (name: string): void => {
      console.log('hi', name) // 4 indentasi
  }

  const numbers = [1, 2, 3] // Tidak ada spasi antar element array

  return (
    <div>
      <h1>Hello Progate</h1>
    </div>
  )
}

const hello = (name: string, name2: string, name3: string, name4: string, name5: string): void => {
  console.log(name, name2, name3, name4, name5)
} 

export default App