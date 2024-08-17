import { BrowserRouter } from "react-router-dom";
/* import CardComponent from "./cards/components/card/CardComponent.jsx";
import Cards from "./cards/components/Cards.jsx";
import CardsPage from "./cards/pages/CardsPage.jsx";
import EventComponent from "./sandbox/Events/EventComponent.jsx";
import EventComponent2 from "./sandbox/Events/EventComponent2.jsx";
import HW_30_07_24 from "./sandbox/HW/HW_30_07_24.jsx";
import HW_30_07_24_1 from "./sandbox/HW/HW_30_07_24_1.jsx";
import HW_30_07_24_3 from "./sandbox/HW/HW_30_07_24_3.jsx";
import MyFormExample from "./sandbox/usestate/MyFormExample.jsx";
import MyUseStateComponent from "./sandbox/usestate/MyUseStateComponent.jsx";
import PlusMinus from "./sandbox/usestate/PlusMinus.jsx";
import TodoList from "./sandbox/usestate/TodoList.jsx"; */
import Router from "./routes/Router.jsx";
import Layout from "./layout/Layout.jsx";
import UserProvider from "./users/providers/UserProvider.jsx";
import CustomThemeProvider from "./providers/CustomThemeProvider.jsx";
import SnackbarProvider from "./providers/SnackbarProvider.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <CustomThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </CustomThemeProvider>
      </BrowserRouter>
      {/* <CardsPage />
      <MyFormExample />
      <TodoList />
      <HW_30_07_24_3 />
      <HW_30_07_24_1 />
      <HW_30_07_24 />
      <PlusMinus />
      <Cards />
      {/*  <EventComponent /> * /}
      {/* <EventComponent2 /> * /}
      <MyUseStateComponent /> */}
    </>
  )
}

export default App
