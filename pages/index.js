import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Services from '../components/Services';
import Slider from '../components/Slider';

import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

export default function Home(props) {

    let { t } = useTranslation()
    let router = useRouter();
 
   return (
    <>
      <Layout>
          <Head>
              <title>{t('common:meta-title')}</title>
              <meta name="description" content={t('common:meta-description')} />
          </Head>
             <Slider/>            
            <Services/>
      </Layout>
    </>
  )
}
