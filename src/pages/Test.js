import '../styles/test.css';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { useEffect, useState } from 'react';


export const TestPage = () => {
    const [date, setDate] = useState(1);


    return (
        <>
            <div className="test-page">
                <Nav />
                <FixedLinks />
                <div className="button-test-container-wrapper">
                    <div>
                        <button onClick={() => {setDate(1)}}>June 17th</button>
                        <button onClick={() => {setDate(2)}}>June 24th</button>
                    </div>
                    <div className='test-container'>
                        <div className="speakers">
                                {date === 1 ?
                                    <>
                                        <p>June 17th</p>
                                        <p>
                                            Keynote Address<br/>
                                            <span style={{'font-family': '`Abhaya Libre`, serif'}}>
                                                Heather Van
                                            </span>
                                        </p>
                                        <p>
                                            Breakout Session Speakers <br/>
                                            <span style={{'font-family': '`Abhaya Libre`, serif'}}>
                                                Lyndy Barnard<br/>
                                                Devrie Pettit<br/>
                                                Julie Newbry<br/> 
                                            </span> 
                                        </p>
                                    </>
                                    
                                :   
                                    <>
                                        <p>June 24th</p>
                                        <p>
                                            Keynote Address<br/>
                                            <span style={{'font-family': 'Abhaya Libre'}}>
                                                Corinne Hannan
                                            </span>
                                        </p>
                                        <p>
                                            Breakout Session Speakers<br/>
                                            <span style={{'font-family': 'Abhaya Libre'}}>
                                                Kelsie Jepsen<br/>
                                                Lauren Bishop<br/>
                                                Ariel Hortin
                                            </span>
                                        </p>
                                    </>
                                }
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}