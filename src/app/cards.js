'use client'

import {motion} from 'framer-motion'
import chicken from '../app/assets/chicken.jpg'
import chickencensored from '../app/assets/chickencensored.jpg'

import doctor from '../app/assets/doctor.jpg'
import doctorexplicit from '../app/assets/doctorexplicit.jpg'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Label, Switch } from '@headlessui/react'
import { Button } from '@/components/Button'

export default function ScrollTriggered() {
    const [isModalOpen,setIsModalOpen] = useState(false)
    return (
        <>
         <div style={container}>
            {food.map(([emoji,censoredemoji, hueA, hueB,question,answer,answerCensored], i) => (
                <Card setIsModalOpen={setIsModalOpen} i={i} emoji={emoji} censoredemoji={censoredemoji} hueA={hueA} hueB={hueB} key={emoji} question={question} answer={answer} answerCensored={answerCensored} />
            ))}
        </div>
            <Dialog open={isModalOpen} onClose={setIsModalOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            
            <div>
             
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  Join the waiting list and be the first to know when these jokes get released!
                </DialogTitle>
                <div className="mt-2 flex items-center justify-evenly mx-auto w-[240px]">

            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full px-4 py-2 text-base text-zinc-700 placeholder:text-zinc/70 focus:outline-hidden sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-zinc/20 peer-focus:ring-1  sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Join
              </Button>
            </div>

                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-center w-full">
          
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
        </>
       
    )
}

function Card({ emoji, hueA, hueB, i, question, censoredemoji, setIsModalOpen, answer }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`
    const [isCensored,setIsCensored] = useState(false)
    const [revealedIndex, setRevealedIndex] = useState(-1)
    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                <div className='relative'>
                <Field className="flex items-center my-2 top-0 absolute left-[20px] z-50">
                            <Switch
                                checked={isCensored}
                                onChange={(e) => {

                                    setIsCensored(e)
                                    setRevealedIndex(-1)
                                }}
                                className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                            >
                                <span className="sr-only">{"Censored"}</span>
                                <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-sky-600"
                                />
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                                />
                            </Switch>
                            <Label as="span" className="ml-3 text-sm">
                                <span className="font-medium text-gray-900">Censored</span>
                                {/* <span className="text-gray-500">(Save 10%)</span> */}
                            </Label>
                        </Field>
                    <img className={isCensored ? 'blur-sm mt-12' : 'mt-12'} src={isCensored ? censoredemoji.src : emoji.src} />
                  <div className='top-1/2 absolute'>
                  {!isCensored && <p className='text-center text-lg text-white bg-zinc-800/70 p-4'>{revealedIndex === i ? answer : question}</p>}
                  <div className={['flex w-full min-w-[300px] justify-evenly my-4',isCensored ? 'justify-center' : 'justify-evenly'].join(' ')}>
                {(isCensored || (!isCensored && i !==revealedIndex) )&&  <button
                onClick={()=>{
                    if(isCensored) {
                        setIsModalOpen(true)
                    } else setRevealedIndex(i)
                   }}
        type="button"
        className="mr-3 rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        {isCensored ? 'Reveal' : 'Reveal punchline'}
      </button>}
     
      </div>
                  </div>
                  
                {/* {emoji} */}

                </div>
             
            </motion.div>
        </motion.div>
    )
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -20,
}

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    // alignItems: "top",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const food = [
    [chicken,chickencensored, 340, 10, 'Why did the chicken cross the road?','To bok traffic'],
    // ["🍊", 20, 40, 'A wise doctor once wrote...'],
    // ["🍋", 60, 90, 'What happens to an illegaly parked frog?', 'It gets toad anyway.'],
    // ["🍐", 80, 120, 'Why did the leaf go to the doctor?','It had a bad fall'],
    [doctor,doctorexplicit, 100, 140, 'The doctor said he would have me on my feet in 2 weeks. And did he?','Yes, I had to sell the car to pay the bill.'],
    // ["🫐", 205, 245, ''],
    // ["🍆", 260, 290, ''],
    // ["🍇", 290, 320, ''],
]
