import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Content, Modaldelete, Navbar } from "./components";
import Modaledit from "./components/molekul/Modaledit";
import {
  setForm,
  setId,
  setmodalDelete,
  setmodalEdit,
} from "./redux/modalRedux";
import { getTodo } from "./redux/todoRedux";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const edit = useSelector((state) => state.modals.edit);
  const deletes = useSelector((state) => state.modals.delete);

  const openModalDelete = () => {
    dispatch(setmodalDelete(!deletes));
  };
  const openModalEdit = () => {
    dispatch(setmodalEdit(!edit));
  };
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  useEffect(() => {}, [todo]);
  return (
    <div className="App">
      <Navbar />

      <div className="main-content grid md:grid-cols-4 gap-4 p-[24px] sm:grid-cols-1">
        {todo.length ? (
          todo.map((data, i) => (
            <div
              key={i}
              className="flex flex-col justify-start p-[16px] bg-primarySurface border border-primaryBorder"
            >
              {/* button */}
              <button
                type="button"
                class="text-primaryBorder hover:text-white border border-primaryBorder tast-name  focus:ring-4 focus:outline-none focus:ring-primaryBorder leading-5 rounded font-normal px-[8px] py-[2px] text-center mb-[8px] w-24 text-xs"
              >
                {data.title}
              </button>
              {/* description*/}
              <p className="font-bold text-xs mb-[8px]">{data.description}</p>
              {/* Items */}
              <Content key={i} id={data.id} />
              <div
                onClick={() => {
                  openModalEdit(!edit);
                  dispatch(setId(data.id));
                  dispatch(
                    setForm({
                      id: "",
                      name: "",
                      progress_percentage: 0,
                      isUpdate: false,
                    })
                  );
                }}
                className="cursor-pointer flex flex-row justify-start mt-[10px] items-center font-normal"
              >
                <img
                  src={require("./assets/icons/plus.svg").default}
                  className="h-5 m-[5px] "
                  alt="mainlogo"
                />
                <p className="text-xs">New Task</p>
              </div>
            </div>
          ))
        ) : (
          <div className="">Loading</div>
        )}

        {/* <div className="flex flex-col p-[16px] bg-secondarySurface border border-secondaryBorder">
          <button
            type="button"
            class="text-primaryBorder hover:text-white border border-primaryBorder  focus:ring-4 focus:outline-none focus:ring-primaryBorder leading-5 rounded font-normal px-[8px] py-[2px] text-center mb-[8px] w-24 text-xs"
          >
            Group Task 1
          </button>
          <p className="font-bold text-xs mb-[8px]">January - Maret</p>
          <NotContent />
        </div>
        <div className="flex flex-col p-[16px] bg-dangerSurface border border-dangerBorder">
          makan
        </div>
        <div className="flex flex-col p-[16px] bg-successSurface border border-successBorder">
          makan
        </div> */}
      </div>
      <Modaldelete open={deletes} setOpen={openModalDelete} />
      <Modaledit open={edit} setOpen={openModalEdit} />
    </div>
  );
}

export default App;
