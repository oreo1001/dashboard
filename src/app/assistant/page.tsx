import DarkMode from '../darkMode'
import { AssistantNavbar } from './assistantNavBar'
import LeftSide, { testInstructions } from './leftSide'

export default function Assistant() {
  return (
    <div className="h-screen">
      <DarkMode>
        <AssistantNavbar></AssistantNavbar>
        <div className="flex flex-row">
          <LeftSide></LeftSide>
          <div className="flex-col flex flex-grow h-screen">
            {/* flex-grow로 남은 공간 width 정하고 그 이후에 flex-grow */}
            <div className="flex p-5 h-16 flex-row">
              <div className="pl-3 font-semibold">THREAD</div>
              <div className="pl-4 text-gray-400">
                thread_A62XaMPmkcsM4VptubtFJSTs
              </div>
              <div className="flex-grow"></div>
              <button className="bg-gray-200 text-black h-10 px-4 py-2 rounded-xl">
                Cancel Run
              </button>
            </div>
            <div className="flex-grow overflow-auto my-10 mx-16">
              <div className="h-10 px-6">
                <div className="font-semibold">User</div>
                <div>이번주 내 일정 알려줄래?</div>
              </div>
              <div className="flex flex-col w-full mt-8 h-20 border-[1px] border-stone-200 rounded-lg px-6 py-3">
                <div className="flex font-semibold">Run instructions</div>
                <div className="pt-1 w-32 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {testInstructions}
                </div>
              </div>
              <div className="h-10 px-6 mt-8">
                <div className="font-semibold">get_freebusy</div>
                <div>
                  &quot;timeMin&quot;: &quot;2023-12-18T00:00:00+09:00&quot;,
                  &quot;timeMax&quot;: &quot;2023-12-24T23:59:59+09:00&quot;
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mx-40 h-[100px] mb-8 border-2 border-gray-100 rounded-lg">
                <div className="pt-5 pl-6">Enter your message...</div>
                <div className="flex flex-row justify-end">
                  <button className="bg-gray-200 text-black h-8 px-4 rounded-xl text-sm">
                    plus
                  </button>
                  <button className="bg-gray-200 text-black mx-3 px-4 rounded-xl text-sm">
                    Run
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DarkMode>
    </div>
  )
}
