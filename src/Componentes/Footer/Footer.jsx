import './styleFooter.css'
export function Footer(){
    return(
        <footer className="Footer">
            <div className="seccion1">
                    <div className="con-social">
                        <nav>
                                <ul>
                                    <li><a href="" className='icon-facebook2'></a></li>
                                    <li><a href="" className='icon-instagram'></a></li>
                                    <li><a href="" className='icon-whatsapp'></a></li>
                                    <li><a href="" className='icon-twitter'></a></li>
                                </ul>
                            </nav>
                    </div>
            </div>
           <section>
                <h6>Instituto Tecnológico Superior Cordillera © Copyrights 2020. All Rights</h6>
           </section>
        </footer>
    )
}