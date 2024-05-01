import { PropsWithChildren, useCallback, useRef } from "react";

interface Props {
  className?: string;
}

export const useModal = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const openModal = useCallback(() => ref.current?.showModal(), []);

  const Modal = useCallback(
    ({ children, className }: PropsWithChildren<Props>) => {
      return (
        <dialog className={`modal rounded-[20px]`} ref={ref}>
          <div className={`modal-box px-[32px] ${className}`}>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                ✕
              </button>
            </form>
            {children}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      );
    },
    [],
  );

  return {
    openModal,
    Modal,
  };
};
