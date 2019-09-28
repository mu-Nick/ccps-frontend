import React from 'react'

const Header = () => {
    return (
        <header className='bg-white black-80 tc pv4 avenir'>
            <div className='flex justify-center'>
                {/* <img
					src='https://nitkkr.ac.in/docs/NITKKR_logo.png'
					className='br3 ba b--black-10 h3 w3'
					alt='avatar'
				/> */}
                <div>
                    <h1 className='f5 f4-ns fw6 black-70'>National Institute of Technology</h1>
                    <h2 className='f6 black-70 fw2 ttu tracked'>Kurukshetra</h2>
                </div>
            </div>
        </header>
    )
}

export default Header
