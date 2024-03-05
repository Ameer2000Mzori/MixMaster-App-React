import React from 'react'
import NewsLetterForm from './hooks/NewsLetterForm.jsx'
const NewsLetter = () => {
  return (
    <div className="relative flex flex-col text-center items-center justify-center h-[100vh] w-[100vw]">
      <div>
        <NewsLetterForm />
      </div>
      <div className=" absolute bottom-4">
        <h1>all rights are reserved</h1>
      </div>
    </div>
  )
}

export default NewsLetter
