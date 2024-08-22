import React from 'react'
import { TbCloudLock } from 'react-icons/tb';


interface UserFormLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const UserFormLayout = ({ children, title }: UserFormLayoutProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-xl space-y-8 px-4 py-4 bg-white text-gray-600 shadow-xl rounded-lg">
                <div className="flex flex-col items-center text-center">
                    <div>
                        <div className='grid place-items-center '>
                            <TbCloudLock   className='text-6xl text-blue-900' />
                            <p
                                className="text-gray-800 text-2xl font-bold sm:text-3xl"
                            >
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                {children}
            </div>
        </div>
    )
}
