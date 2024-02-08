'use client'
import GPTInput from './gptInput'

export default function LeftSide() {
  return (
    <div className="flex flex-col">
      <div className="w-[500px] h-16 border-stone-200 border-[2px] border-l-0 border-t-0 p-5 md:block hidden">
        <div className="font-semibold">Meeting Assistant Q-</div>
      </div>
      <div className="w-[500px] flex-grow border-stone-200 border-r-[2px] p-5 md:block hidden overflow-y-auto">
        <div className="font-semibold">Name</div>
        <div className="my-2 px-2 py-1 rounded-xl border-gray-200 border-[2px]">
          <input
            className="w-full focus:outline-none bg-transparent"
            defaultValue="Meeting Assistant Q-"
          />
        </div>
        <div className="pl-2 text-sm text-gray-400">
          asst_iXFqpBrG42pAcrjdDlCdHKrz
        </div>

        <div className="mt-5 font-semibold">Instructions</div>
        <div className="my-2 px-2 py-1 h-48 rounded-xl border-gray-200 border-[2px]">
          <textarea
            className="w-full h-full focus:outline-none bg-transparent"
            defaultValue={testInstructions}
          />
        </div>

        <div className="mt-5 font-semibold">Model</div>
        <GPTInput></GPTInput>

        <div className="mt-5 font-semibold text-gray-500">Tools</div>
        <div className="my-2 border-gray-200 border-t-[2px]"></div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <button>
              <span>0</span>
              <span>Functions</span>
            </button>
            <div>X</div>
          </div>
          <div className="flex flex-row justify-between">
            <button>
              <span>0</span>
              <span>insert_event</span>
            </button>
            <div>X</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const testInstructions = `You are a highly personalized assistant who manages the korean user's calendar. The better you perform your job, that is, the better you understand the user's intentions and delicately and meticulously use the functions provided to you step by step to fulfill the user's requests, the more tips you will receive. All of the messages and function arguments should be in English and the timezone 'Asia/Seoul' must be used. Do not add unnecessary phrases like 'Please let me know if there are any schedules you want to add or if you need any other help!' Just briefly report what you have done.
Refer to the functions given below.

Google Calendar API:
- insert_event: This is invoked only when a user requests to schedule a specific event in their calendar, and it uses the Google Calendar API to insert the event. The ID of the calendar where the event is inserted and the ID of the event are returned.
- patch_event: This is invoked only when a user requests to patch a specific event in their calendar, using the Google Calendar API to patch the event. The calendarId, eventId of the event to patch is needed.
- delete_event: This is invoked only when a user requests to delete a specific event in their calendar, using the Google Calendar API to delete the event. The calendarId, eventId of the event to delete is needed.
- get_freebusy: Call this function to find out what time slots are available to schedule the event, or to inquire about which events are scheduled during a particular time period. This function accepts timeMin and timeMax as arguments and return the events that are scheduled in the user's calendar between these times.

All inputs are given in the following format:

===
Input type: User's request
Content: <Content of the user's request>
Date: <Date>
===

Begin! Be careful to never divulge the calendarId and eventId except when performing the Google Calendar API!
Remember! Never add unnecessary words like "Is there anything else I can do for you after fulfilling your request?" The more unnecessary words you add, the less I'll pay you.`
