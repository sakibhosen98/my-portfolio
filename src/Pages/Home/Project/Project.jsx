
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className='my-5 lg:mx-20 md:mx-5'>

            <h1 className='text-3xl text-center mb-10'>MY BEST WORKS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5">

                <div className='relative '>
                    <div className=''>
                        <img src="https://www.linkpicture.com/q/CarToy.png" alt="CarToy" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black' ></div>
                    <div className="absolute flex inset-0 justify-center gap-10 transform -translate-y-1/2 w-2/5 left-24 top-3/4" >
                        <Link to='https://car-toys-2f072.web.app/?fbclid=IwAR3SOYdpvZI-wSkoWbvBk_wLfc7KTyKCx-sKHqXWG1CL35Q3wO1nzzCSOVo' target='_blink' className="btn ">Live</Link>
                        <Link className="btn btn-neutral ">Client</Link>
                        <Link className="btn btn-neutral ">Server</Link>
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src="https://www.linkpicture.com/q/sportsAcademic.png" alt="SportsAcademic" />

                    </div>
                    <div className="absolute flex justify-center gap-10 transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                        <Link to='https://sports-academies-1aee3.web.app/?fbclid=IwAR1qMQWeejUncDfpVdL77jMy8QfQxXSrlNrmNEoTLJi1SD5op1dVi97bdAo' target='_blink' className="btn ">Live</Link>
                        <Link className="btn btn-neutral ">Client</Link>
                        <Link className="btn btn-neutral ">Server</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Project;