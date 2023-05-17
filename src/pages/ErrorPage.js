import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <div className="min-h-screen max-h-screen md:flex overflow-y-hidden lg:px-20 px-10">
            <div className="flex items-center justify-center w-full py-10 bg-white md:w-1/2">
                <div className="max-w-[35rem] flex flex-col lg:items-start items-center justify-center">
                    <div className="text-5xl font-black text-secondary md:text-8xl">404</div>
                    <div className="w-full max-w-[200px] h-1 my-3 bg-primary md:my-6"></div>
                    <p className="text-2xl lg:text-left text-center font-light leading-normal text-gray-600 md:text-3xl">Error : The page that you have requested is not found on the server.</p>
                    <a href="/" className=''>
                        <button className="px-4 py-2 mt-5 text-lg bg-primary text-white transition-all duration-300 transform border rounded-lg hover:translate-x-2 !outline-none">Go Home</button>
                    </a>
                </div>
            </div>
            <div className="relative w-full pb-full md:flex md:pb-0 md:min-h-screen md:w-1/2">
                <div className="flex items-center w-full h-full max-w-4xl mx-auto">
                    <img className="lg:object-cover object-fill w-full" src="/images/error-img.svg" alt="Error" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage