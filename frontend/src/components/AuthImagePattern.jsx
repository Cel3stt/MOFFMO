import { Boxes } from 'lucide-react'
import React from 'react'

const AuthImagePattern = ({title, subTitle}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <div className="max-w-md text-center">
            <Boxes/> {/* =============image put here ============= */}
        </div>

        <div>
            <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-base-content/60'>{subTitle}</p>
        </div>

    </div>
  )
}

export default AuthImagePattern
