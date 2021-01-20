import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

{/* get the dyear */}
const today = new Date();
 
const Footer = ({props}) => {

    let router = useRouter();
    let { t } = useTranslation()

        return (
        <div className="footer-main">
            <div className="footer-area footer-padding">
                <div className="container">
                    <div className="row  justify-content-between">
                        <div className="col-lg-5 col-sm-8">
                             <div className="single-footer-caption mb-30">
                                  <div className="footer-logo">
                                     <Link href="/"><a><span class="tooltip hidden">{t('common:meta-title')}</span><Image src="/assets/img/logo.svg" width={250} height={108} alt={t('common:meta-title')} /></a></Link>
                                 </div>
                                 <div className="footer-tittle">
                                     <div className="footer-pera">
                                         <p className="info1">{t('common:footer-text')}</p>
                                    </div>
                                 </div>
                             </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle mt-4">
                                    <h4>{t('common:quick-links')}</h4>
                                    <ul>
                                        <li><Link href="/about"><a>{t('common:about')}</a></Link></li>
                                        <li><Link href="/services"><a>{t('common:services')}</a></Link></li>
                                        <li><Link href="/about"><a>{t('common:history')}</a></Link></li>
                                        <li><Link href="/facility"><a>{t('common:our-facility')}</a></Link></li>
                                        <li><Link href="/contact"><a>{t('common:contact')}</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-7">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle mt-4">
                                    <h4>{t('common:other-links')}</h4>
                                    <ul>
                                        <li><Link href={router.asPath} locale="en-US"><a>English</a></Link></li>
                                        <li><Link href={router.asPath} locale="fr"><a>Français</a></Link></li>
                                        <li><Link href="/about"><a>{t('common:programs')}</a></Link></li>
                                        <li><Link href="/services"><a>{t('common:services')}</a></Link></li>
                                        <li><Link href="/gallery"><a>{t('common:gallery')}</a></Link></li>                                
                                     </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="row align-items-center">
                        <div className="col-xl-12 ">
                            <div className="footer-copy-right">
                               <p> 
                                Copyright &copy;  {today.getFullYear()} {t('common:copy-right')} <Link href="https://www.websolutions.ca/"><a target="_blank" rel="noopener">
                                <span class="tooltip hidden">Websolutions.ca</span><Image src="/assets/img/websolutions.svg" width={150} height={28} alt="Websolutions.ca" /></a></Link>
                                  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default Footer
