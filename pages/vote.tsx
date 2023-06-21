import React from 'react';

const vote = () => {
    return (
        <div>
            <div>
                <div>
                    <p>
                        Issue 1: To receive, consider and if approved, adopt the Company’s audited Financial Statements for the period ended
                        31st December 2021 together with the Directors’ and Auditors’ Reports thereon.
                    </p>
                    <form>
                        <p>
                            “THAT the audited Financial Statements including the Balance Sheet for the year ended 31st December
                            2021, together with the Directors’ and Auditors’ Reports thereon be and are hereby approved and adopted”.
                        </p>
                        <input type="radio" name="color" value="pink"/>Yes
                        <input type="radio" name="color" value="pink"/>No
                        <input type="submit" value="submit"/>  
                    </form>
                </div>
                <div>
                    <p>
                        Issue 2: To approve the Directors’ Remuneration Report for the period ended 31st December 2021.
                    </p>
                    <form action="">
                        <p>
                            “THAT the Directors’ Remuneration for the year ended 31st December 2021 as contained in the Annual
                            Report and Financial Statements be and is hereby approved”.
                        </p>
                        <input type="radio" name="color" value="pink"/>Yes
                        <input type="radio" name="color" value="pink"/>No
                        <input type="submit" value="submit"/>
                    </form>
                </div>
                <div>
                    <p>
                        Issue 3: To elect Directors:
                    </p>
                    <div>
                        <div>
                            <p>Director 1</p>
                            <div>
                                <p>Mr. Michael Joseph Retires and Offers himself for Re-Election</p>
                                <img src="./candidate-1.jpg" alt="Michael Joseph" width={100} height={100}/>
                                <input type="radio" name="color" value="pink"/>Re-Elect
                                <input type="radio" name="color" value="pink"/>Do Not Re-Elect
                                <input type="submit" value="submit"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Director 2</p>
                            <div>
                                <p>Mr. John Ngumi Retires and Offers himself for Re-Election</p>
                                <img src="./candidate-1.jpg" alt="Michael Joseph" width={100} height={100}/>
                                <input type="radio" name="color" value="pink"/>Re-Elect
                                <input type="radio" name="color" value="pink"/>Do Not Re-Elect
                                <input type="submit" value="submit"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Director 2</p>
                            <p>Ms. Esther Koimmet Retires and Does not Offer herself for Re-Election</p>
                            <p>Mr. Michael Orina and Ms. Winnie Nyanchoka have been shortlisted for the Position</p>
                            <div>
                                <img src="" alt="" />
                                <p>Mr. Michael Orina</p>
                                <button>Elect</button>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p>Ms. Winnie Nyanchoka</p>
                                <button>Elect</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Director 4</p>
                            <div>
                                <p>Mr. Angus John Clarke Retires and Offers himself for Re-Election</p>
                                <img src="./candidate-1.jpg" alt="Michael Joseph" width={100} height={100}/>
                                <input type="radio" name="color" value="pink"/>Re-Elect
                                <input type="radio" name="color" value="pink"/>Do Not Re-Elect
                                <input type="submit" value="submit"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        Issue 4: To Appoint Members of the Audit and Risk Committee
                    </p>
                </div>
                <div>
                    <p>
                        Issue 5:
                    </p>
                    <form action="">
                        <p>
                            To appoint M/s. PricewaterhouseCoopers as Auditors of the Company to hold offi ce until the conclusion of
                            the next Annual General Meeting and authorise the Directors to fix their remuneration.
                        </p>
                        <input type="radio" name="color" value="pink"/>Yes
                        <input type="radio" name="color" value="pink"/>No
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default vote;