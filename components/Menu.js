import PropTypes from 'prop-types'
import Link from 'next/link';

import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

 
const Menu = ({props}) => {

    let router = useRouter();
    let { t } = useTranslation()
    
    return (
        <nav>
            <ul id="navigation">    
                <li><Link href="/"><a>{t('common:home')}</a></Link></li>
                <li><Link href="/about"><a>{t('common:about')}</a></Link>
                    <ul className="submenu">
                        <li><Link href="/about"><a>{t('common:history')}</a></Link></li>
                        <li><Link href="/staff"><a>{t('common:staff')}</a></Link></li>
                        <li><Link href="/facility"><a>{t('common:our-facility')}</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/services"><a>{t('common:our-services-programs')}</a></Link></li>
                <li><Link href="/gallery"><a>{t('common:gallery')}</a></Link></li>
                <li><Link href="/contact"><a>{t('common:contact')}</a></Link></li>
                <li><Link href={router.asPath} locale="fr"><a>FR</a></Link></li>
                <li><Link href={router.asPath} locale="en-US"><a>EN</a></Link></li>
            </ul>
        </nav>
    )
 }
export default Menu
