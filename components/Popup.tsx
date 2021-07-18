import React, { Fragment, useEffect, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import usePwa from "use-pwa"

import { Button } from "./Button"
import { usePanelbear } from "@app/hooks"

export type State = { type: "closed" } | { type: "open" }
export type Msg = { type: "close_clicked" } | { type: "ok_clicked" }

type Props = {
  state: State
  onMsg: (msg: Msg) => void
}

export const Popup = ({ state, onMsg }: Props) => {
  // Hack to bypass next-js serverside building
  // TODO: find a better way for prompts
  useEffect(() => {
    // @ts-ignore
    import("@pwabuilder/pwainstall")
  }, [])
  const pwaInstaller = useRef<JSX.IntrinsicElements["pwa-install"]>(null)

  const {
    appinstalled,
    canInstallprompt,
    enabledA2hs,
    enabledPwa,
    enabledUpdate,
    isPwa,
    showInstallPrompt,
    unregister,
    userChoice,
  } = usePwa()
  console.log(pwaInstaller.current ? pwaInstaller.current : null)
  const panelBear = usePanelbear()
  return (
    <Transition.Root show={state.type === "open"} as={Fragment}>
      <Dialog onClose={() => onMsg({ type: "close_clicked" })} className="fixed z-10 inset-0 overflow-y-auto">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="w-full h-full flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white rounded-lg overflow-hidden  transform transition-all w-full max-w-md h-full md:h-auto p-4">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                Хочешь установить Такс-🍟?
              </Dialog.Title>
              <div className="mb-3" />
              {!canInstallprompt ? (
                <CannotInstallDescription />
              ) : pwaInstaller.current ? (
                pwaInstaller.current.getInstalledStatus() ? (
                  <InstalledDescripton />
                ) : (
                  <DefaultDescription />
                )
              ) : (
                <DefaultDescription />
              )}

              <pwa-install ref={pwaInstaller}></pwa-install>
              <div className="flex mt-8">
                <Button
                  className="mr-2"
                  onClick={() => {
                    panelBear.track("ok-button-clicked")
                    onMsg({ type: "ok_clicked" })
                  }}
                >
                  Ок
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    panelBear.track("close-button-clicked")
                    onMsg({ type: "close_clicked" })
                  }}
                >
                  Отмена
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const DefaultDescription = () => (
  <Dialog.Description as="p" className="text-sm text-gray-500">
    {`Ткни в кнопку "Install"`}
  </Dialog.Description>
)
const InstalledDescripton = () => (
  <Dialog.Description as="p" className="text-sm text-gray-500">
    Приложение уже установлено
  </Dialog.Description>
)
const CannotInstallDescription = () => (
  <Dialog.Description as="p" className="text-sm text-gray-500">
    Невозможно автоматически установить на вашем устройстве. Попробуйте установить вручную.
  </Dialog.Description>
)
