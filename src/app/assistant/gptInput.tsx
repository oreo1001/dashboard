import { useState } from 'react'
import useClickOutside from './useClickOustide'
import { HiChevronUpDown } from 'react-icons/hi2'
import { TbCircleX } from 'react-icons/tb'

const GPTInput = () => {
  const gptList = [
    'gpt-4-turbo-preview',
    'gpt-4-1106-preview',
    'gpt-4-0613',
    'gpt-4-0125-preview',
    'gpt-4',
    'gpt-3.5-turbo-16k-0613',
    'gpt-3.5-turbo-16k',
    'gpt-3.5-turbo-1106',
    'gpt-3.5-turbo-0613',
    'gpt-3.5-turbo-0125',
    'gpt-3.5-turbo',
  ] // 목록 항목
  const [searchTerm, setSearchTerm] = useState('gpt-3.5-turbo-0613')

  const [isFocused, setIsFocused] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleClickOutside = () => {
    if (isFocused && !showContent) {
      setIsFocused(false)
      setShowContent(false)
    }
    if (showContent) {
      setShowContent(false)
    }
  }

  const wrapperRef = useClickOutside<HTMLDivElement>(handleClickOutside)
  const handleFocus = () => {
    setIsFocused(true)
    setShowContent(true)
  }

  const clearInput = () => {
    setSearchTerm('')
  }

  const filterData = () => {
    if (searchTerm === '') return gptList
    const filteredData = gptList.filter((data) => data.includes(searchTerm))
    return filteredData
  }

  const searchResults = filterData()
  const handleClickInside = (e: any) => {
    e.stopPropagation()
  }

  return (
    <div ref={wrapperRef} className="bg-white rounded-xl">
      <div
        className={`flex flex-row my-2 px-2 py-1 rounded-md border-gray-200 border-[2px]`}
      >
        <input
          type="text"
          className="w-full focus:outline-none bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onClick={handleClickInside}
          onBlur={() => setIsFocused(false)}
        />
        {searchTerm !== '' ? (
          <TbCircleX
            className="text-stone-500 w-5 h-5 mt-0.5"
            onClick={clearInput}
          />
        ) : (
          <HiChevronUpDown className="text-stone-500 mt-0.5 w-5 h-5" />
        )}
      </div>
      <div>
        {showContent && (
          <div className="">
            <div className="p-1 mt-1 overflow-y-auto max-h-[300px] cursor-pointer border-[1px] rounded-md">
              <div className="p-2 pb-1 text-sm font-semibold">CHAT</div>

              {searchResults.map((item, index) => {
                if (searchResults.length == 0)
                  return (
                    <div
                      className="flex p-2 "
                      key={index}
                      onClick={() => {
                        setIsFocused(false)
                      }}
                    >
                      <div className="text-sm text-stone-600">No Options</div>
                      <div className="flex-grow"></div>
                    </div>
                  )
                else
                  return (
                    <div
                      className="flex p-2 "
                      key={index}
                      onClick={() => {
                        setSearchTerm(item)
                        setIsFocused(false)
                        setShowContent(false)
                      }}
                    >
                      <div className="text-sm text-stone-600">{item}</div>
                      <div className="flex-grow"></div>
                    </div>
                  )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GPTInput
