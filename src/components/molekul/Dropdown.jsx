/* This Dropdown requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setmodalDelete, setmodalEdit } from "../../redux/modalRedux";

const Dropdown = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.modals.edit);
  const deletes = useSelector((state) => state.modals.delete);
  return (
    <>
      <Menu as="div" className="relative inline-block text-left ml-2">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-2 py-2 ">
            <img
              src={require("../../assets/icons/dot.svg").default}
              className="h-5 m-[5px]"
              alt="mainlogo"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition  duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item className="flex flex-row p-[12px]">
              <button
                href="#"
                className=" w-full bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                <img
                  src={require("../../assets/icons/arrowright.svg").default}
                  className="h-5 mx-[10px]"
                  alt="mainlogo"
                />
                <p>Move Right</p>
              </button>
            </Menu.Item>
            <Menu.Item className="flex flex-row p-[12px]">
              <button
                href="#"
                className=" w-full bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                <img
                  src={require("../../assets/icons/arrowleft.svg").default}
                  className="h-5 mx-[10px]"
                  alt="mainlogo"
                />
                <p>Move Left</p>
              </button>
            </Menu.Item>
            <Menu.Item className="flex flex-row p-[12px]">
              <button
                onClick={() => dispatch(setmodalEdit(!edit))}
                className=" w-full bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                <img
                  src={require("../../assets/icons/edit.svg").default}
                  className="h-5 mx-[10px]"
                  alt="mainlogo"
                />
                <p>Move Edit</p>
              </button>
            </Menu.Item>
            <Menu.Item className="flex flex-row p-[12px]">
              <button
                type="button"
                onClick={() => dispatch(setmodalDelete(!deletes))}
                className=" w-full bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
                data-modal-toggle="delete-modal"
              >
                <img
                  src={require("../../assets/icons/trash.svg").default}
                  className="h-5 mx-[10px]"
                  alt="mainlogo"
                />
                <p>Delete</p>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Dropdown;
