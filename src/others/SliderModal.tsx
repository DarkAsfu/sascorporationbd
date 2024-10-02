// @ts-nocheck

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai' // Import close icon

type ImageModalProps = {
  item: any
  uniqueId: string
  itemArr: any
}

const SliderModal: React.FC<ImageModalProps> = ({
  item,
  uniqueId,
  itemArr,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [newItem, setNewItem] = useState(item)

  useEffect(() => {
    if (isOpen) {
      // Disable scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Enable scroll when modal is closed
      document.body.style.overflow = 'auto'
    }

    return () => {
      // Cleanup on unmount to avoid side effects
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <motion.div
        onClick={() => {
          setIsOpen(true)
          setNewItem(item)
        }}
        layoutId={uniqueId}
        className="overflow-hidden mb-3"
      >
        <img
          width={400}
          height={400}
          src={item?.picture}
          className="bg-white text-black rounded-md w-full cursor-zoom-in"
          alt="img"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 top-0 left-0  right-0 bottom-0  flex flex-col items-center w-full h-screen justify-center dark:bg-black/80 bg-white/80 backdrop-blur-lg cursor-zoom-out"
            onClick={() => {
              setNewItem(null)
              setIsOpen(false)
            }}
          >
            <motion.div
              layoutId={uniqueId}
              className="relative rounded-md w-fit h-[80%] flex gap-2 items-center mx-auto cursor-auto "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close icon */}
              <AiOutlineClose
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-3xl cursor-pointer z-30 text-[#222222]"
              />
              
              {newItem && (
                <AnimatePresence>
                  {itemArr.map((tab: any) => (
                    <>
                      {tab.id === newItem.id && (
                        <motion.figure
                          key={tab?.id}
                          className="dark:bg-gray-900/40 bg-gray-100/40 border  rounded-md p-4"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                          >
                            <img
                              src={newItem.picture}
                              width={1000}
                              height={1000}
                              alt="preview_img"
                              className="object-contain h-[70vh] mx-auto rounded-md"
                            />
                          </motion.div>
                        </motion.figure>
                      )}
                    </>
                  ))}
                </AnimatePresence>
              )}

              <div className="flex flex-col mt-2 justify-center dark:bg-gray-900/40 bg-gray-100/40 border rounded-md overflow-y-auto h-[40vh] scrollbar-hide">
                {itemArr?.map((itemData, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-2`}
                    onClick={() => setNewItem(itemData)}
                  >
                    <img
                      src={itemData?.picture}
                      width={400}
                      height={400}
                      alt="img"
                      className="w-28 h-16 object-cover cursor-pointer relative z-[2] rounded-md"
                    />
                    {itemData?.id === newItem?.id && (
                      <motion.div
                        layoutId="slider"
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: 'easeOut',
                          },
                        }}
                        className="absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md"
                      ></motion.div>
                    )}
                    {itemData?.id === newItem?.id && (
                      <motion.div
                        layoutId="slider2"
                        transition={{
                          layout: {
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: 0.1,
                          },
                        }}
                        className="absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md "
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SliderModal
