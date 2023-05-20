const ToDoList = ({ toDos, setToDos }) => {

  return toDos.map((item) => {

    const checkTodo = (e) => {
      setToDos(
        toDos.filter((list) => {
          if (list.key === item.key) {
            list.status = e.target.checked;
            list.edit = false;
          }
          return list;
        })
      );
    }

    const EditButton = () => {
      setToDos(
        toDos.filter((list) => {
          if (list.key === item.key) {
            list.edit = true;
          }
          return list;
        })
      );
    }

    const EditTodo = (e) => {
      setToDos(
        toDos.filter((list) => {
          if (list.key === item.key) {
            item.value = e.target.value
          }
          return list;
        })
      );
    }

    const EditSubmit = () => {
      setToDos(
        toDos.filter((list) => {
          if (list.key === item.key) {
            list.edit = false;
          }
          return list;
        })
      );
    }

    const DeleteTodo = (e) => {
      setToDos(
        toDos.filter((list) => {
          return list.key !== item.key;
        })
      );
    }
    

    return (
      <div className="todo-list">
        <div className="list-data">
          <input type="checkbox" checked={item.status} className="checkbox" onClick={checkTodo} />

          {item.status ? (
            <div>
              <h4 className="list-name"><del> {item.value} </del> </h4> <p className="date"> &nbsp; {item.date}</p>
            </div>
            
          ) : item.edit ? (
            <div>
              <input type="text"  value={item.value} className="list-name"  onChange={EditTodo} /> <br /> <p className="date"> &nbsp; {item.date}</p>
            </div>
          ) : (
            <div>
              <h4 className="list-name">{item.value} </h4>  <p className="date"> &nbsp; {item.date}</p>
            </div>
          )}
        </div>

        <div className="icons">
          {
          item.status ? null :  
          item.edit === true ? 
          <i className="fa-solid fa-check icon1" onClick={EditSubmit} ></i> : (
          <i className="fa-solid fa-pen-to-square icon1"  onClick={EditButton} ></i>
          )
          }
          <i className="fa-solid fa-trash icon1" onClick={DeleteTodo} ></i>
        </div>
      </div>
    );
  });
};

export default ToDoList;
