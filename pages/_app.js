import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { wrapper } from "../redux/store"
import { useDispatch, useStore } from 'react-redux'
import { defaultLang } from '../redux/thunks/languageThunk'
import { PersistGate } from 'redux-persist/integration/react'

import '../assets/scss/app.scss'


const MyApp = ({ Component, pageProps }) => {
  
  const router = useRouter()

  // redux
  const dispatch = useDispatch();
  const store = useStore(store => store)

  useEffect(() => {
    dispatch(defaultLang())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <PersistGate persistor={store.__PERSISTOR}>
        <Head>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap"/>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap"/>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"/>
          <title>{pageProps?.props?.title}</title>
        </Head>

        <SwitchTransition mode="out-in">
          <CSSTransition key={router.pathname} classNames='page' timeout={300}>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>
      </PersistGate>
  )
}


MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps }
}


export default wrapper.withRedux(MyApp);