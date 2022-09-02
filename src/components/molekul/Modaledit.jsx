/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setForm } from "../../redux/modalRedux";
import { createItem, updateItem } from "../../redux/todoRedux";

const Modaledit = ({ open, setOpen }) => {
  const dispacth = useDispatch();
  const cancelButtonRef = useRef(null);
  const dataId = useSelector((state) => state.modals.id);
  const form = useSelector((state) => state.modals.form);
  useEffect(() => {
    console.log(dataId);
    console.log(form);
  }, [dataId, form]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {form.isUpdate ? "Update Task" : "Create Task"}
                      </Dialog.Title>
                      <div className="mt-2">
                        <form>
                          <div class="mb-6">
                            <label
                              htmlFor="name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Task name
                            </label>
                            <input
                              onChange={(e) =>
                                dispacth(
                                  setForm({
                                    ...form,
                                    name: e.target.value,
                                  })
                                )
                              }
                              type="name"
                              id="name"
                              value={form.name}
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                            />
                          </div>
                          <div class="mb-6">
                            <label
                              htmlFor="progress"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Task progress
                            </label>
                            <input
                              onChange={(e) =>
                                dispacth(
                                  setForm({
                                    ...form,
                                    progress_percentage: e.target.value,
                                  })
                                )
                              }
                              type="number"
                              min="0"
                              max="100"
                              value={form["progress_percentage"]}
                              id="progress"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      form.isUpdate
                        ? dispacth(updateItem(dataId, form))
                        : dispacth(createItem(dataId, form));
                    }}
                  >
                    Save Task
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modaledit;
