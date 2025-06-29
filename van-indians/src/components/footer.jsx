import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <aside>
                    Website created by <a onClick={() => window.open("https://www.prateekbalani.com")} className='cursor-pointer'><u>Prateek Balani</u></a>
                </aside>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <HashLink smooth to="/#whatsapp">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51h-.57c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zM12.004 2.003c-5.523 0-10 4.477-10 10 0 1.768.463 3.463 1.34 4.95l-1.42 5.217 5.34-1.397c1.43.783 3.046 1.23 4.74 1.23 5.523 0 10-4.477 10-10s-4.477-10-10-10z"></path>
                            </svg>
                        </HashLink>
                    </a>
                    {/* <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a> */}
                    <a onClick={() => window.open("https://www.facebook.com/share/p/16YbmoSvbr/")} className='cursor-pointer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Vancouver Indians</p>
            </aside>
        </footer>
    );


}

export default Footer