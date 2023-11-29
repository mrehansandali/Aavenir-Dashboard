import "./ListItems.css"
import React, { useEffect, useRef } from 'react';

export function DashboardLi() {

    useEffect(() => {
        const addTransitionEffect = () => {
            const progressBars = document.querySelectorAll('.types-progress-bar-inner');

            progressBars.forEach((bar) => {
                const width = bar.parentElement.previousElementSibling.lastChild.innerText;
                bar.style.width = width;
            });
        };

        addTransitionEffect();
    }, []);

    ///////////////////////////////////

    const progressRef1 = useRef(null);
    const progressRef2 = useRef(null);
    const progressRef3 = useRef(null);
    const progressRef4 = useRef(null);

    useEffect(() => {
        const fillElement1 = progressRef1.current;
        const fillElement2 = progressRef2.current;
        const fillElement3 = progressRef3.current;
        const fillElement4 = progressRef4.current;
        fillElement1.style.transition = 'height 1s';
        fillElement2.style.transition = 'height 1s';
        fillElement3.style.transition = 'height 1s';
        fillElement4.style.transition = 'height 1s';

        fillElement1.style.height = '0';
        fillElement2.style.height = '0';
        fillElement3.style.height = '0';
        fillElement4.style.height = '0';

        setTimeout(() => {
            fillElement1.style.height = '35%';
            fillElement2.style.height = '90%';
            fillElement3.style.height = '55%';
            fillElement4.style.height = '22%';
        }, 100);
        return () => {
            fillElement1.style.transition = '';
            fillElement2.style.transition = '';
            fillElement3.style.transition = '';
            fillElement4.style.transition = '';
        };
    }, []);

    ////////////////////////////////

    const progressRef = useRef(null);

    useEffect(() => {
        const progressElement = progressRef.current;
        progressElement.style.transition = 'transform 1s';

        progressElement.style.transform = 'rotate(0deg) scale(0)';

        setTimeout(() => {
            const percentage = parseInt(progressElement.getAttribute('aria-valuenow'));
            const rotation = (percentage / 100) * 480;

            progressElement.style.transform = `rotate(${rotation}deg) scale(1)`;
        }, 100);

        return () => {
            progressElement.style.transition = '';
        };
    }, []);


    return (
        <>

            <div className="dashboardli">



                <div className="container">
                    <div className="card">
                        <div className="card-heading">
                            <div style={{ backgroundColor: "rgb(35, 170, 242)" }} className="dot"></div>
                            <h2>Accepted</h2>
                        </div>
                        <div className="count-animation"><h1>2,583</h1></div>
                    </div>
                    <div className="card">
                        <div className="card-heading">
                            <div style={{ backgroundColor: "rgb(255, 204, 41)" }} className="dot"></div>
                            <h2>In Contract</h2>
                        </div>
                        <div className="count-animation"><h1>1,639</h1></div>
                    </div>
                    <div className="card">
                        <div className="card-heading">
                            <div style={{ backgroundColor: "rgb(245, 134, 52)" }} className="dot"></div>
                            <h2>In Approval</h2>
                        </div>
                        <div className="count-animation"><h1>1,486</h1></div>
                    </div>
                </div>


                <div className="types">
                    <h2>Contract By Types</h2>
                    <div className="types-progress">
                        <div className="text">
                            <h4>NDA</h4>
                            <h4>70%</h4>
                        </div>
                        <div className="types-progress-bar">
                            <div className="types-progress-bar-inner nda"></div>
                        </div>
                    </div>
                    <div className="types-progress">
                        <div className="text">
                            <h4>Insurance</h4>
                            <h4>25%</h4>
                        </div>
                        <div className="types-progress-bar">
                            <div className="types-progress-bar-inner insurance"></div>
                        </div>
                    </div>
                    <div className="types-progress">
                        <div className="text">
                            <h4>Lease</h4>
                            <h4>50%</h4>
                        </div>
                        <div className="types-progress-bar">
                            <div className="types-progress-bar-inner lease"></div>
                        </div>
                    </div>
                    <div className="types-progress">
                        <div className="text">
                            <h4>Maintenance</h4>
                            <h4>63%</h4>
                        </div>
                        <div className="types-progress-bar">
                            <div className="types-progress-bar-inner maintenance"></div>
                        </div>
                    </div>
                    <div className="types-progress">
                        <div className="text">
                            <h4>Purchase Agreement</h4>
                            <h4>12%</h4>
                        </div>
                        <div className="types-progress-bar">
                            <div className="types-progress-bar-inner purchase"></div>
                        </div>
                    </div>
                    <div className="types-progress">
                        <div className="text">
                            <h4>Sale</h4>
                            <h4>17%</h4>
                        </div>
                        <div className="types-progress-bar">
                            <div className="types-progress-bar-inner sale"></div>
                        </div>
                    </div>
                </div>


                <div className="contract">


                    <div className="contract-stages">
                        <h2>Contract Stages</h2>
                        <div className="contract-stages-inner">
                            <div className="progress-bar">
                                <div className="bar">
                                    <div className="fill" style={{ height: '35%', backgroundColor: "rgb(0, 175, 145)" }} ref={progressRef1}></div>
                                </div>
                                <h3>Active</h3>
                            </div>
                            <div className="progress-bar">
                                <div className="bar">
                                    <div className="fill" style={{ height: '90%', backgroundColor: "rgb(0, 121, 101)" }} ref={progressRef2}></div>
                                </div>
                                <h3>Draft</h3>
                            </div>
                            <div className="progress-bar">
                                <div className="bar">
                                    <div className="fill" style={{ height: '55%', backgroundColor: "rgb(245, 134, 52)" }} ref={progressRef3}></div>
                                </div>
                                <h3>Expired</h3>
                            </div>
                            <div className="progress-bar">
                                <div className="bar">
                                    <div className="fill" style={{ height: '22%', backgroundColor: "rgb(196, 73, 73)" }} ref={progressRef4}></div>
                                </div>
                                <h3>Cancelled</h3>
                            </div>
                        </div>
                    </div>


                    <div className="contract-expiring-outer">
                        <h2>Contract Expiring</h2>
                        <div className="contract-expiring">
                            <div className="progress-bara" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ref={progressRef}></div>
                            <div className="ce-line">
                                <div className="card-heading1">
                                    <div style={{ backgroundColor: "rgb(0, 175, 145)" }} className="dot"></div>
                                    <h3>Within 60 Days</h3>
                                </div>
                                <div className="card-heading1">
                                    <div style={{ backgroundColor: "rgb(255, 204, 41)" }} className="dot"></div>
                                    <h3>Within 30 Days</h3>
                                </div>
                                <div className="card-heading1">
                                    <div style={{ backgroundColor: "rgb(245, 134, 52)" }} className="dot"></div>
                                    <h3>Expired</h3>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <table className="table">
                    <thead>
                    <h2>My Contracts</h2>
                        <tr>
                            <th>Serial #</th>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CNTK7863478</td>
                            <td>John Doe</td>
                            <td>100</td>
                            <td>
                                <button className="status-button active">Active</button>
                            </td>
                        </tr>
                        <tr>
                            <td>CNTY7836496</td>
                            <td>Jane Smith</td>
                            <td>200</td>
                            <td>
                                <button className="status-button inactive">Inactive</button>
                            </td>
                        </tr>
                        <tr>
                            <td>CNTK7863478</td>
                            <td>John Doe</td>
                            <td>100</td>
                            <td>
                                <button className="status-button active">Active</button>
                            </td>
                        </tr>
                        <tr>                        
                            <td>CNTR9834797</td>
                            <td>Mike Johnson</td>
                            <td>150</td>
                            <td>
                                <button className="status-button inactive">Inactive</button>
                            </td>
                        </tr>
                        <tr>
                            <td>CNTK7863478</td>
                            <td>John Doe</td>
                            <td>100</td>
                            <td>
                                <button className="status-button active">Active</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export function Farm() {
    return (
        <>
            Farm
        </>
    )
}

export function Boardroom() {
    return (
        <>
            Boardroom
        </>
    )
}

export function Bond() {
    return (
        <>
            Bond
        </>
    )
}

export function Referral() {
    return (
        <>
            Referral
        </>
    )
}

export function Portfolio() {
    return (
        <>
            Portfolio
        </>
    )
}