'use client'

import { IShowMoreProps } from '@/types'
import CustomButton from './CustomButton'

const ShowMore = ({ pageNumber, isNext, setLimit }: IShowMoreProps) => {
  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10

    setLimit(newLimit)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore

// 'use client'

// import { useRouter } from 'next/navigation'

// import { IShowMoreProps } from '@/types'
// import { updateSearchParams } from '@/utils'
// import CustomButton from './CustomButton'

// const ShowMore = ({ pageNumber, isNext }: IShowMoreProps) => {
//   const router = useRouter()

//   const handleNavigation = () => {
//     // Рассчитать новый лимит на основе номера страницы и типа навигации
//     const newLimit = (pageNumber + 1) * 10

//     // Обновите параметр поиска «limit» в URL-адресе, указав новое значение.
//     const newPathname = updateSearchParams('limit', `${newLimit}`)

//     router.push(newPathname)
//   }

//   return (
//     <div className="w-full flex-center gap-5 mt-10">
//       {!isNext && (
//         <CustomButton
//           btnType="button"
//           title="Show More"
//           containerStyles="bg-primary-blue rounded-full text-white"
//           handleClick={handleNavigation}
//         />
//       )}
//     </div>
//   )
// }

// export default ShowMore
