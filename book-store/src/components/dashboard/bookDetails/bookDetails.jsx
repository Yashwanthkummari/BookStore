import React from "react";
import './bookDetails.css'
import ram from '../../images/Ram.jpeg'
import { Avatar } from "@mui/material";

function BookDetails() {
    return (
        <div className="BDConatiner" >
            <div className="home">
                Home/Book(01)
            </div>
            <div className="BDContainer1">
                <div className="BDContainer2">
                    <div className='BDetailsimage'>

                        <div className="BDetailsImage1"><img id='BDetailsImage1' src={ram} alt="lordram" /></div>
                        <div className="BDetailsImage2"><img id='BDetailsImage2' src={ram} alt="lordram" /></div>


                    </div>
                    <div className='BDetailsimage3'>
                        <div className="BDetailsImage4"><img id='BDetailsImage1' src={ram} alt="lordram" /></div>
                        {/* <div className="BDButtons"> hi</div> */}
                        <div className="BDButtons">
                            <div className="BDButtons1"> <button id="BDButton" Variant="contained">Add to bag</button></div>
                            <div className="BDButtons1">   <button id="BDButton1" Variant="contained">  &#x2665; WishList</button></div>

                        </div>

                    </div>
                

                </div>
                <div className="picture">
                    <div className="picture1">
                        <div className='btitle'>Ramayanam</div>
                        <div className='bauthor'> by Valmiki</div>

                        <div className='bdetails'>

                            <div className='bratingdetails'>
                                <div className='brating'>4.5 &#9733; </div>
                                <div className='bratingcount'>(20)</div>
                            </div>
                            <div className='bprice'>
                                <div className='bdiscountprice' >Rs1500</div>
                                <div className='bMRP' >Rs3000</div>

                            </div>

                        </div>

                    </div>
                    <hr></hr>
                    <div className="bookdetaills">
                        <div className="bookdetaills1"> &#x2022; Bookdetail</div>

                        <div >
                            <p>The Ramayana  is a Sanskrit epic from ancient India, one of the two important epics of Hinduism, the other being the Mahābhārata.Together, they form the core of Hindu mythology. The epic, traditionally ascribed to the Maharishi Valmiki, narrates the life of Rama, a prince of Ayodhya in the kingdom of Kosala.
                            </p>
                        </div>


                    </div>
                    <div className="feedback">
                        <div className="feedback1">
                            <div className="custfeedback" >
                                Customer Feedback
                            </div>
                            <div className="reviewww">
                                <div className="reviewww1">
                                    <div className="customerrating">
                                        <div className="ovlr">overallrating</div>
                                        <div className="star">&#10027; &#10027; &#10027; &#10027; &#10027;</div>
                                    </div>
                                    <div className="reviewtext"><input className="cwry" placeholder="write your review"></input></div>
                                    <div className="BDButt"> <button id="BDButtn" Variant="contained">Submit</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="avatar">
                            <div><Avatar>YK</Avatar></div>

                            <div>
                                <div className="crdetails">
                                    <div className="crdetails1">YashwanthKummari</div>
                                    <div className="sppan"><span className="star">&#9733;</span> <span className="star">&#9733;</span> <span className="star">&#9733;</span> <span>&#10027;</span> <span >&#10027;</span></div>

                                    <div className="wreview">
                                        <p>For most of us, this is a known story. The story narration is not so creative like other epic re-reading books, as this book was Transulated from the original book and no re-written to the modern age.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="avatar">
                            <div><Avatar>AK</Avatar></div>

                            <div>
                                <div className="crdetails">
                                    <div className="crdetails1">ArunKummari</div>
                                    <div className="sppan"><span className="star">&#9733;</span> <span className="star">&#9733;</span> <span className="star">&#9733;</span> <span className="star">&#9733;</span> <span >&#10027;</span></div>

                                    <div className="wreview">
                                        <p>The Rama story has been around for a long time. It has been a part of people's life and thought for generations in this country. An inspiration for both saints and savants over the ages, its longstanding and continued appeal for common folk too has been no less clear to many observers of this land. Its spread has also been documented by eminent scholars in modern times.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default BookDetails