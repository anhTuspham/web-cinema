import {API_URL} from "../config.js";
const reminder = document.querySelector('.reminder');
const dotenv = require('dotenv');
dotenv.config();
const apikey = process.env.OMDB_API_KEY;

const displayRemindBox = async function(){
    reminder.innerHTML =
       ` <div class="count-box">
            <div class="upper-count-box">
                <h4>Do you want to be reminded?</h4>
                <div class="remind-box">
                    <a href="#" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                        <h5>Remind me</h5>
                    </a>
                </div>
            </div>
            <div class="lower-count-box">
                <div class="timer-segment">
                    <div class="time-segment">
                        <div class="segment-container">
                            <div class="segment">
                                <div class="flip-card" data-days-ten="">
                                    <div class="top">0</div>
                                    <div class="bottom">0</div>
                                </div>
                            </div>
                            <div class="segment">
                                <div class="flip-card" data-days-one="">
                                    <div class="top">2</div>
                                    <div class="bottom">2</div>
                                </div>
                            </div>
                        </div>
                        <div class="timer-title">Days</div>
                    </div>
                    <div class="time-segment">
                        <div class="segment-container">
                            <div class="segment">
                                <div class="flip-card" data-hours-ten="">
                                    <div class="top">0</div>
                                    <div class="bottom">0</div>
                                </div>
                            </div>
                            <div class="segment">
                                <div class="flip-card" data-hours-one="">
                                    <div class="top">0</div>
                                    <div class="bottom">0</div>
                                </div>
                            </div>
                        </div>
                        <div class="timer-title">Hours</div>
                    </div>
                    <div class="time-segment">
                        <div class="segment-container">
                            <div class="segment">
                                <div class="flip-card" data-minutes-ten="">
                                    <div class="top">0</div>
                                    <div class="bottom">0</div>
                                </div>
                            </div>
                            <div class="segment">
                                <div class="flip-card" data-minutes-one="">
                                    <div class="top">0</div>
                                    <div class="bottom">0</div>
                                </div>
                            </div>
                        </div>
                        <div class="timer-title">Minutes</div>
                    </div>
                </div>
            </div>
        </div>`
}
displayRemindBox()
