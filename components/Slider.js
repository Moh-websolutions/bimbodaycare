import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';


const Slider = () => {

    let router = useRouter();
    let { t } = useTranslation()

    return (

        <div className="slider-area">
            <div className="main__circles">
                <div className="main__circle" data-aos="zoom-in"></div>
            </div>
            <div className="slider-active">
                <div className="single-slider slider-height slider-padding d-flex align-items-start">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay=".6s">{t('common:slider-title.0')} <br/>{t('common:slider-title.1')}</h1>
                                    <p data-animation="fadeInUp" data-delay=".8s">{t('common:slider-subtitle')}</p>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="hero__caption">
                                   <div className="slider-btns">
                                        <Link href="/contact" ><a data-animation="fadeInLeft" data-delay="1.0s" className="btn radius-btn">{t('common:contact-us-now')}</a></Link>
                                        <Link href="/gallery"><a data-animation="fadeInRight" data-delay="1.0s" className="popup-video video-btn ani-btn">
                                        <span class="tooltip hidden">Open Gallery</span><i className="fas fa-images"></i></a></Link>
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


export default Slider