import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function Prompt() {
    const [isChatVisible, setChatVisibility] = useState(false);

    const handleButtonClick = () => {
        setChatVisibility(!isChatVisible);
    };
    return (
        <form className=" justify-end w-[10px] h-[10px]">
            <fieldset>
                <ol style={{ position: 'relative' }}>
                    <li>
                        <div onClick={handleButtonClick} className="bg-purple-200 bg-opacity-100 w-[30px] h-[30px] text-purple-900 rounded-lg justify-center flex items-center relative">
                            <FontAwesomeIcon icon={faPencil} className="w-[22px] h-[22px]" />
                        </div>
                    </li>
                    {isChatVisible && (
                        <li style={{ position: 'absolute', top: '-130px', left: '-180px' }}>
                            <div className="">
                                <textarea type="text" placeholder='Ask Something here' rows="4" cols="30" className='border-2 border-purple-900 text-center' />
                            </div>
                        </li>
                    )}
                </ol>
            </fieldset>

        </form>
    )
}

export default Prompt