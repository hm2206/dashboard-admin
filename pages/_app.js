import React from "react"
import { wrapper } from "../redux/store"
import '../assets/scss/app.scss'

const MyApp = ({ Component, pageProps}) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);