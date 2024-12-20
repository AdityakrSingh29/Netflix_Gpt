import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const GptSearchBar = () => {
  const langkey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-9'>
      <input type="text" className='p-4 m-4 col-span-6' placeholder={lang[langkey].gptSearchPlaceHolder}/>
      <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
      {lang[langkey].search}
      </button>
      </form>
    </div>
  )
}

export default GptSearchBar
