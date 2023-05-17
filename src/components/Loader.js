import React from 'react'

const Loader = ({ title }) => {
  	return (
    	<section className='flex flex-col items-center justify-center w-full h-full'>
			<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "#fff0", display: "block", }} width="230px" height="230px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
				<path fill="none" stroke="#0ed3cf" strokeWidth={8} strokeDasharray="146.25568908691406 110.33323913574219" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round" style={{transform: "scale(0.7)", transformOrigin: "50px 50px",}}>
					<animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="0.6756756756756757s" keyTimes="0;1" values="0;256.58892822265625" />
				</path>
			</svg>
			<h1 className='font-bold text-2xl text-white'>{title || "Loading..."}</h1>
    	</section>
  	)
}

export default Loader