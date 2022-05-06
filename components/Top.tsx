import { useState, FC, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { IoArrowUp } from 'react-icons/io5'

const BackToTop: FC = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className='flex justify-center items-center p-5 bottom-8 right-8 text-xl rounded-full cursor-pointer bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900 fixed'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <IoArrowUp size={24} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
