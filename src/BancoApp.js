import { SocketProvider } from "./context/SocketContext"
import { UiProvider } from "./context/UiContext"
import { RouterPage } from "./pages/RouterPage"

export const BancoApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  )
}
