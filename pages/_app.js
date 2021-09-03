import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { wrapper } from "../redux/store"
import { useDispatch, useSelector } from 'react-redux'
import { defaultLang } from '../redux/thunks/languageThunk'

import '../assets/scss/app.scss'


const MyApp = ({ Component, pageProps }) => {
  
  const router = useRouter()

  // redux
  const dispatch = useDispatch();
  const { title } = useSelector(state => state.screen)

  useEffect(() => {
    dispatch(defaultLang())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>
        <Head>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap"/>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap"/>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"/>
          <title>{title}</title>
        </Head>

        <SwitchTransition mode="out-in">
          <CSSTransition key={router.pathname} classNames='page' timeout={300}>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>
      </>
  )
}


MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps }
}


export default wrapper.withRedux(MyApp);