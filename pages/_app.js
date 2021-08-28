import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { wrapper } from "../redux/store"
import { useDispatch } from 'react-redux'
import { defaultLang } from '../redux/thunks/languageThunk'

import '../assets/scss/app.scss'

const MyApp = ({ Component, pageProps }) => {
  
  const router = useRouter()

  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defaultLang())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={router.pathname} classNames='page' timeout={300}>
        <Component {...pageProps} />
      </CSSTransition>
    </SwitchTransition>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps }
}

export default wrapper.withRedux(MyApp);